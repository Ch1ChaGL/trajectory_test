import { Navigate, Route, Routes } from 'react-router-dom';
import { publicRoute } from '.';
import { FC } from 'react';

const AppRoter: FC = () => {
  return (
    <Routes>
      {publicRoute.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
};

export default AppRoter;
