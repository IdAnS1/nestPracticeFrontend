import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginData, IRegisterData} from "../../../common/types/auth";
import {instance, instanceAuth} from "../../../utils/axios";

export const loginUser = createAsyncThunk(
    'auth/login',
    async (data: ILoginData, thunkAPI) => {
        try {
            const user = await instance.post('auth/login', data)
            sessionStorage.setItem('token', user.data.token)
            sessionStorage.setItem('name', user.data.user.firstName)
            // localStorage.setItem('name', user.data.name)
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/register',
    async (data: IRegisterData, thunkAPI) => {
        try {
            const user = await instance.post('auth/register', data)
            sessionStorage.setItem('token', user.data.token)
            sessionStorage.setItem('name', user.data.user.firstName)
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)


export const getPublicUser = createAsyncThunk(
    'auth/get-user',
    async (_, thunkAPI) => {
        try {
            const user = await instanceAuth.get('auth/get-user-info')
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)

export const updateUserInfo = createAsyncThunk(
    'user/update',
    async (data: any, thunkAPI) => {
        try {
            const user = await instanceAuth.patch('users', data)
            sessionStorage.setItem('name', user.data.firstName)
            return user.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)