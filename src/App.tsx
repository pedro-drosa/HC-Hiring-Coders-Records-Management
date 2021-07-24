import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Customers } from './pages/Customers';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/customers" component={Customers} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
