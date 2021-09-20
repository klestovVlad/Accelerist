import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// eslint-disable-next-line import/no-cycle
import { SavedListWatcher } from './saved-list/saga';
import SavedListReducer from './saved-list/slice';
// eslint-disable-next-line import/no-cycle
import { userWatcher } from './user/saga';
import userReducer from './user/slice';

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  userReducer,
  SavedListReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

const persist = persistStore(store);

function* rootWatcher() {
  yield all([userWatcher(), SavedListWatcher()]);
}

sagaMiddleware.run(rootWatcher);

export default {
  store,
  persist,
};
