import { TRootState } from '../../index';
import { createSelector } from '@reduxjs/toolkit';

export const usersSelector = (state: TRootState) => state.users;

export const isLoadingSelector = createSelector(usersSelector, (usersData) => usersData.loading);
export const usersListSelector = createSelector(usersSelector, (usersData) => usersData.data);
