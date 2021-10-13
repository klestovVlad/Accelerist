import './App.css';

import { useSelector } from 'react-redux';

import { AuthorizationScreen } from './layout/authorization-screen/authorization-screen';
import { BoardScreen } from './layout/board-screen/board-screen';
import { UserSelector } from './store/user/index';

function App() {
  const token = useSelector(UserSelector.selectToken);
  return token ? <BoardScreen /> : <AuthorizationScreen />;
}

export default App;
