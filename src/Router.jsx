import { BrowserRouter, Route, Routes } from "react-router-dom";
import LegginState from "./contexts/leggin/LegginState";
import SingleLeggin from "./components/Leggin/Single";
import Layout from "./components/Layout";
import Home from "./components/Home/index";
import LegginList from "./components/Leggin/List";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
const Router = () => {
  return (
    <>
      <LegginState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path ="registro" element={<Register/>}/>
              <Route path ="iniciar-sesion" element={<Login/>}/>
              <Route path="leggins" element={<LegginList />}/>
              <Route path="leggins/:id" element={<SingleLeggin />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </LegginState>
    </>
  );
};

export default Router;
