import {useNavigate, Outlet} from 'react-router-dom'
import { ClerkProvider} from '@clerk/clerk-react'
import Footer from "../components/Footer"
import Header from "../components/Header.tsx"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
      publishableKey={PUBLISHABLE_KEY}
    >
    <div className="bg-white text-primaryLunarGreen">
      <Header /> 
      <Outlet />
      <Footer /> 
    </div>
    </ClerkProvider>
  )
}