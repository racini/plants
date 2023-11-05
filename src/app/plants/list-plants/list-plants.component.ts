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
  plantasInterior: number = 0;
  plantasExterior: number = 0;

  constructor(private plantsService: PlantService) { }

  ngOnInit(): void {
    this.getPlantList()
  }

  getPlantList() {
    this.plantsService.getAllPlants().subscribe({
      next: (plantList: Plant[]) => {
        this.plantList = plantList
        this.plantasExterior = this.plantList.filter(plant => plant.tipo === 'Exterior').length
        this.plantasInterior = this.plantList.filter(plant => plant.tipo === 'Interior').length
      },
      error: (error) => {
        console.log('Error fetching plants', error)
      }
    })
  }
}
