
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