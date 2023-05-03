import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_DETAIL_POKEMON } from '../lib/queries/GET_DETAIL_POKEMON'
import Loading from '../utils/Loading';

const LeftDetailCard = (props) => {
  const {loading , error, data} = useQuery(GET_DETAIL_POKEMON, {
        variables: {name: props.id}
        // ganti sama variable input
  });

  if(loading)return <Loading/>
  else if(error)return<h1>Error...</h1>

  console.log(data)
  
  return (
    <div className="w-full h-full flex flex-col justify-around">
        <div>
            <i className='py-0 text-2xl'>#{data.pokemon.id}</i>
            <div className="w-full flex justify-center items-center uppercase font-extrabold text-6xl">
            <div className="max-w-lg">
               <span className='text-6xl sm:text-5xl md:text-4xl text-center flex items-center'>{data.pokemon.name}</span>
            </div>
            </div>
        <div className='py-4 space-x-2 sm:space-x-1 font-light flex flex-row justify-between'>
            <p className=''>Height :</p>
            <p className=''>{data.pokemon.height}</p>
            <p className=''>Weight :</p>
            <p className=''>{data.pokemon.weight}</p>
            <p className=''>Base Experience :</p>
            <p className=''>{data.pokemon.base_experience}</p>
        </div>
        </div>
        <p className="py-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sint. Pariatur expedita obcaecati amet fuga magni aut reprehenderit corrupti! Tempora illum magni autem pariatur dignissimos iusto vero aut laboriosam nulla!</p>
        <div className='w-full h-auto'>
            <p className='text-lg font-bold'>ELEMENTS</p>
            <div className='flex flex-row m-auto space-x-2'>
                {
                    data.pokemon.types.map((t) => {
                        return <div className={`w-5 h-5 rounded-full ${t.type.name === 'poison' ? 
                        'bg-purple-500' : t.type.name === 'grass' ? 
                        'bg-green-500' : t.type.name === 'fire' ?
                         'bg-red-600' : t.type.name == 'flying' ?
                          'bg-blue-200' : t.type.name == 'fighting' ?
                           'bg-amber-900' : t.type.name == 'electric' ?
                            'bg-yellow-400' : t.type.name == 'normal' ?
                             'bg-slate-500' : t.type.name == 'ground' ?
                              'bg-orange-950': t.type.name == 'ghost' ?
                               'bg-purple-950': t.type.name == 'dark' ?
                                'bg-indigo-950' : t.type.name == 'fairy' ?
                                 'bg-pink-500' : t.type.name == 'ice' ?
                                  'bg-sky-300' : t.type.name == 'rock' ?
                                   'bg-slate-700' : t.type.name == 'dragon' ?
                                    'bg-red-800' : t.type.name == 'steel' ?
                                     'bg-neutral-500' : t.type.name == 'bug' ?
                                      'bg-teal-300' : t.type.name === 'water' ? 
                                      'bg-blue-600' : t.type.name === 'psychic' ?
                                      'bg-purple-600' : 'bg-transparent'}`}>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default LeftDetailCard