import React from "react";

let nextId = 1;

const AddTodo = ({ inputTodo, setInputTodo, todos, setTodos, lessTodo, setLessTodo}) => {

    const handleKeyEnter = (e) => {
        if (e.keyCode === 13) {
            setTodos([...todos,
            { id: nextId++, inputTodo: inputTodo }
            ])
        }
    }

    return (
        <>
            <div className='container d-flex justify-content-start col-3 bg-light'>
                <input type='texto' placeholder='What need to be done?' onChange={(e) => { setInputTodo(e.target.value) }} value={inputTodo} onKeyDown={handleKeyEnter}></input>
            </div>

            <div className="container d-flex justify-content-start col-3 bg-light">
                <ul>
                    {
                        todos && todos.map((task, index) => (
                            <li key={index} onKeyDown={handleKeyEnter} onMouseOver={()=>setLessTodo(true)} onMouseOut={()=>setLessTodo(false)}>
                                {task.inputTodo} {lessTodo && (<button onClick={()=>{
                                    setTodos(
                                        todos.filter(a => a.id !== task.id)
                                    )
                                }}>X</button>)}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}

export default AddTodo








