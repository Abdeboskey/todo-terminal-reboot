import classes from './TodoMaker.module.scss'
import React, { useState } from 'react'
import { DateTime } from 'luxon'

const TodoMaker = ({ saveTodo }) => {
  const [ input, setInput ] = useState('')
  const [ error, setError ] = useState('')

  const createTodo = e => {
    e.preventDefault()
    if (!input) {
      setError('Enter Text Here')
    } else {
      makeNewTodo()
    }
  }

  const makeNewTodo = () => {
    saveTodo({
      id: Date.now(), 
      todo: input.trim(), 
      timeStamp: DateTime.local().toLocaleString(DateTime.DATETIME_MED),
    })
    setInput('')
    setError('')
  }

  return (
    <form 
      className={classes.container}
      onSubmit={createTodo}
      autoComplete="off"
    >
      <label htmlFor="make-todo" className={classes.label}>
        What would you like to do?
      </label>
      <input
        className={classes.input}
        name="make-todo"
        type="text"
        placeholder={error}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={classes.button}>Make To-do</button>
    </form>
  )
}

export default TodoMaker
