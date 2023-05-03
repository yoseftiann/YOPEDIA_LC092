import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_UNLIMITED_POKEMON } from '../lib/queries/GET_UNLIMITED_POKEMON'
import { useParams } from 'react-router-dom'
import Loading from '../utils/Loading'

const MiddleDetailCard = () => {
  const {id} = useParams()
  const {loading, error, data} = useQuery(GET_UNLIMITED_POKEMON)
  if(loading) return <Loading/>
  if(error) return <p>Error: {error.message}</p>

  const pokemon = data.pokemons.results.find(pokemon => pokemon.id === parseInt(id))
  if(!pokemon) return <p>No pokemon found with {id}</p>

  return (
    <div className='w-full h-full flex justify-center'>
      <img className='drop-shadow-2xl hover:scale-105 transition duration-500 bg-cover' src={pokemon.artwork} alt="Sorry, the image is not available :(" />
    </div>
  )
}

export default MiddleDetailCard
