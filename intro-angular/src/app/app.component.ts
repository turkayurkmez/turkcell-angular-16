import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { todoItem } from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges, DoCheck {



  title: string = 'angular platformuna hoş geldiniz!';
  sample: string = 'burada bir örnek var';
  author: string = 'Türkay Ürkmez';
  date = '2025 Kasım';

  isChecked: boolean = true;
  textValue: string = 'Değişti';

  todoList: todoItem[] = [
    new todoItem('Angular öğren', false),
    new todoItem('.net ile api geliştir', true),
    new todoItem('sql db tasarla', false),
  ];

  //! Burada değişken tanımlayacağız!

  getInCompletedTasksCount(){
    return this.todoList.filter(todo => !todo.isDone).length
  }



  ngOnInit(): void {
    console.log('çalıştı');  
  }

  constructor(){
    console.log('constructor çalıştı');
  }
  ngDoCheck(): void {
    console.log('doCheck çalıştı')
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log('on change çalıştı!');
  }
}
