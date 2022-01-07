import { DisplayAuthorsService } from './display-authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent {
  isActive = true;
  value = 1;
  authors;
  email = "default@default.com"

  func () {
    console.log(this.email)
  }

  clickButton () {
    console.log("Button was clicked")
  }

  constructor(service: DisplayAuthorsService) { 
    this.authors=service.displayAuthors();
  }
}
