import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.interface';
import { HeaderOptions } from 'src/app/models/header-options';
import { CategoriesService } from 'src/app/services/categories.service';
import { ActionSheetController, IonModal } from '@ionic/angular';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';

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
  canEdit: boolean = false;
  @ViewChild(IonModal) modal?: IonModal;
  constructor(
    private router: Router,
    private categoriesService: CategoriesService,
    private actionSheetCtrl: ActionSheetController,
    private remoteConfig: AngularFireRemoteConfig,
  ) {}

  async ngOnInit() {
    try {
      await this.remoteConfig.fetchAndActivate();

      const myParamValue =
        await this.remoteConfig.getValue('canEditCategories');
      const myParam = myParamValue.asBoolean();

      this.canEdit = myParam;
    } catch (error) {
      console.error('Error fetching remote config:', error);
    }
  }
  ionViewWillEnter() {
    this.getCategories();
  }

  getCategories() {
    this.listCategoires = this.categoriesService.getCategories();
  }

  page($event: string) {
    this.router.navigate([$event]);
  }

  async presentActionSheet(category: Category) {
    this.categorySelected = category;
    const buttons = {
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteCategory(category);
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
      cssClass: 'my-custom-action-sheet',
    };

    if (this.canEdit) {
      buttons.buttons.push({
        text: 'Editar',
        handler: () => {
          this.openModal();
        },
        role: '',
      });
    }
    const actionSheet = await this.actionSheetCtrl.create(buttons);
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
