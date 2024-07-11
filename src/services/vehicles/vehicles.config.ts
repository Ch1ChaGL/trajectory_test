const BASE_URL = "/vehicles";

export enum VehiclesEndPoint {
  ALL,
}

export const VehiclesEndPointsMap: Record<VehiclesEndPoint, string> = {
  [VehiclesEndPoint.ALL]: `${BASE_URL}`,
};
