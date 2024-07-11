import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoter from './routes/AppRoter';

function App() {
  return (
    <BrowserRouter>
      <AppRoter />
    </BrowserRouter>
  );
}

export default App;
