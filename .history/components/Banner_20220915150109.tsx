import { Movie } from '../typings'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { baseUrl } from '../constants/movie'

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
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          layout="fill"
          alt="movie image backgorund"
          objectFit="cover"
        />
      </div>
      <h1>
        {movie?.name}
      </h1>
    </div>
  )
}

export default Banner
