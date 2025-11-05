import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { todoItem } from './models/todoItem.model';
import { const_todoList } from './models/todo.mock';

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

  todoList: todoItem[] =const_todoList;

  //! Burada değişken tanımlayacağız!
  totalInCompletedTasks: number;

  isAllTaskShowing: boolean = true;

  buttonText:string = 'Sadece Yapılacakları Göster'

  getInCompletedTasksCount(){
    return this.todoList.filter(todo => !todo.isDone).length
  }



  ngOnInit(): void {
    console.log('çalıştı');  
    this.totalInCompletedTasks = this.todoList.filter(t=>!t.isDone).length;
  }

  constructor(){
    console.log('constructor çalıştı');
  }
  ngDoCheck(): void {
     this.totalInCompletedTasks = this.todoList.filter(t=>!t.isDone).length;
  }
  ngOnChanges(changes: SimpleChanges): void {
     console.log('on change çalıştı!');
  }


  click_handled():void{
    this.isAllTaskShowing = !this.isAllTaskShowing;
    console.log('Değişken değeri:',this.isAllTaskShowing);
    this.todoList = !this.isAllTaskShowing ? this.todoList.filter(x=>!x.isDone)
                                           : const_todoList;

    this.buttonText = this.isAllTaskShowing ? 'Sadece Yapılacakları Göster'
                                            : 'Tüm listeyi göster' 
  }
}
