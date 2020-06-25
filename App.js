import React from 'react';
import Routes from './src/routes';
import 'react-native-gesture-handler';
import { AuthProvider } from './src/contexts/authContext';

export default function App() { 
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

