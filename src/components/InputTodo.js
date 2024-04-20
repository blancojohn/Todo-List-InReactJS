import React from "react";

let nextId= 0;
const InputTodo= ({todo, setTodo, addTodo, setAddTodo})=>{
    const handleKeyEnter= (e)=>{
        if(e.keyCode === 13){
            setAddTodo([...addTodo,
            { id: nextId++, todo: todo}
            ]);
        }
    } 

    return(
        <>
            <div className='container d-flex justify-content-start col-4 bg-light' onKeyDown={handleKeyEnter}>
                <input type='texto' placeholder='What need to be done?' onChange={(e)=>{setTodo(e.target.value)}} value={todo} onKeyDown={handleKeyEnter}></input>
            </div>
            <ul>
                {
                    addTodo && addTodo.map((pendiente, index) =>(
                        <li key={index}>{pendiente.todo}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default InputTodo
            