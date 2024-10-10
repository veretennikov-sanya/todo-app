import React from 'react';

interface TodoItemProps {
  task: string;
  completeTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, completeTodo }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem', borderBottom: '1px solid #ccc' }}>
      <span>{task}</span>
      <button onClick={completeTodo}>✔</button>
    </div>
  );
};

export default TodoItem;
