import { FC } from 'react';
import { IVehicles } from '../../type/vehicles/vehicles.interface';
import {
  FullscreenControl,
  Map,
  Placemark,
  TypeSelector,
} from '@pbe/react-yandex-maps';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const VehicleMap: FC<IVehicles> = vehicle => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ flex: '0 1 auto', height: '80%' }}>
        <Map
          width='100%'
          height='100%'
          defaultState={{
            center: [vehicle.latitude, vehicle.longitude],
            zoom: 13,
          }}
        >
          <FullscreenControl />
          <TypeSelector />
          <Placemark
            geometry={[vehicle.latitude, vehicle.longitude]}
            options={{
              iconLayout: 'default#image',
              iconImageHref: '/img/car.png',
            }}
          />
        </Map>
      </div>
      <div style={{ textAlign: 'left', padding: '10px' }}>
        <Button onClick={() => navigate('/')}>Закрыть</Button>
      </div>
    </div>
  );
};

export default VehicleMap;
