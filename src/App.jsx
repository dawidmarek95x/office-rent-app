import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader/Loader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
}

export default App;
