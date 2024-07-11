import { instance } from '../api';
import { createRequestConfig, HttpMethods } from '../service.config';
import { VehiclesEndPoint, VehiclesEndPointsMap } from './vehicles.config';
import { IVehiclesResponse } from './vehicles.interface';

export const VehiclesService = {
  async getAllVehicles() {
    const response = await instance<IVehiclesResponse[]>(
      createRequestConfig(
        HttpMethods.GET,
        VehiclesEndPointsMap[VehiclesEndPoint.ALL],
      ),
    );

    return response.data;
  },
};
