import React, { useState } from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CurrencyPage } from "./CurrencyPage";
import { ExchangePage } from "./ExchangePage";

export const NavBar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Router>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
         
            <Tab label="Calculator" component={Link} to='/' />
         
         
            <Tab label="Currency values" component={Link} to='/CurrencyPage'/>
         
        </Tabs>
      </AppBar>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/">
          <ExchangePage />
        </Route>
        <Route path="/CurrencyPage">
          <CurrencyPage />
        </Route>
        
      </Switch>
    </Router>
  );
};
