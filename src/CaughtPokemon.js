import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  const [caughtPokemon, setCaughtPokemon] = useState([]);
  // const[totalCount, setCount] = useState(1);

  // function incrementTotal(){
  //   setCount(totalCaught + 1);
  // }
  function handleInputChange(event) {
    setPokemonNameInput(event.target.value);
    //setCaughtPokemon(caughtPokemon.concat([event.target.value]));

    console.log(event.target.value);
  }
  function pokemonList() {
    const updatedPokemonList = caughtPokemon.concat(pokemonNameInput);
    setCaughtPokemon(updatedPokemonList);
    setPokemonNameInput("");
  }

  return (
    <div>
      <p>
        'Caught {caughtPokemon.length} Pokemon on' {props.date}
      </p>
      <input
        type="text"
        placeholder=""
        value={pokemonNameInput}
        //value={caughtPokemon[caughtPokemon.length - 1]}
        onChange={handleInputChange}
      ></input>
      <button onClick={pokemonList}>Click me</button>
      <p>List of pokemons caught...</p>
      <ul>
        {caughtPokemon.map((pokemonName) => {
          return <li>{pokemonName}</li>;
        })}
      </ul>
    </div>
  );
};

export default CaughtPokemon;

// function SimpleReminder() {
//   const [reminder, setReminder] = useState("");

//   function handleChange(event) {
//     setReminder(event.target.value);
//   }
