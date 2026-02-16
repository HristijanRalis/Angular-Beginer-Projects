import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  todoList: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((result: any) => {
      debugger;
      this.todoList = result;
    });
  }
}
