import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as userAPI from '../models/users';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (userId, thunkAPI) => {
        const response = await userAPI.fetchUsers()
        return response.data;
    }
)

export const deleteUserAsync = createAsyncThunk(
    'users/deleteUserAsync',
    async (userId, thunkAPI) => {
        const response = await userAPI.deleteUserAsync(userId)
        return userId;
    }
)

export const createUser = createAsyncThunk(
    'users/createUser',
    async (user, thunkAPI) => {
        const response = await userAPI.createUser(user)
        return response.data;
    }
)

export const updateUser = createAsyncThunk(
    'users/updateUser',
    async ({userId, user}, thunkAPI) => {
        const response = await userAPI.updateUser(userId, user)
        return response.data;
    }
)

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
            state.users = state.users.filter((cur) => cur._id !== action.payload);
        },
        updateUser: (state, action) => {
            const newUser = action.payload;
            state.users = state.users.map((cur) => {
                if (cur._id===newUser._id){
                    return newUser;
                } else {
                    return cur;
                }
            })
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            console.log(action.payload);
            state.users = [...action.payload];
        })
        .addCase(deleteUserAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            usersSlice.caseReducers.deleteUser(state, action);
        })
        .addCase(createUser.fulfilled, (state, action) => {
            console.log(action.payload);
            usersSlice.caseReducers.addUser(state, action);
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            console.log(action.payload);
            usersSlice.caseReducers.updateUser(state, action);
        })
    }
})

export default usersSlice.reducer