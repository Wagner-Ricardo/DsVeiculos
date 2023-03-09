
import { Switch, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import Navbar from "components/Navbar";
import Catalogo from './pages/Catalogo';
import Admin from "pages/Admin";


const Routes = () => (
  <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalogo />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Switch>
  </BrowserRouter>
);
export default Routes;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>,
document.getElementById('root')
);