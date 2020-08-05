import React, { useState } from 'react';



const CaughtPokemon = (props) => {
  const [totalCaught, setCount] = useState(1);
  function incrementTotal(){
    setCount(totalCaught + 1);
  }
    return (
   <div>
    <p>'Caught {totalCaught} Pokemon on' {props.date}</p>
   <button onClick={incrementTotal}>Click me</button>
   </div>
  )}

  

  export default CaughtPokemon;