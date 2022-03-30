import { createSlice } from "@reduxjs/toolkit";

const myRoutesSlice = createSlice({
    name: "myRoutes",
    initialState: {
        myRoutes: "",
    },
    reducers: {
        setMyRoutes: (state, action) => {
            state.myRoutes = action.payload
        },
        updateMyRoutes: (state, action) => {
            state.myRoutes = action.payload
        }
    },
});

export const { setMyRoutes, updateMyRoutes } = myRoutesSlice.actions;

export const selectMyRoutes = (state) => state.myRoutes.myRoutes;

export default myRoutesSlice.reducer;
