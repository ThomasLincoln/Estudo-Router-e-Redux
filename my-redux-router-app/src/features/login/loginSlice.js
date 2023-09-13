import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nome: 'user',
    logado: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState, 
    reducers: {
        logar: (state, action) => {
            state.nome = action.payload;
            state.logado = true;
        },
        deslogar: (state, action) => {
            state.nome = initialState.nome;
            state.logado = false;
        },
    }
})


export const { logar, deslogar } = loginSlice.actions;

export default loginSlice.reducer;