import React, { useState } from 'react';
import Cardlist from './Cardlist';
import PokedexFetch from './PokedexFetch';
import { IPokemon, IUpdateData } from './PokemonIntefaces';

const Pokedex: React.FC = () => {
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [nextUrl, setNextUrl] = useState<string>();
  const [prevUrl, setPrevUrl] = useState<string>();

  const updateData = (data: IUpdateData) => {
    setPokemonList(data.pokemonList);
    setLoading(data.isLoading);
    setNextUrl(data.nextUrl);
    setPrevUrl(data.prevUrl);
  };

  return (
    <section className="pokedex" style={{ marginBottom: '2rem' }}>
      <PokedexFetch url={url} updateData={updateData} />
      <Cardlist pokemon={pokemonList} isLoading={isLoading} />
      <div className="btn-group">
        {prevUrl && <button onClick={() => setUrl(prevUrl)}>Previous</button>}
        {nextUrl && <button onClick={() => setUrl(nextUrl)}>Next</button>}
      </div>
    </section>
  );
};

export default Pokedex;

