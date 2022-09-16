import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'
interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null)

  const [isMoved, setIsMoved ] = useState(false)

  const handleClick = (direction: string) => {
    set
  }
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 text-sm font-semibold cursor-pointer text-[#e5e5e5] trasition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative group md:-ml-2">
        <ChevronLeftIcon
          className="absolute top-0 z-40 m-auto transition opacity-0 cursor-pointer botton-0 left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('left')}
        />
        <div
          ref={useRef}
          className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          className="absolute top-0 z-40 m-auto transition opacity-0 cursor-pointer botton-0 left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  )
}

export default Row
