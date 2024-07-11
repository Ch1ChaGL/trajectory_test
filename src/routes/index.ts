import { FC } from 'react';
import Home from '../page/Home/Home';
import VehiclesRedact from '../page/VehiclesRedact/VehiclesRedact';
import VehicleMapPage from '../page/VehicleMapPage/VehicleMapPage';

interface IRoutes {
  path: string;
  component: FC;
  name?: string;
}

export const publicRoute: IRoutes[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/vehicles/:id',
    component: VehiclesRedact,
  },
  {
    path: '/vehicles/map/:id',
    component: VehicleMapPage,
  },
];
