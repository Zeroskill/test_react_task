import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  data: null
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsersData: (state, action) => {
      state.data = action.payload;
    },
    setLoadingState: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setLoadingState, setUsersData } = usersSlice.actions;
