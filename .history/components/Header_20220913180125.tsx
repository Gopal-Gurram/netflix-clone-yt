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
          className="headerLink" className="headerLink">Home</li>
          className="headerLink">TV Shows</li>
          className="headerLink">Movies</li>
          className="headerLink">New & Populer</li>
          className="headerLink">My List</li>
        </ul>
      </div>
      <div></div>
    </header>
  )
}

export default Header