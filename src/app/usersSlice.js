import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter((cur, index) => index !== action.payload);
        },
        updateUser: (state, action) => {
            const { index, newUser } = action.payload;
            state.users = [...state.users];
            state.users[index] = newUser;
        },
    },
})

export const { addUser, deleteUser, updateUser } = usersSlice.actions

export default usersSlice.reducer