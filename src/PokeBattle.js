import React from "react";
import PokeHand from "./PokeHand";

class PokeBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hand1: [], hand2: [], exp1: 0, exps2: 0 };
  }

  async randomHand() {
    let pokemons = [];
    for (let i = 0; i < 5; i++) {
      let randomId = Math.floor(Math.random() * 800);
      let apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
      const response = await fetch(apiUrl);
      const json = await response.json();
      let { id, name, base_experience, sprites } = json;
      let pokemon = { id, name, base_experience, sprites };
      pokemons.push(pokemon);
    }
    return pokemons;
  }

  async componentDidMount() {
    let hand1 = await this.randomHand();
    let hand2 = await this.randomHand();
    let exp1 = hand1.reduce(
      (exp, pokemon) => (exp += pokemon.base_experience),
      0
    );
    let exp2 = hand2.reduce(
      (exp, pokemon) => (exp += pokemon.base_experience),
      0
    );
    this.setState({
      hand1: hand1,
      hand2: hand2,
      exp1: exp1,
      exp2: exp2,
    });
  }

  render() {
    const { hand1, hand2, exp1, exp2 } = this.state;

    let msg = "";

    if (exp1 && exp2) {
      if (exp1 > exp2) {
        msg = "Player 1 win!!";
      } else {
        msg = "Player 2 win!!";
      }
    }

    return (
      <div>
        <PokeHand pokemons={hand1} />
        <h1>{msg}</h1>
        <PokeHand pokemons={hand2} />
      </div>
    );
  }
}

export default PokeBattle;
