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
    error?: string | null;
    nextUrl?: string;
    prevUrl?: string;
  }

  export interface ICardProps {
    pokemon: IPokemon[];
  }

  export interface IPokedexFetchProps {
    url: string;
    updateData: (data: IUpdateData) => void;
  }
  