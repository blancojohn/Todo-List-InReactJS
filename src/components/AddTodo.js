import React from "react";

let nextId = 1;

const AddTodo = ({ todo, setTodo, addTodo, setAddTodo, lessTodo, setLessTodo}) => {

    const handleKeyEnter = (e) => {
        if (e.keyCode === 13) {
            setAddTodo([...addTodo,
            { id: nextId++, todo: todo }
            ])
        }
    }

    return (
        <>
            <div className='container d-flex justify-content-start col-3 bg-light'>
                <input type='texto' placeholder='What need to be done?' onChange={(e) => { setTodo(e.target.value) }} value={todo} onKeyDown={handleKeyEnter}></input>
            </div>

            <div className="container d-flex justify-content-start col-3 bg-light">
                <ul>
                    {
                        addTodo && addTodo.map((task, index) => (
                            <li key={index} onKeyDown={handleKeyEnter} onMouseOver={()=>setLessTodo(true)} onMouseOut={()=>setLessTodo(false)}>
                                {task.todo} {lessTodo && (<button onClick={()=>{
                                    setAddTodo(
                                        addTodo.filter(a => a.id !== task.id)
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








