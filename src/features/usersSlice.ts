import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import User from '../types/User'

const initialState: User[] = [
    {
        id: 111,
        name: '1 Leanne Graham',
        username: 'Test',
        email: 'Sincere@april.biz',
    },
    {
        id: 222,
        name: '2 Leanne Graham',
        username: 'Test',
        email: 'Sincere@april.biz',
    },
    {
        id: 333,
        name: '3 Leanne Graham',
        username: 'Test',
        email: 'Sincere@april.biz',
    },
]

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.unshift(action.payload)
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state = state.filter((user) => user.id !== action.payload)
            return state
        },
        loadUsers: (state) => {
            // Load from remote API
            console.log('LOAD');
            
            return state
        },
    },
})

export const { addUser, deleteUser, loadUsers } = usersSlice.actions

export default usersSlice.reducer
