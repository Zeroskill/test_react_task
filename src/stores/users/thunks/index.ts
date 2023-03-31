import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppThunkContext } from 'src/stores';
import { useApiServices } from '../../../services/api';
import { setUsersData, setLoadingState } from '../usersSlice';

const service = useApiServices().users;

export const getUsersDataThunkAction = createAsyncThunk<void, null, TAppThunkContext>(
  'getUsersData',
  async (_, { dispatch }) => {
    try {
      dispatch(setLoadingState(true));
      const data = await service.getData();
      dispatch(setUsersData(data));
    } catch (e) {
      // Сделано что-бы было ... вообще обработал бы не тут и не так
      console.error(e);
    } finally {
      dispatch(setLoadingState(false));
    }
  }
);
