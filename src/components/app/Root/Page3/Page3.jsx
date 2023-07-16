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
    <div className='mt-6 px-[10%] mb-[10%]'>
      <div class="grid grid-cols-3 gap-4">
        
        <div class="col-span-2 ... rounded-lg p-2 bg-gray-200" style={{ border: `2px dotted ${color}` }}>
          <Card fields={fields}/>
          {fields?.length === 0 && <h1 className='text-md text-center mt-5 mb-5'>Click the fields you want to add in the card </h1>}
        </div>
        <div class="rounded-lg p-2 " style={{ border: `2px dotted ${color}` }} >
          <div>
            <Search />
            <Content setFields={setFields} fields={fields} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page3;