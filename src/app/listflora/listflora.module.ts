import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListfloraPage } from './listflora.page';
import { ListfloraResolver } from './listflora.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListfloraPage,
    resolve: {
      data: ListfloraResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListfloraPage],
  providers: [
    ListfloraResolver
  ]
})
export class ListfloraPageModule {}
