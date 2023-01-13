import { Routes, Route, Navigate } from 'react-router-dom';
import { AddTodoPage, CompletedTodosPage, PendingTodosPage } from './pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pending" element={<PendingTodosPage />} />
      <Route path="/completed" element={<CompletedTodosPage />} />
      <Route path="/new" element={<AddTodoPage />} />
      <Route path="/*" element={<Navigate to="pending" />} />
    </Routes>
  );
};
