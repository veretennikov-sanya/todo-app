import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoInput from './components/TodoInput';

test('should render the input and button', () => {
  const addTodo = jest.fn();
  render(<TodoInput addTodo={addTodo} />);

  const input = screen.getByPlaceholderText(/Новая задача/i);
  const button = screen.getByText(/Добавить/i);

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('should add task when form is submitted', () => {
  const addTodo = jest.fn();
  render(<TodoInput addTodo={addTodo} />);

  const input = screen.getByPlaceholderText(/Новая задача/i);
  fireEvent.change(input, { target: { value: 'Тестовая задача' }});

  fireEvent.submit(screen.getByRole('form'));

  expect(addTodo).toHaveBeenCalledWith('Тестовая задача');
});
