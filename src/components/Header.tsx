import Logo from "../assets/navbar/logo.png"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    <div className="bg-wisper flex justify-between py-8 md:justify-around items-center w-[100vw] h-20 font-raleway font-normal text-lg text-primaryLunarGreen">

      <a href="/" target="_self">
        <img src={Logo} alt="Logo Plant Peace" />
      </a>

      <section className="flex md:hidden">
          <div
            className="space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} 
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "absolute w-[100%] h-[100vh] top-0 left-0 bg-wisper z-10 flex flex-col justify-evenly items-center" : "hidden"}>

            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} 
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-8 uppercase hover:text-primaryAvacado"><a href="/">Home</a></li>
              <li className="my-8 uppercase hover:text-primaryAvacado"><a href="#">Register</a></li>
              <li className="my-8 uppercase hover:text-primaryAvacado"><a href="#">Poducts</a></li>
              <li className="my-8 uppercase hover:text-primaryAvacado"><a href="/about">About us</a></li>
              <li className="my-8 uppercase hover:text-primaryAvacado hidden"><a href="#">Blog</a></li>
            </ul>
          </div>
        </section>

      <section className="w-5/12 h-20 hidden md:flex">
        <ul className="flex flex-row justify-around items-center w-[100%] h-full">
          <li className="hover:text-primaryAvacado"><a href="/">Home</a></li>
          <li className="hover:text-primaryAvacado"><a href="#">Register</a></li>
          <li className="hover:text-primaryAvacado"><a href="#">Poducts</a></li>
          <li className="hover:text-primaryAvacado"><a href="/about">About us</a></li>
          <li className="hidden hover:text-primaryAvacado"><a href="#">Blog</a></li>
        </ul>
      </nav>
      <div>
        <SignedOut>
        <SignInButton>
          <button><img src="/src/assets/navbar/logoUser.png" className="hover:w-[40px] " alt="" /></button>
        </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div> 

    </div>
  )
}

export default Header