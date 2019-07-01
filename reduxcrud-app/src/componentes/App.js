import React from 'react';
import Header from './Header';
import Imagen from './Imagen';
import './../css/App.css';
// Redux
import { Provider } from 'react-redux';
import store from './../store/store';

function App() {

  return (
    <Provider store={store}>
      <React.Fragment>
        <div className="App">
          {/* ***** Componente: Header ***** */}
          <Header></Header>
          {/* ***** Componente: Imagen ***** */}
          <Imagen></Imagen>
        </div>
      </React.Fragment>
    </Provider>
  );
}

export default App;
