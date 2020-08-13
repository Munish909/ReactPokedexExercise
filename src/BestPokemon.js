import React, {useState, useEffect} from 'react';


const BestPokemon = (props) => {
    
    return (
 <div>
     <p>My Favourite Pokemon is Squirtle</p>
     <ul>
      {props.pokemon.abilities.map((quality, index) => {
          return <li key={index}>{quality.ability.name}</li>
      })}
     </ul>
 </div>
     )
}
    
    function BestPokemonFetcher (props) {
        const [bestPokemon, setPokemon] = useState(null);
        useEffect(() => {
            setPokemon(null)
            fetch (
                `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`
         )
         .then((res) => res.json())
         .then((data) => setPokemon(data));

          }, [props.pokemonId]);
        
        return !bestPokemon ? (
            null
        ):(
            <BestPokemon pokemon={bestPokemon} />
        )
        
    }

    // const BestPokemon = (props) => {
    
    //     return (
    //  <div>
    //      <p>My Favourite Pokemon is Squirtle</p>
    //      <ul>
    //       {props.pokemon.abilities.map((quality, index) => {
    //           return <li key={index}>{quality.ability.name}</li>
    //       })}
    //      </ul>
    //  </div>
    //      )
    // }

    function BestPokemonSelector() {
        const [pokemonId, setPokemonId] = useState(null);
      
        function handleBulbasaurClick() {
          setPokemonId(1);
        }
        function handleCharmanderClick() {
          setPokemonId(4);
        }
      
        return (
          <div>
            <button onClick={handleBulbasaurClick}>Fetch Bulbasaur</button>
            <button onClick={handleCharmanderClick}>Fetch Charmander</button>
            {pokemonId ? <BestPokemonFetcher pokemonId={pokemonId} /> : <p>loading...</p>}
          </div>
        );
      }



export default BestPokemonSelector;