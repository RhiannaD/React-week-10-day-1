import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import "./Card.css"



interface Pokemon {
  id: number,
  name: string,
  img: string,
  abilities: string[]
}


  const Card = () => {
    const [pokemon, setPokemon] = useState<Pokemon>({
      id: 0,
      name: '',
      img: '',
      abilities: []
    })

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setPokemon; 
  //   };
  // const handleSubmit = (event: React.FormEvent) => {
  //     event.preventDefault();
  //     getPokemon();
  //   };
  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name.toLowerCase()}`
      );
      const data = await response.json();
  
      if (!data.pokemons && data.name) {
        setPokemon({
          id: data.id,
          name: data.name,
          img: data.sprites.front_default,
          abilities: [
            data.abilities[0].ability.name,
            data.abilities[1].ability.name,
          ],
        });
      }
    };
  
   getPokemon()

  },[pokemon])

    // const handleChange = (value) => {
    //   setPokemon(value)
    //   getPokemon(value)
    // }

      return (
<>
<div>
  <form >
  <input
  className="search"
  type="text"
  value={pokemon.name}
  onChange={(event) =>
    setPokemon({
      ...pokemon,
      name: event.target.value,
    })
  }
  placeholder="Search a Pokemon!"
/>
  </form>
</div>

    
 {pokemon && <div className="card"  >
    Pokemon Card
    <img src={ pokemon.img} className="card-img-top" alt="..." />
    <hr></hr> 
    <div className="card-body">
      <h5 className="card-title">{pokemon.name.toUpperCase()}</h5>
    </div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item">{pokemon.abilities[0]}</li>
      <li className="list-group-item">{pokemon.abilities[1]}</li>
    </ul>
  </div>}
      
</>

  )
}

export default Card