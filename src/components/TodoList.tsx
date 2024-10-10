import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  completeTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, completeTodo }) => {
  return (
    <div>
      {todos.map((task, index) => (
        <TodoItem key={index} task={task} completeTodo={() => completeTodo(index)} />
      ))}
    </div>
  );
};

export default TodoList;

