import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';
import 'react-day-picker/dist/style.css';
import AuthProvider from './Contex/AuthProvider';
import { Toaster } from 'react-hot-toast';


const App = () => {
  return (
    <div>
      <Toaster />
      <AuthProvider>
        <RouterProvider router={router}>

        </RouterProvider>
      </AuthProvider>
    </div>
  );
};

export default App;