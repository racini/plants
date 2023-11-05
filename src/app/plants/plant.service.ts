import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";

class PlantDetail {
}

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  constructor(private http: HttpClient) { }

  getAllPlants(): Observable<Array<PlantDetail>> {
    return this.http.get<PlantDetail[]>(environment.plantsUrl).pipe(
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
