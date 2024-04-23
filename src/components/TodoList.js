import React, {useEffect, useState} from "react";
import AddTodo from "./AddTodo";
import CounterTodo from "./CounterTodo"


let initialCounter=[0]

const TodoList= ()=>{
    const[todo, setTodo]= useState('')
    const[addTodo, setAddTodo]= useState([])
    const[counterTodo, setCounterTodo]= useState(initialCounter)
    const[done, setDone]= useState(null) /*MOMENTANEAMENTO SERÁ NULL. QUIZÁ SEA UN BOOLEANO  */

    useEffect(()=>{
        setCounterTodo(addTodo.length)
    },[addTodo])

    return(
        <>
            <div className='container d-flex justify-content-center col-3 mt-5 bg-light'>
                <h1>TODO-LIST</h1>
            </div>
            <AddTodo setTodo={setTodo} todo={todo} addTodo={addTodo} setAddTodo={setAddTodo} />
            <CounterTodo counterTodo={counterTodo} setCounterTodo={setCounterTodo}/>
        </>
    )
}

export default TodoList

