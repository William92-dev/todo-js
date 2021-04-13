

import './styles.css'; 

//import { Todo } from './classes/todo.class.js'; 
//import { TodoList } from './classes/todo-list.class';
import { Todo,TodoList } from './classes';
import { crearTodoHtml } from './js/component';


export const todoList = new TodoList();

//todoList.cargarLocalStorage(); 


//todoList.todos.forEach(todo => crearTodoHtml(todo)); 
todoList.todos.forEach(crearTodoHtml); 
