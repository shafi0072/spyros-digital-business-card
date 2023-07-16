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
          {items === 'Link' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div class="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 31.002 29.573">
                  <g id="Page-1" transform="translate(0.5 0.501)">
                    <g id="Dribbble-Light-Preview">
                      <g id="icons">
                        <path id="url-_1424_" data-name="url-[#1424]" d="M247.857,452.784a5.675,5.675,0,0,1,1-9.025,6.471,6.471,0,0,1,7.784.9l.959.913a1.585,1.585,0,0,0,2.165,0,1.408,1.408,0,0,0,0-2.062l-.81-.771a9.79,9.79,0,0,0-13.064-.448,8.459,8.459,0,0,0-.2,12.559l1.083,1.031a1.585,1.585,0,0,0,2.165,0,1.408,1.408,0,0,0,0-2.062Zm22.253.567-.781-.744a1.585,1.585,0,0,0-2.165,0,1.408,1.408,0,0,0,0,2.062l.959.913a5.73,5.73,0,0,1,.94,7.411,6.327,6.327,0,0,1-9.479.955l-1.083-1.031a1.585,1.585,0,0,0-2.165,0,1.408,1.408,0,0,0,0,2.062l1.083,1.031a9.513,9.513,0,0,0,13.162-.165,8.709,8.709,0,0,0-.47-12.493Zm-6.2,8.535-13.891-13.225a1.412,1.412,0,0,1,0-2.063,1.588,1.588,0,0,1,2.165,0l13.893,13.225a1.412,1.412,0,0,1,0,2.063,1.59,1.59,0,0,1-2.167,0Z" transform="translate(-243 -440)" stroke="#000" stroke-width="1" fill-rule="evenodd" />
                      </g>
                    </g>
                  </g>
                </svg>


              </div>
              <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div class="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
            <div class="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input class="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'WhatsApp' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div class="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30.708 30.894">
                  <g id="Group_11" data-name="Group 11" transform="translate(-1314.304 -532.5)">
                    <g id="whatsapp-svgrepo-com" transform="translate(1314.41 532.5)">
                      <path id="Path_14" data-name="Path 14" d="M18.447,14.412c-.376-.178-2.178-1.069-2.515-1.208s-.574-.178-.832.2-.95,1.188-1.168,1.445-.416.277-.792,0a10.158,10.158,0,0,1-2.95-1.822,10.4,10.4,0,0,1-1.98-2.554c-.218-.356,0-.554.158-.752s.356-.416.554-.634a2.752,2.752,0,0,0,.356-.614.752.752,0,0,0,0-.653c0-.178-.832-1.98-1.148-2.713s-.594-.634-.812-.634H6.527a1.426,1.426,0,0,0-.99.455A4.158,4.158,0,0,0,4.25,8a7.108,7.108,0,0,0,1.485,3.861A16.474,16.474,0,0,0,12.052,17.4c.871.376,1.544.594,2.079.772a5.009,5.009,0,0,0,2.317.139,3.821,3.821,0,0,0,2.495-1.742,3.307,3.307,0,0,0,.218-1.742A2.055,2.055,0,0,0,18.447,14.412Z" transform="translate(3.587 3.889)" stroke="#707070" stroke-width="1" />
                      <path id="Path_15" data-name="Path 15" d="M25.736,4.817A14.573,14.573,0,0,0,15.262.5,14.731,14.731,0,0,0,2.57,22.578L.59,30.2l7.8-1.98A14.652,14.652,0,0,0,15.42,30h-.158A14.731,14.731,0,0,0,25.736,4.817ZM15.262,27.468a12.118,12.118,0,0,1-6.237-1.723l-.436-.257L3.956,26.7l1.228-4.514-.277-.455a12.227,12.227,0,1,1,10.356,5.742Z" transform="translate(0 0)" stroke="#707070" stroke-width="1" />
                    </g>
                  </g>
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
    </div>
  );
};

export default Card;