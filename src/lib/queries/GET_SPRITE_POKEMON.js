import { gql} from "@apollo/client";

export const GET_SPRITE_POKEMON = gql `query GET_SPRITE_POKEMON($name: String!) {
    pokemon(name: $name) {
      sprites{
          back_default
          front_default
          back_shiny
          front_shiny
      }
      abilities{
        ability{
          name
        }
      }
    }
  }`