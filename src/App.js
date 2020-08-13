import React from "react";
import Logo from './Logo.js';
import BestPokemonSelector from './BestPokemon.js';
import CaughtPokemon from './CaughtPokemon.js';


 

    
    


function App() {
  function logWhenClicked () {
    console.log("Image was clicked");
}
  return(
    
<div>

<Logo handleClick={logWhenClicked} appName = "Pokedex"/>
{/* <BestPokemonFetcher /> */}
<BestPokemonSelector />
<CaughtPokemon date = {new Date().toLocaleDateString()}/>
</div>
)}






export default App;
