import React from "react";
import PokeCard from "./PokeCard";
import "./PokeHand.css";

class PokeHand extends React.Component {
  render() {
    const { pokemons } = this.props;
    console.log(pokemons);

    return (
      <div className="PokeHand">
        {pokemons.map((pokemon) => {
          return (
            <PokeCard
              name={pokemon.name}
              id={pokemon.id}
              exp={pokemon.base_experience}
              img={pokemon.sprites.front_default}
              key={pokemon.id}
            />
          );
        })}
      </div>
    );
  }
}

export default PokeHand;
