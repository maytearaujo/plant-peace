import Logo from "../assets/navbar/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

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
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

    </div>
  )
}

export default Header