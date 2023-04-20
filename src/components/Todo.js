import React from 'react'

function Todo(props) {
  return (
    <div>
        <li>{props.text} <button>Delete</button></li>
    </div>
  )
}

export default Todo