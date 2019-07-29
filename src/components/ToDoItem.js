import React from 'react'
import '../App.css'
import '../todosData'


function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox"/>
            <div>{props.item.text}</div>
        </div>
    )
}

export default ToDoItem