import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IInitialState } from './vehicles.interface';
import { IVehicles } from '../../type/vehicles/vehicles.interface';
import { getVehicles } from './vehicles.actions';
import { CHEAP_SORT, NEW_SORT } from '../../utils/const';
import { getLocalStorage } from '../../utils/local-storage';

export const initialState: IInitialState = {
  vehicles: getLocalStorage('vehicles'),
  isLoading: false,
  error: '',
  isLoaded: false,
};

export const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IVehicles>) => {
      state.vehicles.push(action.payload);
    },
    updateItem: (state, action: PayloadAction<IVehicles>) => {
      const index = state.vehicles.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.vehicles[index] = action.payload;
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.vehicles = state.vehicles.filter(
        item => item.id !== action.payload,
      );
    },
    clearError: state => {
      state.error = null;
    },
    sortByYear: (state, action: PayloadAction<string>) => {
      action.payload === NEW_SORT
        ? state.vehicles.sort((a, b) => b.year - a.year)
        : state.vehicles.sort((a, b) => a.year - b.year);
    },
    sortByPrice: (state, action: PayloadAction<string>) => {
      action.payload === CHEAP_SORT
        ? state.vehicles.sort((a, b) => a.price - b.price)
        : state.vehicles.sort((a, b) => b.price - a.price);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getVehicles.pending, state => {
        state.isLoading = true;
        state.isLoaded = false;
      })
      .addCase(getVehicles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.vehicles = payload;
        state.isLoaded = true;
      })
      .addCase(getVehicles.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.vehicles = [];
        state.error = payload.response?.data.message || payload.message;
        state.isLoaded = false;
      });
  },
});
