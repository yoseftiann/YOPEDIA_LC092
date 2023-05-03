import { gql } from "@apollo/client";

export const GET_UNLIMITED_POKEMON = gql `query GET_UNLIMITED_POKEMON{
    pokemons(limit: 10000 offset:0){
      results{
        name
        image
        id
        artwork
        dreamworld
      }
    }
  } `