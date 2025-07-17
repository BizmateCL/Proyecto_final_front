import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserState from "./contexts/user/UserState";
import LegginState from "./contexts/leggin/LegginState";
import SingleLeggin from "./components/Leggin/Single";
import Layout from "./components/Layout";
import Home from "./components/Home/index";
import LegginList from "./components/Leggin/List";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Checkout from "./components/Checkout";
import Auth from "./routes/Auth";
import Profile from "./components/Profile";
import PrivateRoute from "./routes/Private";

const Router = () => {
  return (
    <>
      <UserState>
        <LegginState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="registro" element={<Register />} />
                <Route
                  path="iniciar-sesion"
                  element={<Auth component={Login} />}
                />
                <Route
                  path="perfil"
                  element={<PrivateRoute component={Profile} />}
                />
                  <Route
                  path="carrito"
                  element={<PrivateRoute component={Checkout} />}
                />

                <Route path="leggins" element={<LegginList />} />
                <Route path="leggins/:_id" element={<SingleLeggin />} />
                
              
              </Route>
            </Routes>
          </BrowserRouter>
        </LegginState>
      </UserState>
    </>
  );
};

export default Router;
