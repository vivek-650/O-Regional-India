import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    role: null, // user role (tourist, tour guide, business)
    // role: localStorage.getItem("userRole") ? JSON.parse(localStorage.getItem("userRole")) : null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.role = action.payload.role; // Store the user's role
    //   localStorage.setItem("userRole", JSON.stringify(action.payload.role));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
    //   localStorage.removeItem("userRole");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
