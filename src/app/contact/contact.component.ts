import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat = 51.206741;
  lng = 18.100587;



  constructor() { }

  ngOnInit() {
  }

}
