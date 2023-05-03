// import { useQuery } from "@apollo/client";
// import { GET_ALL_POKEMON } from "../lib/queries/GET_ALL_POKEMON";

// function DetailByID(id){
//     const {loading, error, data}= useQuery(GET_ALL_POKEMON)
//     console.log(data)
//     const found = data.pokemons.results.find((p) => p.id === id)
//     if(found){
//         return {name: found.name, image: found.image};
//     }else{
//         return {name: "not found", image: ""};
//     }
// }

// export default DetailByID