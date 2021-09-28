import './App.css';
import { AuthorizationScreen } from './pages/authorization-screen/authorization-screen';
import { BoardScreen } from './pages/board-screen/board-screen';
import { UserSelector } from './store/user/index';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const Token = useSelector(UserSelector.selectToken);
  return Token ? <BoardScreen /> : <AuthorizationScreen />;
}

export default App;
