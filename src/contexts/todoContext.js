import { useState , useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:234,
        todo:"anything",
        completed:false,
    }],
      addTodo:(todo)=>{},
      updateTodo:(id,todo)=>{},    
      deleteTodo:(id)=>{},
      checkedTodo:(id)=>{},
});

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext);
}
 
