import { gql } from "@apollo/client";

export const GET_DETAIL_POKEMON = gql `query GET_DETAIL_POKEMON($name: String!){
  pokemon(name:$name){
    name
    id
    message
    abilities{
      ability{
        name
      }
    }
    height
    weight
    types{
      type{
        name
      }
    }
    base_experience
  }
}
  `