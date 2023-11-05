import { Component } from '@angular/core';
import {Plant} from "../../entities/plant";
import {PlantService} from "../plant.service";

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.scss']
})
export class ListPlantsComponent {

  plantList : Plant[] = []

  constructor(private plantsService: PlantService) { }

  ngOnInit(): void {
    this.getPlantList()
  }

  getPlantList() {
    this.plantsService.getAllPlants().subscribe({
      next: (plantList: Plant[]) => {
        this.plantList = plantList
      },
      error: (error) => {
        console.log('Error fetching plants', error)
      }
    })
  }
}
