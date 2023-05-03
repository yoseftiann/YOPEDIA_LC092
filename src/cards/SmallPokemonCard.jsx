import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_UNIQUE_POKEMON } from '../lib/queries/GET_UNIQUE_POKEMON'
import { Link } from 'react-router-dom'
import PokeCard from './PokeCard'

const SmallPokemonCard = () => {
  const {loading, error, data} = useQuery(GET_UNIQUE_POKEMON , {
    variables: {limit: 1000, offset: 100}
  })

  if(loading)return <h1>Loading...</h1>
  else if(error)return <h1>Error...</h1>
  return (
    <div className='flex flex-row space-x-2 overflow-y-auto'>
            <style>{`
              ::-webkit-scrollbar {
                display: none;
              }
            `}</style>
        {
            data.pokemons.results.slice(0,15).map((pokemon) => {
                return (
                    <Link key={pokemon.name} to={`/Detail/${pokemon.id}`}>
                        <PokeCard name={pokemon.name} img={pokemon.image} id={pokemon.id}></PokeCard>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default SmallPokemonCard