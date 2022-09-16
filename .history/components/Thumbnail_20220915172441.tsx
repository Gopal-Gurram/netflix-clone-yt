import { Movie } from '../typings'
interface Props {
  movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
  return <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'> 

  </div>
}

export default Thumbnail
