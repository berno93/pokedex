// pokemons.jsx
import React from "react";
import PokemonData from "../data/PokemonData.json";
import "../styles/PokemonList.css";
import { Link } from "react-router-dom";

const Pokemons = () => {
  return (
    <div id="general">
      <div>
        <img src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png"></img>
      </div>
      {/* <h1>Liste des pokemons</h1> */}
      {PokemonData.map((pokemon) => (
        <div key={pokemon.id} className="pokemons-div">
          <h3>{pokemon.id}</h3>
          <Link to={`/pokemon/${pokemon.id}`}>
            {" "}
            <img src={pokemon.image.thumbnail}></img>
          </Link>
          <h1>{pokemon.name.french}</h1>
          <h4>{pokemon.type[0]}</h4>
        </div>
      ))}
    </div>
  );
};

export default Pokemons;
