import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private menuItemsArray: any[] = [
    {'title': 'Electricity', 'link': '#'},
    {'title': 'Mobile Bill', 'link': '#'},
    {'title': 'Home and Kitchen', 'link': '#',
      'subItems': [
        {'title': 'Furniture', 'link': '#'},
        {'title': 'Cookware', 'link': '#'},
      ]
    },
    {'title': 'Car and Bike Accessories', 'link': '#',
      'subItems': [
        {'title': 'Tyres and Alloys', 'link': '#'},
        {'title': 'Comfort and Safety', 'link': '#'},
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }
  public onMenuClose() {
    console.log('menu closed');
  }
  public onMenuOpen() {
    console.log('menu Opened');
  }
  private onItemSelect(item: any) {
    console.log(item);
  }

}
