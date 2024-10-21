import React, { useEffect } from 'react';
import axios from 'axios';
import { IPokemon, IPokedexFetchProps } from '../types/PokemonIntefaces';

const PokedexFetch: React.FC<IPokedexFetchProps> = ({ url, updateData }) => {
	const fetchPokemon = async () => {
		updateData({ pokemonList: [], isLoading: true, error: null });
		let data: IPokemon[] = [];
		let nextUrl = null;
		let prevUrl = null;

		const response = await axios.get(url, { timeout: 10000});
		const AllData = response.data;

		data = await Promise.all(
			AllData.results.map(async (pokemon: { name: string; url: string }) => {
				const result = await axios.get(pokemon.url);
				const { id, name, sprites } = result.data;
				return { id, name, sprites };
			})
		);

		nextUrl = AllData.next;
		prevUrl = AllData.previous;

		updateData({
			pokemonList: data.sort((a: IPokemon, b: IPokemon) =>
				a.id > b.id ? 1 : -1
			),
			isLoading: false,
			nextUrl,
			prevUrl,
		});
	};

	useEffect(() => {
		fetchPokemon();
	}, [url]);

	return null;
};

export default PokedexFetch;
