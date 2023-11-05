import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlantsComponent } from './list-plants/list-plants.component' ;
import {RouterModule, Routes} from "@angular/router";
import {PlantService} from "./plant.service";

const routes: Routes = [
  {
    path: 'list',
    component: ListPlantsComponent,
  },
];

@NgModule({
  declarations: [ListPlantsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ListPlantsComponent],
  providers: [PlantService],
})
export class PlantsModule { }
