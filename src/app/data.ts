import { Food } from "../app/shared/model/Food";
import { Tag } from "./shared/model/Tag";

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Burgger Prep',
        cookTime: '20-20',
        price: 40,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tag: ['fastFood', 'burgger', 'Lunch'],
    },
    {
        id: '2',
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['SLand'],
        stars: 4.5,
        imageUrl: 'assets/food-2.jpg',
        tag: ['fastFood', 'Pizza', 'Lunch'],
    },
    {
        id: '3',
        name: 'Pasta Prep',
        cookTime: '50-70',
        price: 100,
        favorite: false,
        origins: ['Finland'],
        stars: 6.5,
        imageUrl: 'assets/food-3.jpg',
        tag: ['fastFood', 'Pasta', 'Lunch'],
    },
    {
        id: '4',
        name: 'Sandwitch Prep',
        cookTime: '30-20',
        price: 80,
        favorite: false,
        origins: ['USA'],
        stars: 8.5,
        imageUrl: 'assets/food-4.jpg',
        tag: ['fastFood', 'Sandwitch', 'Lunch'],
    },
    {
        id: '5',
        name: 'Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['UAE'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tag: ['fastFood', 'Pizza', 'Lunch'],
    },
    {
        id: '1',
        name: 'Burgger Prep',
        cookTime: '20-20',
        price: 40,
        favorite: false,
        origins: ['UK'],
        stars: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tag: ['fastFood', 'burgger', 'Lunch'],
    },
    {
        id: '2',
        name: 'Pizza Prep',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-2.jpg',
        tag: ['fastFood', 'Pizza', 'Lunch'],
    },
    {
        id: '3',
        name: 'Pasta Prep',
        cookTime: '50-70',
        price: 100,
        favorite: false,
        origins: ['USA'],
        stars: 6.5,
        imageUrl: 'assets/food-3.jpg',
        tag: ['fastFood', 'Pasta', 'Lunch'],
    },
    {
        id: '4',
        name: 'Sandwitch Prep',
        cookTime: '30-20',
        price: 80,
        favorite: false,
        origins: ['UK'],
        stars: 8.5,
        imageUrl: 'assets/food-4.jpg',
        tag: ['fastFood', 'Sandwitch', 'Lunch'],
    },
    {
        id: '5',
        name: 'Pizza Prep',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Fland'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tag: ['fastFood', 'Pizza', 'Lunch'],
    },
    {
        id: '4',
        name: 'Sandwitch Prep',
        cookTime: '30-20',
        price: 80,
        favorite: false,
        origins: ['SLand'],
        stars: 8.5,
        imageUrl: 'assets/food-4.jpg',
        tag: ['fastFood', 'Sandwitch', 'Lunch'],
    },
    {
        id: '5',
        name: 'Pizza Prep',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tag: ['fastFood', 'Pizza', 'Lunch'],
    },
]
export const sample_tags:Tag[]=[
    {name:'All', count:8},
    {name:'FastFood', count:4},
    {name:'Pizza', count:3},
    {name:'SlowFood', count:5},
    {name:'Fry', count:6},
    {name:'Soup', count:1},
]