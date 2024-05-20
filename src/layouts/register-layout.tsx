import * as React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function RegisterLayout () {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isLoaded && !userId) {
          navigate('/sign-in');
    }
  }, [isLoaded])

  if (!isLoaded){
    return (
        <div className="flex justify-center items-center h-screen">
          <div className="
            h-[200px] w-[200px] border-[20px] border-l-gray-200 border-l-gray-200 border-l-gray-200 border-l-bgFooter
            animate-spin ease-linear rounded-full ">
          </div>
        </div>
      );
    }

  return (<Outlet/>)
}