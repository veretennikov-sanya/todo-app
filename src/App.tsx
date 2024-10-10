import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

  const addTodo = (task: string) => {
    setTodos((prev) => [...prev, task]);
  };

  const completeTodo = (index: number) => {
    setCompleted((prev) => [...prev, todos[index]]);
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto' }}>
      <h1>Список дел</h1>
      <TodoInput addTodo={addTodo} />
      <h2>Несделанные задачи</h2>
      <TodoList todos={todos} completeTodo={completeTodo} />
      <h2>Выполненные задачи</h2>
      <TodoList todos={completed} completeTodo={() => {}} />
    </div>
  );
};

export default App;
