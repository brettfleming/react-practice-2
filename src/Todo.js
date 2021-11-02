import React from 'react'

export default function Todo({ todo }) {
    return (
        <div>
            <input type='checkbox' Checked={todo.complete}/>
            <label> {todo.name} </label>
        </div>
    )
}
