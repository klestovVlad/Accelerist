import './App.css';
import { AuthorizationScreen } from './layout/authorization-screen/authorization-screen';
import { BoardScreen } from './layout/board-screen/board-screen';
import { UserSelector } from './store/user/index';
import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  const Token = useSelector(UserSelector.selectToken);
  return Token ? <BoardScreen /> : <AuthorizationScreen />;
}

export default App;
