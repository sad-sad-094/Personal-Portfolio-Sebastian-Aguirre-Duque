/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import './App.scss';
import { Store } from './Redux/Store';
import { Provider } from 'react-redux';
import AppRoutes from './Routes/AppRoutes';

function App() {

  return (

    <Provider store={Store}>
      <AppRoutes />
    </Provider>

  );

}

export default App;
