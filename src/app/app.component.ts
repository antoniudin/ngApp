import { Component } from '@angular/core';
import { EventInterface } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "title", 
    condition: true,
  }
  
  title = 'angularFront';

  onButtonChange(attr: EventInterface) {
    console.log("You have got this!", attr)
  }
}
