import { FC } from 'react';
import { IVehicles } from '../../type/vehicles/vehicles.interface';
import Card from 'antd/es/card/Card';
import { Skeleton } from 'antd';
import { EditOutlined, GlobalOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

interface VehiclesCardProps {
  vehicle?: IVehicles;
}

const VehiclesCard: FC<VehiclesCardProps> = ({ vehicle }) => {
  const navigate = useNavigate();
  const editVehicles = () => {
    navigate(`/vehicles/${vehicle?.id}`);
  };

  const showVehiclesOnMap = () => {
    navigate(`/vehicles/map/${vehicle?.id}`);
  };

  return (
    <Card
      style={{ maxWidth: 500 }}
      actions={[
        <EditOutlined key='edit' onClick={editVehicles} />,
        <GlobalOutlined key='map' onClick={showVehiclesOnMap} />,
      ]}
    >
      <Skeleton loading={!vehicle} active>
        {vehicle && (
          <div>
            <h2>{vehicle.name}</h2>
            <p>
              <strong>Модель:</strong> {vehicle.model}
            </p>
            <p>
              <strong>Год:</strong> {vehicle.year}
            </p>
            <p>
              <strong>Цвет:</strong> {vehicle.color}
            </p>
            <p>
              <strong>Цена:</strong> ${vehicle.price}
            </p>
            <p>
              <strong>Местоположение:</strong> ({vehicle.latitude},{' '}
              {vehicle.longitude})
            </p>
          </div>
        )}
      </Skeleton>
    </Card>
  );
};

export default VehiclesCard;
