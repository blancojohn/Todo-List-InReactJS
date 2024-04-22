import React, {useState} from "react";
import AddTodo from "./AddTodo";
import CounterTodo from "./CounterTodo"



const TodoList= ()=>{
    const[todo, setTodo]= useState('')
    const[addTodo, setAddTodo]= useState([])
    const[done, setDone]= useState(null) /*MOMENTANEAMENTO SERÁ NULL. QUIZÁ SEA UN BOOLEANO  */


    return(
        <>
            <div className='container d-flex justify-content-center col-3 mt-5 bg-light'>
                <h1>TODOS</h1>
            </div>
            <AddTodo setTodo={setTodo} todo={todo} addTodo={addTodo} setAddTodo={setAddTodo} />
            <CounterTodo />
        </>
    )
}

export default TodoList

