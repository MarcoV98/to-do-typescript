import React, { useEffect } from 'react';
import { IPokemon, IPokedexFetchProps } from './PokemonIntefaces';

const PokedexFetch: React.FC<IPokedexFetchProps> = ({ url, updateData }) => {
  const fetchPokemon = async () => {
    updateData({ pokemonList: [], isLoading: true }); 
    let data = [];
    let nextUrl = null;
    let prevUrl = null;

    try {
      const response = await fetch(url);
      const AllData = await response.json();

      data = await Promise.all(
        AllData.results.map(async (pokemon: { name: string; url: string }) => {
          const result = await fetch(pokemon.url);
          const { id, name, sprites } = await result.json();
          return { id, name, sprites };
        })
      );
      
      nextUrl = AllData.next;
      prevUrl = AllData.previous;
      
    } catch (error) {
      console.error('Fetching error...', error);
    } finally {
      updateData({
        pokemonList: data.sort((a: IPokemon, b: IPokemon) =>
          a.id > b.id ? 1 : -1
        ),
        isLoading: false,
        nextUrl,
        prevUrl,
      });
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [url]);

  return null;
};

export default PokedexFetch;
