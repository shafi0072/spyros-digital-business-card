import { userContext } from '@/src/Sotrage/ContextApi';
import React, { useContext, useState } from 'react';
import Search from './Search';
import Content from './Content';

const Page3 = () => {
  const { color } = useContext(userContext)
  const [fields, setFields] = useState([])
  console.log({ fields })
  return (
    <div className='mt-6 px-[10%] mb-[10%]'>
      <div class="grid grid-cols-3 gap-4">

        <div class="col-span-2 ... rounded-lg p-2 bg-gray-200" style={{ border: `2px dotted ${color}` }}>
          {
            fields?.map((items, index) => <div className='bg-white px-4 py-4 rounded-lg mb-2'>
              {items === 'Phone' && <div>
                <div class=" ">
                  <h1 className="text-md">{items}</h1>
                  <div class="grid grid-cols-3 gap-4">

                    <div class="col-span-2 ...">
                      <div class="w-full  border  flex items-center px-3 rounded-lg">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26.832 30">
                            <path id="phone-svgrepo-com" d="M13.779,6.054S13.329,5,12.642,5a1.711,1.711,0,0,0-1.263.528c-.235.215-4.159,3.44-4.159,3.44A3.708,3.708,0,0,0,6.166,11.84,19.03,19.03,0,0,0,8.51,20.1c1.89,3.709,6.62,9.376,9.61,11.369a22.289,22.289,0,0,0,5.347,2.988,15.5,15.5,0,0,0,2.6.543,2.635,2.635,0,0,0,1.7-.525c.731-.53,4.831-3.828,4.831-3.828a1.249,1.249,0,0,0-.162-1.961c-1.171-1.054-4.728-3.4-5.489-4.015a1.881,1.881,0,0,0-2.317.074c-.468.427-1.3,1.129-1.406,1.218-.153.117-.571.5-1.04.308A14.35,14.35,0,0,1,16.861,21.6c-2.257-3.1-2.505-4.118-2.842-5.215a.764.764,0,0,1,.307-.9c.338-.235,1.583-1.272,1.583-1.272a1.8,1.8,0,0,0,.469-1.732c-.337-.937-2.6-6.431-2.6-6.431Z" transform="translate(-6.161 -5)" />
                          </svg>
                        </div>

                        <input class="appearance-none block w-full  text-gray-700  rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="+880123456789" />

                      </div>
                    </div>
                    <div class="...">
                      <div class="w-full    border  flex items-center px-3 rounded-lg">

                        <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="# 201" />

                      </div>
                    </div>

                  </div>
                  <div>

                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="countries" class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                      <option selected>Choose a Category</option>
                      <option value="Office">Office</option>
                      <option value="Mobile">Mobile</option>
                      <option value="Fax">Fax</option>

                    </select>

                  </div>
                </div>
              </div>}
              {items === 'Website' && <div className="mb-2">
                <h1 className="text-md">{items}</h1>
                <div class="w-full    border  flex items-center px-3 rounded-lg">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
                      <path id="website-dashboard-svgrepo-com" d="M3.5,32h27A1.5,1.5,0,0,0,32,30.5V3.5A1.5,1.5,0,0,0,30.5,2H3.5A1.5,1.5,0,0,0,2,3.5v27A1.5,1.5,0,0,0,3.5,32ZM5,14H8V29H5ZM29,29H11V14H29ZM5,5H29v6H5Z" transform="translate(-2 -2)" />
                    </svg>

                  </div>
                  <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

                </div>
                <div class="w-full  mt-2  border  flex items-center px-3 rounded-lg">
                 
                  <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

                </div>
              </div>}
              {items === 'Email' && <div className="mt-2">
                <h1 className="text-md">{items}</h1>
                <div class="w-full    border  flex items-center px-3 rounded-lg">
                  <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32.5 32.5">
  <path id="email-svgrepo-com" d="M24.667,18A6.667,6.667,0,1,1,18,11.333,6.667,6.667,0,0,1,24.667,18Zm0,0v2.5a4.167,4.167,0,0,0,4.167,4.167h0A4.167,4.167,0,0,0,33,20.5V18A15,15,0,1,0,18,33h6.667" transform="translate(-1.75 -1.75)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/>
</svg>


                  </div>
                  <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

                </div>
                <div class="w-full  mt-2  border  flex items-center px-3 rounded-lg">
                 
                  <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

                </div>
              </div>}


              
            </div>)
          }
          <h1 className='text-md text-center mt-5 mb-5'>Click the fields you want to add in the card </h1>
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