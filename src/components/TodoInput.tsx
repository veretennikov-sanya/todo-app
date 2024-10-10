import React, { useState } from 'react';

interface TodoInputProps {
  addTodo: (task: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', marginBottom: '1rem' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Новая задача"
        style={{ flex: 1, padding: '0.5rem' }}
      />
      <button type="submit" style={{ marginLeft: '0.5rem', padding: '0.5rem' }}>
        Добавить
      </button>
    </form>
  );
};

export default TodoInput;
