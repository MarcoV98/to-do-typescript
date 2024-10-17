import React from "react";
import { ICardProps } from "./PokemonIntefaces";

const Cardlist: React.FC<ICardProps> = ({ pokemon, isLoading }) => {
  if (isLoading) {
    return <p>Your list is loading...</p>;
  } else {
    return (
      <section className="cardlist">
        {pokemon.map((item) => (
          <div key={item.id} className="card">
            <img src={item.sprites.front_default} alt={item.name} />
            <h2>{item.id}</h2>
            <h2>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h2>
          </div>
        ))}
      </section>
    );
  }
};

export default Cardlist;

