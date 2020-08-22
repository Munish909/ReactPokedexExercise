import React from "react";
import Logo from "./Logo.js";
import BestPokemonSelector from "./BestPokemon.js";
import CaughtPokemon from "./CaughtPokemon.js";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  function logWhenClicked() {
    console.log("Image was clicked");
  }
  return (
    <BrowserRouter>
      <div>
        <Link to="/best-pokemon">Best Pokemon</Link>
        <Link to="/caught-pokemon">Caught Pokemon</Link>
      </div>
      
      <div>
        <Logo handleClick={logWhenClicked} appName="Pokedex" />
        {/* <BestPokemonFetcher /> */}
        <Switch>
        <Route path="/best-pokemon" component={BestPokemonSelector} />
      </Switch>
      <Switch>
        {/* <Route path="/caught-pokemon" component={CaughtPokemon} /> */}
        <Route path="/caught-pokemon" render={() => <CaughtPokemon date={new Date().toLocaleDateString()} />}/>
      </Switch>
        {/* <BestPokemonSelector /> */}
        {/* <CaughtPokemon date={new Date().toLocaleDateString()} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
