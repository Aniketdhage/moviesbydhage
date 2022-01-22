import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/home">
        This Is Home Page
      </Route>
    </Switch>
  );
}

export default App;
