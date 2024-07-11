import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';
import { FC, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { IVehicles } from '../../type/vehicles/vehicles.interface';
import { useActions } from '../../hooks/useActions';

//Тут бы вынести инпуты в отдельный компонент

const VehiclesRedact: FC = () => {
  const { id } = useParams<{ id: string }>();
  const vehicles = useTypedSelector(state => state.vehicles);
  const { updateItem, removeItem } = useActions();
  const navigate = useNavigate();

  const { handleSubmit, setValue, control } = useForm<IVehicles>();
  useEffect(() => {
    const foundVehicle = vehicles.vehicles.find(
      v => v.id === parseInt(id as string),
    );
    console.log(foundVehicle);
    if (foundVehicle) {
      Object.entries(foundVehicle).forEach(([key, value]) => {
        console.log(key, value);
        setValue(key as keyof IVehicles, value);
      });
    }
  }, [id]);

  const handleUpdate: SubmitHandler<IVehicles> = data => {
    updateItem(data);
    navigate('/');
  };

  const handleDelete = () => {
    removeItem(parseInt(id as string));
    navigate('/');
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card>
        <Form style={{ width: '400px' }} onFinish={handleSubmit(handleUpdate)}>
          <h2>Редактирование информации о машине</h2>
          <Form.Item label='Название' name='name'>
            <Controller
              render={({ field }) => <Input {...field} required />}
              name='name'
              control={control}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item label='Модель' name='model'>
            <Controller
              render={({ field }) => <Input {...field} required />}
              name='model'
              control={control}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item label='Год' name='year'>
            <Controller
              render={({ field }) => <Input {...field} required />}
              name='year'
              control={control}
              defaultValue={0}
            />
          </Form.Item>
          <Form.Item label='Цвет' name='color'>
            <Controller
              render={({ field }) => <Input {...field} required />}
              name='color'
              control={control}
              defaultValue=''
            />
          </Form.Item>
          <Form.Item label='Цена' name='price'>
            <Controller
              render={({ field }) => <Input {...field} required />}
              name='price'
              control={control}
              defaultValue={0}
            />
          </Form.Item>
          <Form.Item label='Широта' name='latitude'>
            <Controller
              render={({ field }) => <Input {...field} required />}
              name='latitude'
              control={control}
              defaultValue={0.0}
            />
          </Form.Item>
          <Form.Item label='Долгота' name='longitude'>
            <Controller
              render={({ field }) => <Input {...field} required />}
              name='longitude'
              control={control}
              defaultValue={0.0}
            />
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' icon={<CheckOutlined />}>
              Сохранить
            </Button>
            <Button
              type='default'
              icon={<DeleteOutlined />}
              style={{ marginLeft: '10px' }}
              onClick={handleDelete}
            >
              Удалить
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default VehiclesRedact;
