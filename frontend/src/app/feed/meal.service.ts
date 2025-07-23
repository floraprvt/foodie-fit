import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Meal } from './meal.model'

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiUrl = 'http://localhost:8000/meals/'

  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.apiUrl)
  }

  createMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(this.apiUrl, meal)
  }

  updateMeal(id: number, meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.apiUrl}${id}/`, meal)
  }

  deleteMeal(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}/`)
  }
}
