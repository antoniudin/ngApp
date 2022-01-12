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

  text = "lorem ipsum dolore is a simple text for example"

  obj = {
    name: "tony",
    num: 10.25,
    date: new Date(2022,3,1)
  }

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
