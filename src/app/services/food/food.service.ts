import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      {
        id: 1,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download.jpg'
      },
      {
        id: 2,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins: ['Italy'] ,
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(1).jpg'

      },
      {
        id: 3,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(2).jpg'
      },{
        id: 4,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(3).jpg'

      },
      {
        id: 5,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(4).jpg'

      },
      {
        id: 6,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(5).jpg'

      },
      {
        id: 7,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(6).jpg'
      },
      {
        id: 8,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(7).jpg'
      },
      {
        id: 9,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(8).jpg'
      },
      {
        id: 10,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(9).jpg'
      }
    ]
  }
}
