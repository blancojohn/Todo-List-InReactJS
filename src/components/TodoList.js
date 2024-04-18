import React, {useState} from "react";
import InputTodo from "./InputTodo";
import AddTodo from "./AddTodo";
import CounterTodo from "./CounterTodo"



const TodoList= ()=>{
    const[todo, setTodo]= useState([])
    const[done, setDone]= useState(null) /*MOMENTANEAMENTO SERÁ NULL. QUIZÁ SEA UN BOOLEANO  */


    return(
        <>
            <div className='container d-flex justify-content-center col-4 mt-5 bg-light'>
                <h1>TODOS</h1>
            </div>
            <InputTodo setTodo={setTodo}/>
            <AddTodo />
            <div className='container d-flex justify-content-start col-4 mt-5 bg-light'>
                {todo}
            </div>
            <CounterTodo />
        </>
    )
}

export default TodoList

