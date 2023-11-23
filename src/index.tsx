import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { AuthProvider } from './interface/context/authContext';
import './index.module.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
);
