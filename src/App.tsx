import './App.css';

import React from 'react';
import { useSelector } from 'react-redux';

import { AuthorizationScreen } from './components/authorization-screen/authorization-screen';
import { BoardScreen } from './components/board-screen/board-screen';
import { UserSelector } from './store/user/index';

function App() {
  const Token = useSelector(UserSelector.selectToken);
  return Token ? <BoardScreen /> : <AuthorizationScreen />;
}

export default App;
