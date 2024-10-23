import React, { useEffect, useState } from 'react';
import Cardlist from './Cardlist';
import PokedexFetch from './PokedexFetch';
import { IPokemon, IUpdateData } from '../types/PokemonIntefaces';
import { Interceptor, Eject } from '../utils/interceptors';

const Pokedex: React.FC = () => {
	const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');
	const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
	const [isLoading, setLoading] = useState<boolean>(true);
	const [nextUrl, setNextUrl] = useState<string>();
	const [prevUrl, setPrevUrl] = useState<string>();
	const [error, setError] = useState<string | null>();

	useEffect(() => {
		Interceptor(setLoading, setError);

		return () => {
			Eject();
		};
	}, []);

	const updateData = (data: IUpdateData) => {
		setPokemonList(data.pokemonList);
		setLoading(data.isLoading);
		setNextUrl(data.nextUrl);
		setPrevUrl(data.prevUrl);
	};

	return (
		<section className="pokedex">
			{isLoading && (
				<div className="overlay">
					<p className="overlay__text">Loading...</p>
				</div>
			)}

			{error && (
				<div className="errorPopup">
					<p>{error}</p>
					<button onClick={() => setError(null)}>Close</button>
				</div>
			)}

			<PokedexFetch url={url} updateData={updateData} />
			<Cardlist pokemon={pokemonList} />
			<div className="btn-group">
				{prevUrl && <button onClick={() => setUrl(prevUrl)}>Previous</button>}
				{nextUrl && <button onClick={() => setUrl(nextUrl)}>Next</button>}
			</div>
		</section>
	);
};

export default Pokedex;
