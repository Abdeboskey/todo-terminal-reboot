import React from 'react'
import TodoMaker from './TodoMaker'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('TodoMaker', () => {
  it('should display the correct contents when rendered', () => {
    const mockSaveTodo = jest.fn()
    render(
      <>
        <TodoMaker saveTodo={mockSaveTodo} />
      </>
    )

    const prompt = screen.getByText(/what would you like to do?/i)
    const input = screen.getByRole('textbox')
    const makeTodoButton = screen.getByRole('button', { name: /make to-do/i })

    expect(prompt).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(makeTodoButton).toBeInTheDocument()
  })

  it('should update the value of the form when typed into', () => {
    const mockSaveTodo = jest.fn()
    render(
      <>
        <TodoMaker saveTodo={mockSaveTodo} />
      </>
    )

    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test the form' } })

    expect(input.value).toEqual('test the form')
  })
  
  it('should not allow the user to create a todo if the input is empty', () => {
    const mockSaveTodo = jest.fn()
    render(
      <>
        <TodoMaker saveTodo={mockSaveTodo} />
      </>
    )

    const makeTodoButton = screen.getByRole('button', { name: /make to-do/i })
    fireEvent.click(makeTodoButton)
    const errorMessage = screen.getByPlaceholderText(/enter text here/i)

    expect(errorMessage).toBeInTheDocument()
  })
})
