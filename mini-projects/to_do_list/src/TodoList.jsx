import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Import uuidv4 here

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    // Corrected deleteTodo function signature
    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
        console.log(id);
        // Example implementation: remove the todo with this id
        
    };

    let upperCaseCall = () => { 
        setTodos( (prevTodos) =>
        prevTodos.map((todo)=>({
           
            ...todo,
            task: todo.task.toUpperCase()
          
    })) 
        );
      
    };

        let UpperCaseOne = (id) => { 
        setTodos( (prevTodos) =>
        prevTodos.map((todo)=>{
            if(todo.id == id){
                return {
            ...todo,
            task: todo.task.toUpperCase()


           
           };
        } else {
            return todo;

        }
    })
        );
      
    };
     
     


    return (
        <div>
            <input 
                placeholder="add a task" 
                value={newTodo}
                onChange={updateTodoValue} 
            />
            <br/>
            <button onClick={addNewTask}>Add Task</button>
            <br/><br/><br/>
            <hr/>
            
            <h4> Task Todo </h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                        <button onClick={() => UpperCaseOne(todo.id)}>UpperCase One</button>
                        
                        
                    
                    </li>
                ))}
            </ul>
            <br></br>
            <button onClick={upperCaseCall}>UpperCaseCall</button>
        </div>
    );
}
