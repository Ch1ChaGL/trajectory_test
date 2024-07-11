import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { YMaps } from '@pbe/react-yandex-maps';

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <YMaps>{children}</YMaps>
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;
