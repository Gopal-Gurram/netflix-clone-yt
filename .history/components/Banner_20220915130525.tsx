import { Movie } from '../typings'
import { useState } from 'react';

interface Props {
  netflixOriginals: Movie[]
}
const Banner = ({ netflixOriginals }: Props) => {

    const [movie , setMovie] = useState<Movie | null
  return (
    <div>
      <div></div>
    </div>
  )
}

export default Banner
