import { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import VehiclesList from '../../components/VehiclesList/VehiclesList';

const Home: FC = () => {
  const { getVehicles } = useActions();
  const vehicles = useTypedSelector(state => state.vehicles);
  useEffect(() => {
    if (vehicles.isLoaded) return;
    getVehicles();
  }, []);

  return (
    <>
      <VehiclesList />
    </>
  );
};

export default Home;
