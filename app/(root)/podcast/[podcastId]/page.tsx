import React from 'react'

const Podcast = ({params}:{params: {podcastId: string} }) => {
  return (
    <p className='text-white-1'>Podcast for {params.podcastId}</p>
  )
}

export default Podcast