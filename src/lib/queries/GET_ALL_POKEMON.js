import { gql } from "@apollo/client";

export const GET_ALL_POKEMON = gql `query GET_ALL_POKEMON{
    pokemons(limit: 10000 offset: 0){
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