import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { RootState } from 'store';
import { User } from 'types/usersTypes';

// Тип для состояния
export interface UsersState {
  user: User;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Начальное состояние
const initialState: UsersState = {
  user: {
    id: 0,
    email: '',
    name: '',
  },
  status: 'idle',
  error: null,
};

// Асинхронный thunk для получения профиля
export const getMe = createAsyncThunk<User, void, { rejectValue: string }>(
  'users/getMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/users/me');
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        return rejectWithValue('Unauthorized');
      }
      return rejectWithValue(error.message);
    }
  }
);

// Слайс
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = {
        id: 0,
        email: '',
        name: '',
      };
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(getMe.fulfilled, (state, action: PayloadAction<User>) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch profile';
        state.user = {
          id: 0,
          email: '',
          name: '',
        };
      });
  },
});

// Экспорты
export const { setUser, logout } = usersSlice.actions;

export const selectUser = (state: RootState) => state.users.user;
export const selectStatus = (state: RootState) => state.users.status;
export const selectError = (state: RootState) => state.users.error;

export default usersSlice.reducer;
