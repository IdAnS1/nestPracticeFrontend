import {createAsyncThunk} from "@reduxjs/toolkit";
import {coinGeckoApi} from "../../../utils/axios";

export const getFavoriteAssets = createAsyncThunk(
    'coins/markets',
    async (data: string, thunkAPI) => {
        try {
            const assets = await coinGeckoApi.get(`/coins/${data}/market_chart?vs_currency=usd&days=1`)
            return {name: data, data: assets.data}
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    })