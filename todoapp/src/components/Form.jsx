import { useState } from "react";
import styles from './form.module.css'
export default function Form({todos, setTodos}){
    //const [todo, setTodo]=useState("");
    const [todo, setTodo]=useState({name: "", done: false});
    function handleSubmit(e){
        e.preventDefault();
        setTodos([...todos, todo]);
        setTodo({name: "", done: false});
    }
    return <form className={styles.todoform} onSubmit={handleSubmit}>
  <input 
        className={styles.mordenInput}
        onChange={(e)=>setTodo({name:e.target.value,done:false})} 
        value={todo.name} 
        type="text" 
        placeholder="enter todos here..."
    />
    <button className={styles.mordenButton} type="submit">Add</button>
</form>
}