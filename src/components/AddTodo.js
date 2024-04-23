import React from "react";

let nextId = 1;

const AddTodo = ({ todo, setTodo, addTodo, setAddTodo}) => {

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
                            <li key={index} onKeyDown={handleKeyEnter}>{task.todo}</li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}

export default AddTodo







