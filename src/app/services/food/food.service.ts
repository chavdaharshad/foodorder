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
        imageurl:'/assets/download.jpg',
        cooktime:10-20
      },
      {
        id: 2,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins: ['India'] ,
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(1).jpg',
        cooktime:10-20
      },
      {
        id: 3,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['iran'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(2).jpg',
        cooktime:10-20
      },{
        id: 4,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['indoneshiya'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(3).jpg',
        cooktime:10-20
      },
      {
        id: 5,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['irak'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(4).jpg',
        cooktime:10-20

      },
      {
        id: 6,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(5).jpg',
        cooktime:10-20

      },
      {
        id: 7,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(6).jpg',
        cooktime:10-20
      },
      {
        id: 8,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(7).jpg',
        cooktime:10-20
      },
      {
        id: 9,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(8).jpg',
        cooktime:10-20
      },
      {
        id: 10,
        price: 10,
        name: 'Pizzza',
        favorite:false,
        star: 4.5,
        origins:['italy'],
        tags: ['fastfood','pizza','lunch'],
        imageurl:'/assets/download(9).jpg',
        cooktime:10-20
      }
    ]
  }
}
