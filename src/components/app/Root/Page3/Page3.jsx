import { userContext } from '@/src/Sotrage/ContextApi';
import React, { useContext, useState } from 'react';
import Search from './Search';
import Content from './Content';
import Card from './Card';




const Page3 = () => {
  const { color } = useContext(userContext)
  const [fields, setFields] = useState([])
  console.log({ fields })
  return (
    <div className={`z-10 ${fields?.length === 0 ? 'mt-[17%]':'mt-[10%]'} px-[10%] mb-[10%]`}>
      <div className="grid grid-cols-4 gap-4">

        <div className={`col-span-2 mr-[23%]  w-full  rounded-lg p-2 bg-gray-200`} style={{ border: `2px dotted ${color}` }}>
          <Card fields={fields} />
          {fields?.length === 0 && <h1 className='text-md text-center mt-5 mb-5'>Click the fields you want to add in the card </h1>}
          
        </div>
        <div className='fixed bg-white w-3/12  z-40 bottom-10 '>
            <button type="submit" className="mr-2 hover:bg-blue-800 hover:text-white focus:ring-4 border border-[#0277B5] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Cancel</button>
            <button type="submit" className="text-white bg-[#0277B5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">save</button>
          </div>
        <div className="fixed overflow-y-auto max-h-[70vh] right-[7%] rounded-lg p-2 " style={{ border: `2px dotted ${color}` }} >
          <div className=''>
            <Search />
            <Content setFields={setFields} fields={fields} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page3;