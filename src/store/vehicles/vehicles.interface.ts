import { IVehicles } from '../../type/vehicles/vehicles.interface';

export interface IInitialState {
  vehicles: IVehicles[];
  isLoading: boolean;
  error: string | null;
  isLoaded: boolean;
}
