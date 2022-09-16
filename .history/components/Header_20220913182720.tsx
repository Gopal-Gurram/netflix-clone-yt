import { SearchIcon, BellIcon } from '@heroicons/react/solid'
const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Populer</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div>
        <SearchIcon className="hidden w-6 h-6 sm:inline" />
        <p></p>
        <BellIcon />
      </div>
    </header>
  )
}

export default Header