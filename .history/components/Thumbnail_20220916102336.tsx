import { Movie } from '../typings'
import Image from 'next/image'
import { baseUrl2 } from '../constants/movie'

interface Props {
  cinema: Movie
}

const Thumbnail = ({ cinema }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={`${baseUrl2}${cinema.backdrop_path || cinema.poster_path}`}
        className="object-cover rounded-sm md:rounded"
        layout="fill"
        alt="movie images"
      />
    </div>
  )
}

export default Thumbnail
