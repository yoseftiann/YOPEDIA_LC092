import { gql } from "@apollo/client";

export const GET_ID_NAME_POKEMON = gql `query GET_ID_NAME_POKEMON($name: String!){
    pokemon(name: $name){
      id
    }
  }`