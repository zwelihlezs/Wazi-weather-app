import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    //fetchedData = null,
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducer:{
        setFetchedData: (state, action)
    }
})