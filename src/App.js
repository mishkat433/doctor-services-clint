import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import 'react-day-picker/dist/style.css';

const App = () => {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
};

export default App;