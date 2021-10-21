import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task: Task[] = [];

  constructor(private taskServace: TaskService) { }

  ngOnInit(): void {
    this.taskServace.getTasks().subscribe((tasks) => this.task = tasks);
  }

}
