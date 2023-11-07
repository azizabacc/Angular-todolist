import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit{
  todos! :Todo[];
  inputTodo:string='';
  constructor(){}
  ngOnInit(): void {
    this.todos = [
      {
        content:'fist task',
        completed :false
      },
      {
        content:'second task',
        completed :true
      }
    ]
    
  }

  toggleDone (id:number){
    this.todos.map((todo,i)=>{
      if(i==id) todo.completed=!todo.completed;
      return todo;
    })

  }

  deleteTodo (id:number){
    this.todos=this.todos.filter((todo,i)=>i!==id);
  }
  addTodo(){
    this.todos.push( {
      content:this.inputTodo,
      completed :false
    })
this.inputTodo=""
  }
}
