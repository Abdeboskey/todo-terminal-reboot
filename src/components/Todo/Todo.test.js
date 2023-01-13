import React from 'react'
import Todo from './Todo'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Todo', () => {

  let todo

  beforeEach(() => {
    todo = {
      id: 32487,
      todo: "write some tests",
      timeStamp: "Oct 2, 2020, 8:31 PM"
    }
  })

  it('should display the correct contents when rendered', () => {
    const mockCompleteTodo = jest.fn()
    render(
      <>
        <Todo key="0" todo={todo} completeTodo={mockCompleteTodo} />
      </>
    )

    const todoHeader = screen.getByRole('heading', { name: /write some tests/i })
    const timeStamp = screen.getByText(/added: oct 2, 2020, 8:31 pm/i)
    const completeButton = screen.getByRole('button', { name: /complete/i })

    expect(todoHeader).toBeInTheDocument()
    expect(timeStamp).toBeInTheDocument()
    expect(completeButton).toBeInTheDocument()
  })

  it('should fire a method when the button is clicked', () => {
    const mockCompleteTodo = jest.fn()
    render(
      <>
        <Todo key="0" todo={todo} completeTodo={mockCompleteTodo} />
      </>
    )

    const completeButton = screen.getByRole('button', { name: /complete/i })
    fireEvent.click(completeButton)

    expect(mockCompleteTodo).toBeCalledTimes(1)
    expect(mockCompleteTodo).toBeCalledWith(32487)
  })
})
