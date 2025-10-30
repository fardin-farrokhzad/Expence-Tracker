import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import './index.css';
import Layout from './layout/Layout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to='/transactions' />} />s
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='transactions' element={<App />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
