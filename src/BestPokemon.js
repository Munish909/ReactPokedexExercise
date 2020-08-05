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
    
    function BestPokemonFetcher () {
        const [bestPokemon, setPokemon] = useState(null);
        useEffect(() => {
            fetch (
                "https://pokeapi.co/api/v2/pokemon/1/"
         )
         .then((res) => res.json())
         .then((data) => setPokemon(data));

          }, []);
        
        return !bestPokemon ? (
            null
        ):(
            <BestPokemon pokemon={bestPokemon} />
        )
        
        
        
        
        
        //   if (!bestPokemon) {
        //  return null }
        //  else {
        //      return(
        //         <BestPokemon pokemon={bestPokemon} />
        //         )
        // }

    }



export default BestPokemonFetcher;