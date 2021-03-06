import { FilterModalPage } from './filter-modal/filter-modal.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DailyTasksPage } from './daily-tasks.page';

const routes: Routes = [
  {
    path: '',
    component: DailyTasksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DailyTasksPage, FilterModalPage],
  entryComponents: [FilterModalPage]
})
export class DailyTasksPageModule {}
