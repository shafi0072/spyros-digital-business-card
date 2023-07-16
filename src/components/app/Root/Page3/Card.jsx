import { Switch } from '@mui/material';
import React from 'react';

const Card = ({ fields }) => {
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  return (
    <div>
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
              <div className='flex items-center mt-2'>
                <Switch {...label} defaultChecked color="warning" />
                <h1 className="text-md text-gray-700">Hide Label Copy</h1>
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
              <div>

              </div>
              <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Email' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div class="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32.5 32.5">
                  <path id="email-svgrepo-com" d="M24.667,18A6.667,6.667,0,1,1,18,11.333,6.667,6.667,0,0,1,24.667,18Zm0,0v2.5a4.167,4.167,0,0,0,4.167,4.167h0A4.167,4.167,0,0,0,33,20.5V18A15,15,0,1,0,18,33h6.667" transform="translate(-1.75 -1.75)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                </svg>


              </div>
              <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div class="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}

          {items === 'Address' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div class="w-full    border  flex items-start px-3 rounded-lg">
              <div className='mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 24.008 32.063">
                  <g id="layer1" transform="translate(-0.322 -287.797)">
                    <path id="path929" d="M12.322,288.8a11.015,11.015,0,0,0-11,11c0,10.67,10.38,18.781,10.38,18.781a1,1,0,0,0,1.248,0s10.38-8.112,10.38-18.781A11.021,11.021,0,0,0,12.322,288.8Zm0,2a8.99,8.99,0,0,1,9.007,9c0,8.729-7.9,15.625-9,16.559-1.09-.929-9.007-7.827-9.007-16.559A8.983,8.983,0,0,1,12.322,290.8Z" transform="translate(0)" stroke="#000" stroke-width="2" />
                    <path id="circle931" d="M4.232,290.385a1.323,1.323,0,1,0,1.324,1.322A1.326,1.326,0,0,0,4.232,290.385Zm0,.529a.794.794,0,1,1-.793.793A.79.79,0,0,1,4.232,290.914Z" transform="translate(8.093 6.622)" stroke="#000" stroke-width="2" />
                  </g>
                </svg>


              </div>
              <textarea class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Office " />

            </div>
            <div class="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Label" />

            </div>
          </div>}

        </div>)
      }
    </div>
  );
};

export default Card;