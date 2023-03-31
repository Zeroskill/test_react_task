import { configureStore } from '@reduxjs/toolkit';
import { usersSlice } from './users/usersSlice';

export const applicationStore = configureStore({
  reducer: {
    users: usersSlice.reducer
  }
});

export type TRootState = ReturnType<typeof applicationStore.getState>;
export type TAppDispatch = typeof applicationStore.dispatch;
export type TAppThunkContext = { state: TRootState; dispatch: TAppDispatch };
