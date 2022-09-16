import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Movie } from '../typings'
interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return (
    <div className="h-40>
      <h2>{title}</h2>
      <div className="relative group md:space-y-2">
        <ChevronLeftIcon className="absolute top-0 z-40 m-auto transition border-0 cursor-pointer left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
        <ChevronRightIcon className="absolute top-0 z-40 m-auto transition border-0 cursor-pointer left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export default Row
