import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../models/IMenuItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu: IMenuItem[];

  constructor() { }

  ngOnInit() {
    this.menu = this.getMenu();
  }

  getMenu() {
    return MENU;
  }

}

// for simplicity lets keep here but in real app it's coming from service call
const MENU: IMenuItem[] = [
  {
    name: 'Soup of a day',
    description: 'French inion soup',
    calories: 100,
    price: 4.99
  },
  {
    name: 'Famous Beef',
    description: 'Served with vegetable and potatos',
    calories: 200,
    price: 29.99
  },
  {
    name: 'Ice Cream',
    description: 'Vanila and Chocholate',
    calories: 300,
    price: 5.99
  }
];

