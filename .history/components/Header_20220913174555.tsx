const Header = () => {
  return (
    <header>
      <div className="flex items-center space-x-2 md:space">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Populer</li>
          <li>My List</li>
        </ul>
      </div>
      <div></div>
    </header>
  )
}

export default Header
