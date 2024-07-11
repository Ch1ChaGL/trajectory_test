import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { IVehiclesResponse } from '../../services/vehicles/vehicles.interface';
import { VehiclesService } from '../../services/vehicles/vehicles.service';
import { IVehicles } from '../../type/vehicles/vehicles.interface';

interface ThunkAPIConfig {
  rejectValue: string;
}
//Вообще вот тут так не должно быть и это какой-то баг, вот ссылка https://github.com/reduxjs/redux-toolkit/issues/4066
//Дабы не занимать много времени не стану исправлять
export const getVehicles = createAsyncThunk<
  IVehiclesResponse[],
  void,
  ThunkAPIConfig
>('vehicles/all', async (_, thunkAPI) => {
  try {
    console.log('Я запросил данные');
    const response = await VehiclesService.getAllVehicles();
    return response;
  } catch (error) {
    return thunkAPI.rejectWithValue(error as string);
  }
});

export const sortByYear = createAction(
  'vehicles/sortByYear',
  (sortBy: string) => ({ payload: sortBy }),
);
export const sortByPrice = createAction(
  'vehicles/sortByPrice',
  (sortBy: string) => ({ payload: sortBy }),
);

export const updateItem = createAction(
  'vehicles/updateItem',
  (vehicle: IVehicles) => ({ payload: vehicle }),
);
export const removeItem = createAction(
  'vehicles/removeItem',
  (vehicleID: number) => ({ payload: vehicleID }),
);
