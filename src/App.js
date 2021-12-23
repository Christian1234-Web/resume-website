import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StoreContext from './context/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/asset/boxicons/css/boxicons.min.css";
import "../src/asset/bootstrap-icons/bootstrap-icons.css";
import Home from './pages/home';
import "./scss/style.css";
import pageTwo from './pages/pageTwo';


function App() {

  return (
    <StoreContext>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/inner:id" component={pageTwo}  />
        </Switch>
      </BrowserRouter>
    </StoreContext>
  );
}

export default App;
