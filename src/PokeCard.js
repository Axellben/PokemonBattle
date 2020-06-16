import React from "react";
import "./PokeCard.css";

class PokeCard extends React.Component {
  render() {
    const { name, img, exp } = this.props;

    return (
      <div className="PokeCard">
        <h3 style={{ textTransform: "capitalize" }}>{name}</h3>
        <img src={img} alt="Pokemon Art" />
        <p>EXP:{exp}</p>
      </div>
    );
  }
}

export default PokeCard;
