import React from "react";


const InputTodo= ({todo, setTodo})=>{
    return(
        <>
            <div className='container d-flex justify-content-start col-4 bg-light'>
                <input type='texto' placeholder='What need to be done?' onChange={(e)=>{setTodo(e.target.value)}} value={todo}></input>
            </div>
        </>
    )
}

export default InputTodo