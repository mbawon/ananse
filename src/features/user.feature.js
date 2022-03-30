import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: "",
    loggedIn: "",
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    updateUser: (state, action) => {
      state.users = action.payload
    },
    deleteUser: (state, action) => {
      state.users = action.payload
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload
    }
  },
});

export const { setUsers, updateUser, deleteUser, setLoggedIn } = userSlice.actions;

export const selectUsers = (state) => state.user.users;
export const selectLoggedIn = (state) => state.user.loggedIn;

export default userSlice.reducer;
