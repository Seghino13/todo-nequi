import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { HeaderOptions } from 'src/app/models/header-options';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActionSheetController, IonModal } from '@ionic/angular';
@Component({
  selector: 'app-categories-page',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  headerOptions: HeaderOptions = {
    title: 'Categorias',
    hasIcon: true,
    icon: 'options-outline',
  };
  listCategoires: Category[] = [];
  categorySelected?: Category;
  @ViewChild(IonModal) modal?: IonModal;
  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private actionSheetCtrl: ActionSheetController,
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.getCategories();
  }

  getCategories() {
    this.listCategoires = this.categoriesService.getCategories();
    console.log(this.listCategoires);
  }

  page($event: string) {
    this.router.navigate([$event]);
  }

  async presentActionSheet(category: Category) {
    this.categorySelected = category;
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteCategory(category);
          },
        },
        {
          text: 'Editar',
          handler: () => {
            this.openModal();
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  deleteCategory(category: Category) {
    this.categoriesService.deleteCategory(category);
    this.getCategories();
  }

  openModal() {
    this.modal?.present();
  }

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm(event: boolean) {
    if (!event) return;
    this.modal?.dismiss();
    this.getCategories();
  }
}
