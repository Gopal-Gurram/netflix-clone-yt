import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { Movie } from '../typings'
import Thumbnail from './thumbnail
interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 text-sm font-semibold cursor-pointer text-[#e5e5e5] trasition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative group md:space-y-2">
        <ChevronLeftIcon className="z-40 p-0 m-auto transition border-0 cursor-pointer topacity-0 oabsolute left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
        <div>
          <Thumbnail/>
        </div>
        <ChevronRightIcon className="top-0 z-40 m-auto transition border-0 cursor-pointer opacity-0absolute left-2 h-9 w-9 hover:scale-125 group-hover:opacity-100" />
      </div>
    </div>
  )
}

export default Row
