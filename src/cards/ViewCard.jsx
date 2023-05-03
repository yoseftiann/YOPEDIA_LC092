import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_ALL_POKEMON } from '../lib/queries/GET_ALL_POKEMON';
import PokeCard from './PokeCard';
import { Link } from 'react-router-dom';
import SmallPokemonCard from './SmallPokemonCard';
import MostPowerful from './MostPowerful';
import PokemonTitle from '../components/PokemonTitle';
import Loading from '../utils/Loading';
import { Fade, Slide } from 'react-awesome-reveal';
import FavoriteList from '../components/FavoriteList';

const ViewCard = () => {
  const { loading, error, data } = useQuery(GET_ALL_POKEMON);

  if (loading) return (
    <div className='w-99% h-[100vh] flex flex-col justify-center items-center mx-8'>
      <Loading></Loading>
      <p className='text-black font-semibold'>This might take a moment, please wait...</p>
      <p className='text-center'>for faster load you can try search and click something from the search bar</p>
    </div>
  )
  if (error) return <h1>Error...</h1>;

  console.log(data)

  return (
    <Slide cascade>
    <div className='space-y-8'>
      <div className='flex flex-col ml-6 space-y-2'>
        {/* first category */}
        <PokemonTitle name="TOP POKEMON"></PokemonTitle>
        <div className='flex space-x-2 overflow-y-auto'>
            <style>{`
              ::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          {
            data.pokemons.results.slice(0,15)?.map((pokemon) => {
              return ( 
                <Link key={pokemon.name} to={`/Detail/${pokemon.id}`}>
                   <PokeCard name={pokemon.name} img={pokemon.image} id={pokemon.id}></PokeCard>
                </Link>
              )
            })
          }
        </div>
      </div>
      <div className='flex flex-col ml-6 space-y-2'>
        {/* second category */}
        <PokemonTitle name="LATEST POKEMON"></PokemonTitle>
        <SmallPokemonCard></SmallPokemonCard>
      </div>
      <div className='flex flex-col ml-6 space-y-2'>
        {/* third category */}
        <PokemonTitle name="MORE POKEMON"></PokemonTitle>
        <MostPowerful></MostPowerful>
      </div>
      <div className='flex flex-col ml-6 space-y-2'>
        <PokemonTitle name="YOUR FAVORITE"></PokemonTitle>
        <FavoriteList></FavoriteList>
      </div>
    </div>
    </Slide>
  );
};

export default ViewCard;
