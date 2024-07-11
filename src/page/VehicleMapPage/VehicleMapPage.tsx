import { FC, useEffect, useState } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useParams } from 'react-router-dom';
import { IVehicles } from '../../type/vehicles/vehicles.interface';
import { Spin } from 'antd';
import VehicleMap from '../../components/VehicleMap/VehicleMap';

const VehicleMapPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const data = useTypedSelector(state => state.vehicles);
  const [vehicles, setVehicles] = useState<IVehicles | null>(null);

  useEffect(() => {
    const foundVehicle = data.vehicles.find(
      v => v.id === parseInt(id as string),
    );

    if (foundVehicle) {
      setVehicles(foundVehicle);
    }
  }, [id]);

  if (!vehicles) return <Spin />;
  return <VehicleMap {...vehicles}/>;
};

export default VehicleMapPage;
