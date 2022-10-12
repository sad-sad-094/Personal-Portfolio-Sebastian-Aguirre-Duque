/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import './App.scss';
import Store from './Redux/Main';
import { Provider } from 'react-redux';
import AppRoutes from './Routes/AppRoutes';

function App() {

  return (
    <Provider Store={Store}>
      <AppRoutes />
    </Provider>


  );

}

export default App;
