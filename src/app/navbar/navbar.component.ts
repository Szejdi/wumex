import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuItemsArray: any[] = [
    {'title': 'Strona Główna', 'link': '/'},
    {'title': '•• Kanapy', 'link': '#'},
    {'title': '•• Narożniki', 'link': '/corners'},
    {'title': '•• Fotele', 'link': '#'},
    {'title': 'Współpraca', 'link': '#'},
    {'title': 'Sklep', 'link': '#'},
    {'title': 'Kontakt', 'link': '/contact'},
  ];
  constructor(private router: Router) { }

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
    this.router.navigate([item.link]);
  }

}
