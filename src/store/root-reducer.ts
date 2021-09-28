import { favoriteListWatcher } from './companies/saga';
import favoriteListSlice from './companies/slice';
import { LastLoginWatcher } from './last-logins/saga';
import lastLoginsSlice from './last-logins/slice';
import { savedListWatcher } from './saved-list/saga';
import savedListReducer from './saved-list/slice';
import { teamDataWatcher } from './team/saga';
import teamSlice from './team/slice';
import { userWatcher } from './user/saga';
import userReducer from './user/slice';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  userReducer,
  savedListReducer,
  favoriteListSlice,
  teamSlice,
  lastLoginsSlice,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const persist = persistStore(store);

function* rootWatcher() {
  yield all([
    userWatcher(),
    savedListWatcher(),
    favoriteListWatcher(),
    teamDataWatcher(),
    LastLoginWatcher(),
  ]);
}

sagaMiddleware.run(rootWatcher);

const exportedStore = {
  store,
  persist,
};

export default exportedStore;
