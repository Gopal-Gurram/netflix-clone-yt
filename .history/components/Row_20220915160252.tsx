import {Movie} from "../ty"
interface Props {
  title: string
  movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return <div>Row</div>
}

export default Row
