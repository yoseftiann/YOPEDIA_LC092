import React from 'react'
import { GET_DETAIL_POKEMON } from '../lib/queries/GET_DETAIL_POKEMON'

const ElementCard = (props) => {
  return (
    <div className=''>
        <p>{props.element}</p>
    </div>
  )
}

export default ElementCard