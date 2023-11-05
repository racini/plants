import { Component } from '@angular/core';
import {Plant} from "../../entities/plant";

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.scss']
})
export class ListPlantsComponent {

  plantList : Plant[] = []

  constructor() { }

  ngOnInit(): void {

  }

}
