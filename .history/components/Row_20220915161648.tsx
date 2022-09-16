import { ChevronLeftIcon } from '@heroicons/react/outline'
import { Movie } from '../typings'
interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return <div>
    <h2>{title}</h2>
    <div>
        <ChevronLeftIcon />
        <ChevronLeftIcon />
    </div>
  </div>
}

export default Row
