import { Switch, BrowserRouter, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage/index";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

import useData from "../hooks/useData";

const Router = () => {
  const { userData } = useData();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/forgotpassword" exact component={ForgotPasswordPage} />
        <Route path="/register" exact component={RegisterPage} />
        {userData.isLogged && <Route path="/" exact component={HomePage} />}
        <Route component={LandingPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
