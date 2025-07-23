export interface Meal {
  id?: number
  author: number
  title: string
  description?: string
  location?: string
  image?: string
  kcalories?: number
  created_at?: Date
  updated_at?: Date
}
