import { Routes, Route, Navigate } from 'react-router';
import Transactions from './pages/Transactions/Transactions';
import Layout from './layout/Layout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to='/dashboard' />} />s
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='transactions' element={<Transactions />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
