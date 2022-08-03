import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():string[] {
    return[
      '/assets/download(1).jpg',
      '/assets/download(2).jpg',
      '/assets/download(3).jpg',
      '/assets/download(4).jpg',
      '/assets/download(5).jpg',
      '/assets/download(6).jpg',
      '/assets/download(7).jpg',
      '/assets/download(8).jpg',
      '/assets/download(9).jpg',
      '/assets/download.jpg',
    ]
  }
}
