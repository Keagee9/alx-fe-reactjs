import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom/extend-expect';

describe('TodoList', () => {
  it('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Deploy the App')).toBeInTheDocument();
  });

  it('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('toggles a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getByText('Learn React'));
    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: line-through');
    fireEvent.click(screen.getByText('Learn React'));
    expect(screen.getByText('Learn React')).toHaveStyle('text-decoration: none');
  });

  it('deletes a todo', () => {
    render(<TodoList />);
    fireEvent.click(screen.getAllByText('Delete')[0]);
    expect(screen.queryByText('Learn React')).toBeNull();
  });
});