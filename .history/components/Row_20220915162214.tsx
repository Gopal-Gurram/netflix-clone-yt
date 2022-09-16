import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Movie } from '../typings'
interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <ChevronLeftIcon className="absolute top-0 z-40 m-auto border-0 cursor-pointer -0 left-2 h-9 w-9 " />
        <ChevronRightIcon className="absolute top-0 z-40 m-auto border-0 cursor-pointer -0 left-2 h-9 w-9" />
      </div>
    </div>
  )
}

export default Row
