import { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Button, Col, Row, Select } from 'antd';
import VehiclesCard from '../VehiclesCard/VehiclesCard';
import {
  CHEAP_SORT,
  EXPENSIVE_SORT,
  NEW_SORT,
  OLD_SORT,
  WITHOUT_SORT,
} from '../../utils/const';
import { useActions } from '../../hooks/useActions';

const VehiclesList: FC = () => {
  const vehicles = useTypedSelector(state => state.vehicles);
  const { sortByPrice, sortByYear, getVehicles } = useActions();
  const handleSelectChange = (value: string) => {
    if (value === OLD_SORT || value === NEW_SORT) {
      sortByYear(value);
    } else {
      sortByPrice(value);
    }
  };
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <Select
          defaultValue={WITHOUT_SORT}
          style={{ maxWidth: 500, marginBottom: 16 }}
          onChange={handleSelectChange}
          options={[
            {
              value: WITHOUT_SORT,
              label: 'Выберите вариант сортировки',
              disabled: true,
            },
            { value: OLD_SORT, label: 'Сначала старые' },
            { value: NEW_SORT, label: 'Сначала новые' },
            { value: CHEAP_SORT, label: 'Сначала дешевые' },
            { value: EXPENSIVE_SORT, label: 'Сначала дорогие' },
          ]}
        />
        <Button style={{ marginBottom: 16 }} onClick={() => getVehicles()}>
          Обновить
        </Button>
      </div>

      <Row gutter={[24, 24]}>
        {vehicles.isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
                <VehiclesCard />
              </Col>
            ))
          : vehicles.vehicles?.map(vehicle => (
              <Col key={vehicle.id} xs={24} sm={12} md={8} lg={6} xl={4}>
                <VehiclesCard vehicle={vehicle} key={vehicle.id} />
              </Col>
            ))}
      </Row>
    </>
  );
};

export default VehiclesList;
