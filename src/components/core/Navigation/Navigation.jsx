import React from 'react';
import { useRouter } from 'next/router';
const Navigation = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <div className='fixed z-50 bg-white border-y border-gray-300 w-full py-3'>
        <div>
          <ul className='flex pt-3'>
            <li className={`ml-[10%] mr-5 text-md font-semibold cursor-pointer ${router.pathname === '/general' ? "border-b-2 border-[#0277B5] text-[#0277B5]" : ""}`} onClick={() => router.push('/general')}>General</li>

            <li className={`mr-5 text-md font-semibold cursor-pointer ${router.pathname === '/display' ? "border-b-2 border-[#0277B5] text-[#0277B5]" : ""}`} onClick={() => router.push('/display')}>Display</li>
            
            <li className={` text-md font-semibold cursor-pointer ${router.pathname === '/fields' ? "border-b-2 border-[#0277B5] text-[#0277B5]" : ""}`} onClick={() => router.push('/fields')}>Fields</li>
          </ul>

        </div>

      </div>
      {children}
    </>
  );
};

export default Navigation;