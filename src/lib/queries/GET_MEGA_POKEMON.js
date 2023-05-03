import { gql } from "@apollo/client";

export const GET_MEGA_POKEMON = gql `query GET_MEGA_POKEMON{
    pokemons(limit: 300 offset: 149){
      results{
        name
        image
        id
        artwork
        dreamworld
      }
    }
  }`