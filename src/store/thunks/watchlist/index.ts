import {createAsyncThunk} from "@reduxjs/toolkit";
import {instanceAuth} from "../../../utils/axios";


export const getWatchList = createAsyncThunk(
    'watchlist/get',
    async (_, thunkAPI) => {
        try {
            const useWatchlist = await instanceAuth.get(`/watchlist/get`)
            return useWatchlist.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }

    }
)