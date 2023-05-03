import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PokeCard from '../cards/PokeCard';
import { Slide } from 'react-awesome-reveal';

const FavoriteList = () => {
    const storedValue = localStorage.getItem('favorites');

    const myFavorite = JSON.parse(storedValue);
    console.log(myFavorite)

    return (
        <div className='flex flex-row space-x-2 overflow-y-auto'>
            <style>{`
              ::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {
                myFavorite && myFavorite.map((pokemon) => {
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

export default FavoriteList
