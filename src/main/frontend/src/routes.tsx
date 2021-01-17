import { Switch, BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import ErrorPage from "./ErrorPage/ErrorPage";
import MainLayout from "./hoc/MainLayout";

export interface RoutesProps {}

const Routes: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} exact />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default Routes;
