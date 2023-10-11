import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface AuthSliceI
{
    token: string
}

const initialState: AuthSliceI = {
    token: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) =>
        {
            state.token = action.payload
        },
        logout: (state) =>
        {
            state.token = ''
        }
    },
})

// Action creators are generated for each case reducer function
export const {login, logout  } = authSlice.actions
export const authDetails = (state: RootState) => state.auth;
export default authSlice.reducer