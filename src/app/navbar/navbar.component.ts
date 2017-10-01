import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public menuItemsArray: any[] = [
    {'title': 'Strona Główna', 'link': '/' , 'external': false},
    {'title': '•• Kanapy', 'link': 'sofas', 'external': false},
    {'title': '•• Narożniki', 'link': '/corners', 'external': false},
    {'title': '•• Fotele', 'link': 'chairs', 'external': false},
    {'title': 'Współpraca', 'link': 'cooperation', 'external': false},
    {'title': 'Sklep', 'link': 'http://allegro.pl/listing/user/listing.php?us_id=43319104&order=m', 'external': true},
    {'title': 'Kontakt', 'link': '/contact', 'external': false},
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  public onMenuClose() {}
  public onMenuOpen() {}
  private onItemSelect(item: any) {
    console.log(item);
    if (item.external) {
      window.open(item.link);
    } else {
      this.router.navigate([item.link]);
    }
  }

}
