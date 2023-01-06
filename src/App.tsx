import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { TodoList } from './components/todo-list/todo-list.component';
import { Todo } from './types/todo';

export const App = () => {
  return (
    <div className="container m-5">
      <TodoList />
    </div>
  );
};
