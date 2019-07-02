import React from 'react';
import Header from './Header';
import Productos from './Productos';
import NuevoProducto from './NuevoProducto';
import EditarProducto from './EditarProducto';
import Imagen from './Imagen';
import './../css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './../store/store';

function App() {

  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <div className="App">
            {/* ***** Componente: Header ***** */}
            <Header></Header>
            {/* ***** Componente: Switch de 'react-router-dom' ***** */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={Productos}></Route>
                <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>
                <Route exact path="/productos/editar/:id" component={EditarProducto}></Route>
              </Switch>
            </div>
            {/* ***** Componente: Imagen ***** */}
            <Imagen></Imagen>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
