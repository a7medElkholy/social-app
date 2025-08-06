import React from 'react'

export default function ErrorMessage({error}) {
  return (<p className='text-red-500 font-medium mt-1'>{error}</p> );
}
