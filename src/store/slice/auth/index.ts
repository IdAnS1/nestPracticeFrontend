import {createSlice} from "@reduxjs/toolkit";

const initialState: any = {
    user: {
        id: null,
        firstName: '',
        userName: '',
        email: '',
        createdAt: '',
        updatedAt: '',
        watchList: [
            {
                id: null,
                name: '',
                assetId: '',
                createdAt: '',
                updatedAt: '',
                user: null
            }
        ]
    },
    isLogged: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = action.payload
            state.isLogged = true
        }
    }
})

export const {login} = authSlice.actions
export default authSlice.reducer