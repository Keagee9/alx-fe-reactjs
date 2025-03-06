import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoList from './components/TodoList'; // Import the TodoList component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList /> {/* Use the TodoList component */}
  </React.StrictMode>
);