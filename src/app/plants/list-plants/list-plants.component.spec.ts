import {ComponentFixture, TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {PlantService} from '../plant.service';
import {ListPlantsComponent} from './list-plants.component';

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;
  let mockPlantService: jasmine.SpyObj<PlantService>;

  beforeEach(async () => {
    mockPlantService = jasmine.createSpyObj(['getAllPlants']);
    await TestBed.configureTestingModule({
      declarations: [ListPlantsComponent],
      providers: [
        {provide: PlantService, useValue: mockPlantService}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;

    mockPlantService.getAllPlants.and.returnValue(of([
      {
        id: 1,
        nombre_cientifico: "",
        altura_maxima: 10,
        sustrato_siembra: "",
        nombre_comun: 'Plant 1',
        tipo: 'Interior',
        clima: 'Tropical'
      },
      {
        id: 1,
        nombre_cientifico: "",
        altura_maxima: 10,
        sustrato_siembra: "",
        nombre_comun: 'Plant 2',
        tipo: 'Exterior',
        clima: 'Desert'
      },
      {
        id: 1,
        nombre_cientifico: "",
        altura_maxima: 10,
        sustrato_siembra: "",
        nombre_comun: 'Plant 3',
        tipo: 'Interior',
        clima: 'Tropical'
      }
    ]));

    fixture.detectChanges();
  });

  it('should render table with correct number of columns and thead', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');
    const headerRow = tableRows[0];
    expect(headerRow.cells.length).toBe(4);

    for (let i = 1; i < tableRows.length; i++) {
      expect(tableRows[i].cells.length).toBe(4);
    }

    expect(headerRow.cells[0].textContent).toBe('#');
    expect(headerRow.cells[1].textContent).toBe('Nombre común');
    expect(headerRow.cells[2].textContent).toBe('Tipo');
    expect(headerRow.cells[3].textContent).toBe('Clima');
  });


  it('should render table rows that match the plantList', () => {
    const tableRows = fixture.nativeElement.querySelectorAll('tr');

    expect(tableRows.length - 1).toBe(component.plantList.length);

    for (let i = 1; i < tableRows.length; i++) {
      const cells = tableRows[i].cells;
      const plant = component.plantList[i - 1];

      expect(cells[0].textContent).toBe(String(i));
      expect(cells[1].textContent).toBe(plant.nombre_comun);
      expect(cells[2].textContent).toBe(plant.tipo);
      expect(cells[3].textContent).toBe(plant.clima);
    }
  });

});
