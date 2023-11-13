import {createSlice} from "@reduxjs/toolkit";
import {getWatchList} from "../../thunks/watchlist";

const initialState = {
    watchlist: []
}

export const watchListESlice = createSlice({
    name: 'watchlist',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getWatchList.fulfilled, (state, action) => {
            state.watchlist = action.payload
        })
    }
})

export default watchListESlice.reducer