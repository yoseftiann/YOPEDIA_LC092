import React, { useState } from 'react'
import LeftDetailCard from "./LeftDetailCard";
import MiddleDetailCard from "./MiddleDetailCard";
import RightDetailCard from "./RightDetailCard";
import DetailButton from '../components/DetailButton';
import DetailById from '../utils/DetailByID'
import { Slide } from 'react-awesome-reveal';

const DetailCard = (props) => {
  // const selectedPokemon = DetailById(props)
  console.log(props)
  return (
    <div className="bg-green-white w-full h-full flex flex-col justify-between p-10">
        <div className='flex flex-row sm:flex-col'>
          {/* <Slide cascade> */}
          <LeftDetailCard id={props.id}></LeftDetailCard>
          <MiddleDetailCard></MiddleDetailCard>
          <RightDetailCard id={props.id} name={props.name} image={props.image}></RightDetailCard>
          {/* </Slide> */}
        </div>
        {/* next and prev button */}
        <div className='flex flex-row justify-between sm:my-5'>
          <DetailButton></DetailButton>
        </div>
    </div>
  )
}

export default DetailCard