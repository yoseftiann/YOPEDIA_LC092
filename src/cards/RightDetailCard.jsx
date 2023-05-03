import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { GET_SPRITE_POKEMON } from '../lib/queries/GET_SPRITE_POKEMON';
import { FaStar } from 'react-icons/fa';
import Favorite from '../pages/favourites';
import Loading from '../utils/Loading';

const RightDetailCard = (props) => { 
  const {loading, error, data} = useQuery(GET_SPRITE_POKEMON, {
    variables: {name: props.id}
  });

  const [getFav, setFav] = useState(() => {
    const storedFav = localStorage.getItem('favorites');
    return storedFav ? JSON.parse(storedFav) : [];
  });

  // add favorite and remove berdasarkan boolean
  const addFavouritePoke = (pokemon) => {
    if(!isExist(pokemon)){
      const newFavourites = [...getFav, pokemon]
      setFav(newFavourites)
      alert("added to favorite")
    }else{
      const newFavourites = getFav.filter((fill) => fill.id !== pokemon.id);
      setFav(newFavourites)
      alert("removed from favorite")
    }
  }

  //ngecek apakah ada atau ga di dalam localstorage
  const isExist = (pokemon) => {
    return getFav.some((fav) => fav.id === pokemon.id);
  }

  // update kalau ada perubahan
  useEffect (() => {
    localStorage.setItem('favorites', JSON.stringify(getFav));
  }, [getFav])

  console.log(getFav)

  if(loading)return <Loading/>
  else if(error)return<h1>Error....</h1>

  return (
    <div className='w-full h-full flex flex-col justify-around'>
      {/* Normal and Shiny */}
      <div className='flex flex-col justify-start items-center'>
      <h1 className='font-extrabold text-1xl'>{(data.pokemon.sprites.back_default || data.pokemon.sprites.front_default) ? "NORMAL" : ""}</h1>
        <div className='flex flex-row space-x-4 sm:space-x-8'>
          {data.pokemon.sprites.back_default ? (
              <img
                src={data.pokemon.sprites.back_default}
                alt=""
                className='border-2 drop-shadow-md hover:drop-shadow-2xl transition duration-500'
              />
            ) : (
              <></>
            )
          }
          {data.pokemon.sprites.front_default ? (
              <img
                src={data.pokemon.sprites.front_default}
                alt=""
                className='border-2 drop-shadow-md hover:drop-shadow-2xl transition duration-500'
              />
            ) : (
              <></>
            )
          }
        </div>
        <h1 className='font-extrabold text-1xl'>{(data.pokemon.sprites.back_shiny || data.pokemon.sprites.front_shiny) ? "SHINY" : ""}</h1>
        <div className='flex flex-row space-x-4 sm:space-x-8'>
          {data.pokemon.sprites.back_shiny? (
              <img
                src={data.pokemon.sprites.back_shiny}
                alt=""
                className='border-2 drop-shadow-md hover:drop-shadow-2xl transition duration-500'
              />
            ) : (
              <></>
            )
          }
          {data.pokemon.sprites.front_shiny? (
            <img
              src={data.pokemon.sprites.front_shiny}
              alt=""
              className='border-2 drop-shadow-md hover:drop-shadow-2xl transition duration-500'
            />
          ) : (
            <></>
            )
          }
        </div>
      </div>

      {/* Ability */}
      <div className='flex flex-row justify-between'>
        {/* 1 */}
        <div className='flex flex-col justify-end'>
          <h1 className='font-extrabold text-2xl'>SKILL</h1>
          <ul className=''>
            {
              data.pokemon.abilities.map((pokemon) => {
                return <li className='capitalize text-lg font-normal font-serif italic hover:px-4 duration-500'>{pokemon.ability.name}</li>
              })
            }
          </ul>
        </div>
        {/* 2 */}
        <div className='flex justify-center items-center'>
            <FaStar 
              className={`w-14 h-14 drop-shadow-md transition duration-500 ${isExist(props) ?  'text-yellow-500 hover:text-slate-800' : ' hover:text-yellow-500 text-slate-800 '}`}
              onClick={() => addFavouritePoke(props)}
              >
              </FaStar>
        </div>
      </div>

    </div>
  );
}

export default RightDetailCard