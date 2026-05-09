import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    // ===================== SIGN IN =====================
    signInStart(state) {
      state.loading = true;
      state.error = null;
    },

    signInSuccess(state, action) {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },

    signInFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // ===================== UPDATE USER =====================
    updateUserStart(state) {
      state.loading = true;
      state.error = null;
    },

    updateUserSuccess(state, action) {
      state.currentUser = action.payload; // update redux user
      state.loading = false;
      state.error = null;
    },

    updateUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // ===================== DELETE USER =====================
    deleteUserStart(state) {
      state.loading = true;
      state.error = null;
    },

    deleteUserSuccess(state) {
      state.currentUser = null; // remove user from store
      state.loading = false;
      state.error = null;
    },

    deleteUserFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // ===================== SIGN OUT =====================
    signOut(state) {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  signOut,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
