import { gql } from "@apollo/client";

export const GET_UNIQUE_POKEMON = gql `query GET_UNIQUE_POKEMON{
    pokemons(limit: 1000 offset: 970){
      results{
        name
        image
        id
        artwork
        dreamworld
      }
    }
  }
  
  `