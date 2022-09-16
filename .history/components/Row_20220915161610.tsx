import { Movie } from '../typings'
interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return <div>
    <h2>{}</h2>
  </div>
}

export default Row
