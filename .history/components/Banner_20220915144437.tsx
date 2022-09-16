import { Movie } from '../typings'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Props {
  netflixOriginals: Movie[]
}
const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    )
  }, [netflixOriginals])

  console.log(movie)

  return (
    <div>
      <div>
        <Image src={ `${base}`} />
      </div>
    </div>
  )
}

export default Banner