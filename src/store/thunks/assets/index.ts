import {createAsyncThunk} from "@reduxjs/toolkit";
import {coinGeckoApi} from "../../../utils/axios";

export const getFavoriteAssets = createAsyncThunk(
    'coins/markets',
    async (data: string, thunkAPI) => {
        try {
            const assets = await coinGeckoApi.get(`/coins/${data}/market_chart?vs_currency=usd&days=90`)
            const singleAssets = await coinGeckoApi.get(`/coins/markets?vs_currency=usd&ids=${data}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
            return {
                name: data,
                price_chart_data: assets.data.prices.slice(-31),
                singleAssets: singleAssets.data
            }
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    })

export const getTopPriceData = createAsyncThunk(
    'coins/markets/topPrice',
    async (_, thunkAPI) => {
        try {
            const assets = await coinGeckoApi.get(`/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`)
            return assets.data
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return thunkAPI.rejectWithValue(error.response.data.message)
            } else {
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    })