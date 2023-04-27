import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import User from '../types/User'

const initialState: User[] = [
    {
        id: 111,
        name: 'Default Name 1',
        username: 'Test1',
        email: '1@com.com',
    },
    {
        id: 222,
        name: 'Default Name 2',
        username: 'Test2',
        email: '2@com.com',
    },
    {
        id: 333,
        name: 'Default Name 3',
        username: 'Test3',
        email: '3@com.com',
    },
]

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (_, { rejectWithValue }) => {
    let users: User[] = []
    const res = await fetch('http://jsonplaceholder.typicode.com/users')
    if (!res.ok) return rejectWithValue('Server error ' + res.status)
    users = await res.json()
    return users
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<User>) => {
            state.push(action.payload)
        },
        deleteUser: (state, action: PayloadAction<number>) => {
            state = state.filter((user) => user.id !== action.payload)
            return state
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state = action.payload
            return state
        }),
        builder.addCase(fetchUsers.rejected, (_, action) => {
            console.warn("Fetch rejected:", action.payload)
            return initialState
        })
    },
})

export const { addUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer
