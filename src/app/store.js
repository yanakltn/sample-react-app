import { configureStore, createStore } from '@reduxjs/toolkit'
import usersReducer from './usersSlice'

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};

// const store = createStore(usersReducer, persistedState);
const store = configureStore({
    reducer: {
        users: usersReducer
    },
    preloadedState: persistedState
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;