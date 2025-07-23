import { Component, OnInit } from '@angular/core'
import { MealService } from './meal.service'
import { Meal } from './meal.model'
import { DatePipe, NgFor } from '@angular/common'

@Component({
  selector: 'app-feed',
  imports: [DatePipe, NgFor],
  providers: [MealService],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss',
})
export class FeedComponent implements OnInit {
  meals: Meal[] = []

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getMeals().subscribe((meals) => {
      this.meals = meals
    })
  }
}
