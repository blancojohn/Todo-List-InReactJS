import React from "react";


const InputTodo= ({todo, setTodo})=>{
    const newTodo= todo
    const handleKeyEnter= (e)=>{
        if(e.keyCode === 13){
            alert('agregado')
            setTodo(newTodo)
        }
    } 

    return(
        <>
            <div className='container d-flex justify-content-start col-4 bg-light' onKeyDown={handleKeyEnter}>
                <input type='texto' placeholder='What need to be done?' onChange={(e)=>{setTodo(e.target.value)}} value={todo} onKeyDown={()=>handleKeyEnter}></input>
            </div>
        </>
    )
}

export default InputTodo
            