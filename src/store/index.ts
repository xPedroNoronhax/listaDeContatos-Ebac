import { configureStore } from '@reduxjs/toolkit';
import contatosReducer from './reducers/cadastrar';

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
  },
});

export default store;