export interface IPokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }
  
  export interface IUpdateData {
    pokemonList: IPokemon[];
    isLoading: boolean;
    nextUrl?: string;
    prevUrl?: string;
  }

  export interface ICardProps {
    pokemon: IPokemon[];
    isLoading: boolean;
  }

  export interface IPokedexFetchProps {
    url: string;
    updateData: (data: IUpdateData) => void;
  }
  