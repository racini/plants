import { Injectable } from '@angular/core';
import {Plant} from "../entities/plant";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlantsService {

  constructor(private http: HttpClient) { }

  getPlantDetails(): Observable<Plant[]> {
    return this.http.get<Plant[]>(environment.plantsUrl).pipe(
      catchError((error: HttpErrorResponse): Observable<never> => {
        return throwError(
          () =>
            new Error(
              'An unexpected error occurred when fetching list of plants',
            ),
        );
      }),
    );
  }

}
