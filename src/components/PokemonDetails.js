import React from "react";
import { useParams } from "react-router-dom";
import PokemonData from "../data/PokemonData.json";
import "../styles/PokemonDetails.css";
import "bootstrap/dist/css/bootstrap.css";

const PokemonDetails = () => {
  const { id } = useParams();
  const pokemon = PokemonData.find((pokemon) => pokemon.id.toString() === id);

  if (!pokemon) {
    return <div>Pokemon introuvable</div>;
  }

  return (
    <div className="pokemon-details">
      <h2>{pokemon.name.french}</h2>
      <img src={pokemon.image.thumbnail}></img>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="{pokemon.base.HP}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-success"
          style={{ width: `${pokemon.base.HP}%` }}
        >
          PV : {pokemon.base.HP}
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="{pokemon.base.Attack}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
          style={{ width: `${pokemon.base.Attack}%` }}
        >
          Attaque : {pokemon.base.Attack}
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="{pokemon.base.Defense}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: `${pokemon.base.Defense}%` }}
        >
          Défense : {pokemon.base.Defense}
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="{pokemon.base.SpAttack}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
          style={{ width: `${pokemon.base.SpAttack}%` }}
        >
          Attaque Spéciale : {pokemon.base.SpAttack}
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="{pokemon.base.SpDefense}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
          style={{ width: `${pokemon.base.SpDefense}%` }}
        >
          Défence Spéciale : {pokemon.base.SpDefense}
        </div>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Example with label"
        aria-valuenow="{pokemon.base.Speed}"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated "
          style={{ width: `${pokemon.base.Speed}%` }}
        >
          Vitesse : {pokemon.base.Speed}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
