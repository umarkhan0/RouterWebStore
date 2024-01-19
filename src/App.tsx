import React from 'react'
import AppRouter from './config/router.jsx'
import UserContextProvider from './context/userContextProvider.jsx';
const App: React.FC = () => {
  return (
    <UserContextProvider>
    <AppRouter />
    </UserContextProvider>
  )
}

export default App;
