import React from 'react'
import App from './App'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('App', () => {
  it('should allow a user to create a to-do', () => {
    render(
      <>
        <App />
      </>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'practice typing' } })

    const makeTodoButton = screen.getByRole('button', { name: /make to-do/i })
    fireEvent.click(makeTodoButton)

    const typingTodo = screen.getByRole('heading', { name: /practice typing/i })
    expect(typingTodo).toBeInTheDocument()
  })

  it('should allow a user to remove a to-do when completed', () => {
    render(
      <>
        <App />
      </>
    )
    
    const todoHeading = screen.getByRole('heading', { name: /practice typing/i })
    expect(todoHeading).toBeInTheDocument()

    const completeButton = screen.getByRole('button', { name: /complete/i })
    fireEvent.click(completeButton)
    
    expect(todoHeading).not.toBeInTheDocument()
  })
})

