import Logo from "../assets/navbar/logo.png"
import LogoUser from "../assets/navbar/logoUser.png"


const Header = () => {
  return (
    <div className="flex justify-around h-20 items-center">

      <a href="/Home" target="_">
        <img src={Logo} alt="Logo Plant Peace" />
      </a>

      <nav className="w-5/12 h-20 ">
        <ul className="flex flex-row justify-evenly items-center h-full">
          <li><a href="#">Home</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Poducts</a></li>
          <li><a href="#">About us</a></li>
        </ul>
      </nav>
      <a href="#">
        <img src={LogoUser} alt="Logo Usuário" />
      </a>
    </div>
  )
}

export default Header