import Logo from "../assets/navbar/logo.png"
import LogoUser from "../assets/navbar/logoUser.png"

const Header = () => {
  return (
    <div className="flex justify-around items-center h-20 bg-white">

      <a href="/" target="_self">
        <img src={Logo} alt="Logo Plant Peace" />
      </a>

      <nav className="w-5/12 h-20 ">
        <ul className="flex flex-row justify-evenly items-center h-full">
          <li><a href="/">Home</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Poducts</a></li>
          <li><a href="/about">About us</a></li>
        </ul>
      </nav>
      <a href="#">
        <img src={LogoUser} alt="Logo Usuário" />
      </a>

    </div>
  )
}

export default Header