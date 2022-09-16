import img from "next/image"
const Header = () => {
  return (
    <header>
      <div>
        <image
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
      </div>
      <div></div>
    </header>
  )
}

export default Header