import { Component, OnInit } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { TaskService } from './task.service';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  title = "This part works";
  parts;

  constructor(service: TaskService) {
    this.parts = service.getTasks();
    
  }
}
