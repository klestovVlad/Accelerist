import './App.css';

import React from 'react';

import { AuthorizationScreen } from './components/authorization-screen/authorization-screen';
import { BoardScreen } from './components/board-screen/board-screen';

function App() {
  const Token = 'temporary token';
  return Token ? <BoardScreen /> : <AuthorizationScreen />;
}

export default App;
