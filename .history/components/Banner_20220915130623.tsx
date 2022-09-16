import { Movie } from '../typings'
import { useState, useEffect } from 'react';

interface Props {
  netflixOriginals: Movie[]
}
const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect( () => {
    setMovie(netflixOriginals[math]
  })
  return (
    <div>
      <div></div>
    </div>
  )
}

export default Banner
