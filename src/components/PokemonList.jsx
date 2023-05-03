import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_DETAIL_POKEMON } from '../lib/queries/GET_DETAIL_POKEMON'
import { Link } from 'react-router-dom'
import PokeCard from '../cards/PokeCard'
import IsWater from '../utils/IsWater'

const PokemonList = (props) => {

const [getPoke, setPoke] = useState(props)
console.log("ini data")
console.log(props.name)
  
  return (
    <div>
        {IsWater && <h1>{props.name}</h1>}
    </div>
  )
}

export default PokemonList