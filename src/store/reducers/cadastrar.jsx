import { createSlice } from "@reduxjs/toolkit";

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: {
    contatosList: [],
    selectedContatoId: null, // Change this line
    contatoCadastrado: false,
  },
  reducers: {
    cadastrar: (state, action) => {
      state.contatosList.push(action.payload);
      state.selectedContatoId = action.payload.id; // Change this line
      state.contatoCadastrado = true;
    },
    setContatoSelecionado: (state, action) => {
      state.selectedContatoId = action.payload;
      state.contatoCadastrado = false;
    },
  },
});

export const { cadastrar, setContatoSelecionado } = contatosSlice.actions;

export default contatosSlice.reducer;
