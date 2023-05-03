import React, { useState } from 'react'
import DetailCard from '../cards/DetailCard';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ALL_POKEMON } from '../lib/queries/GET_ALL_POKEMON';
import Loading from '../utils/Loading';

const DetailComp = () => {
  const {id} = useParams();
  const {loading, error, data} = useQuery(GET_ALL_POKEMON)
  console.log(data)
  let found;
  if(data){
    found = data.pokemons.results.find((p) => p.id === parseInt(id))
  }else if(loading)return <Loading/>
  else if(error)return 
  console.log(found.name)

  if(id < 1) {
    return <p>ID must be greater than 0</p>
  }
    return (
        <div className='w-full h-screen'>
            <NavBar/>
            <div className='w-full h-14 bg-transparent'></div>
            <div className='w-full h-auto bg-white flex flex-row'>
                <DetailCard className="bg-cover" 
                id={id} 
                name={found.name} 
                image={found.image}
                ></DetailCard>
            </div>
        </div>
      );
}

export default DetailComp;