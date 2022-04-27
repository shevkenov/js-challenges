import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    password: '',
    email: '',
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin(state, action){
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.email = action.payload.email;
            state.isLoggedIn = true;
        },
        authLogout(state){
            state.username = '';
            state.password = '';
            state.email = '';
            state.isLoggedIn = false;
        }
    }
})

export const { authLogin, authLogout } = authSlice.actions;

export default authSlice.reducer