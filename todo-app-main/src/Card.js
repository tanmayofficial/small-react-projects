import React from 'react'

function Card(props) {

const handleDelete = () => {
    let temp = [...props.todos]
    temp.splice(props.cardId, 1);
    props.setTodos(temp)
}

  return (
    <>
    <div>{props.todotext}</div>
    <button className="delete__button" onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Card