import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesPageRoutingModule } from './categories-routing.module';

import { CategoriesPage } from './categories.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularFireRemoteConfigModule } from '@angular/fire/compat/remote-config';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesPageRoutingModule,
    SharedModule,
    AngularFireRemoteConfigModule,
  ],
  declarations: [CategoriesPage],
})
export class CategoriesPageModule {}
