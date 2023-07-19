import { Switch } from '@mui/material';
import React from 'react';

const Card = ({ fields }) => {
  const label = { inputProps: { 'aria-label': 'Color switch demo' } };
  return (
    <div>
      {
        fields?.map((items, index) => <div className='bg-white px-4 py-4 rounded-lg mb-2'>
          {items === 'Phone' && <div>
            <div className=" ">
              <h1 className="text-md">{items}</h1>
              <div className="grid grid-cols-3 gap-4">

                <div className="col-span-2">
                  <div className="w-full  border  flex items-center px-3 rounded-lg">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26.832 30">
                        <path id="phone-svgrepo-com" d="M13.779,6.054S13.329,5,12.642,5a1.711,1.711,0,0,0-1.263.528c-.235.215-4.159,3.44-4.159,3.44A3.708,3.708,0,0,0,6.166,11.84,19.03,19.03,0,0,0,8.51,20.1c1.89,3.709,6.62,9.376,9.61,11.369a22.289,22.289,0,0,0,5.347,2.988,15.5,15.5,0,0,0,2.6.543,2.635,2.635,0,0,0,1.7-.525c.731-.53,4.831-3.828,4.831-3.828a1.249,1.249,0,0,0-.162-1.961c-1.171-1.054-4.728-3.4-5.489-4.015a1.881,1.881,0,0,0-2.317.074c-.468.427-1.3,1.129-1.406,1.218-.153.117-.571.5-1.04.308A14.35,14.35,0,0,1,16.861,21.6c-2.257-3.1-2.505-4.118-2.842-5.215a.764.764,0,0,1,.307-.9c.338-.235,1.583-1.272,1.583-1.272a1.8,1.8,0,0,0,.469-1.732c-.337-.937-2.6-6.431-2.6-6.431Z" transform="translate(-6.161 -5)" />
                      </svg>
                    </div>

                    <input className="appearance-none block w-full  text-gray-700  rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="+880123456789" />

                  </div>
                </div>
                <div className="...">
                  <div className="w-full border flex items-center px-3 rounded-lg">

                    <input className="appearance-none block text-gray-700  rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="# 201" />

                  </div>
                </div>

              </div>
              <div>

                <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                <select id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
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
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30">
                  <path id="website-dashboard-svgrepo-com" d="M3.5,32h27A1.5,1.5,0,0,0,32,30.5V3.5A1.5,1.5,0,0,0,30.5,2H3.5A1.5,1.5,0,0,0,2,3.5v27A1.5,1.5,0,0,0,3.5,32ZM5,14H8V29H5ZM29,29H11V14H29ZM5,5H29v6H5Z" transform="translate(-2 -2)" />
                </svg>

              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">
              <div>

              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Email' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32.5 32.5">
                  <path id="email-svgrepo-com" d="M24.667,18A6.667,6.667,0,1,1,18,11.333,6.667,6.667,0,0,1,24.667,18Zm0,0v2.5a4.167,4.167,0,0,0,4.167,4.167h0A4.167,4.167,0,0,0,33,20.5V18A15,15,0,1,0,18,33h6.667" transform="translate(-1.75 -1.75)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Address' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-start px-3 rounded-lg">
              <div className='mt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" viewBox="0 0 24.008 32.063">
                  <g id="layer1" transform="translate(-0.322 -287.797)">
                    <path id="path929" d="M12.322,288.8a11.015,11.015,0,0,0-11,11c0,10.67,10.38,18.781,10.38,18.781a1,1,0,0,0,1.248,0s10.38-8.112,10.38-18.781A11.021,11.021,0,0,0,12.322,288.8Zm0,2a8.99,8.99,0,0,1,9.007,9c0,8.729-7.9,15.625-9,16.559-1.09-.929-9.007-7.827-9.007-16.559A8.983,8.983,0,0,1,12.322,290.8Z" transform="translate(0)" stroke="#000" stroke-width="2" />
                    <path id="circle931" d="M4.232,290.385a1.323,1.323,0,1,0,1.324,1.322A1.326,1.326,0,0,0,4.232,290.385Zm0,.529a.794.794,0,1,1-.793.793A.79.79,0,0,1,4.232,290.914Z" transform="translate(8.093 6.622)" stroke="#000" stroke-width="2" />
                  </g>
                </svg>


              </div>
              <textarea className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Office " />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Label" />

            </div>
          </div>}
          {items === 'Link' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
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
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'WhatsApp' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
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
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Viber' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29.668" height="30.585" viewBox="0 0 29.668 30.585">
                  <g id="viber-svgrepo-com" transform="translate(-0.666 -0.56)">
                    <path id="Path_16" data-name="Path 16" d="M13.309,4a1.309,1.309,0,1,0,0,2.618,5.244,5.244,0,0,1,3.819,1.416,5.244,5.244,0,0,1,1.416,3.819,1.309,1.309,0,1,0,2.618,0,7.849,7.849,0,0,0-2.183-5.67A7.849,7.849,0,0,0,13.309,4Z" transform="translate(3.5 1.062)" fill="#0f0f0f" />
                    <path id="Path_17" data-name="Path 17" d="M5.018,8.626c.15-1.183,1.687-2.79,2.907-2.612l0,0c1.02.194,1.857,1.729,2.409,2.74.091.166.174.318.248.448a1.3,1.3,0,0,1-.218,1.627l-.127.1c-.466.37-1.071.851-.93,1.333.276.938,3.548,4.21,5.157,5.14.493.285.876-.268,1.2-.742.077-.112.152-.219.224-.31a1.275,1.275,0,0,1,1.615-.223A18.017,18.017,0,0,1,20.3,18.132a1.105,1.105,0,0,1,.234,1.459c-.527.994-2.053,2.3-3.16,2.038A18.184,18.184,0,0,1,5.105,9.348a1.3,1.3,0,0,1-.091-.691Z" transform="translate(1.338 1.68)" fill="#0f0f0f" />
                    <path id="Path_18" data-name="Path 18" d="M13.309,7a1.309,1.309,0,1,0,0,2.618,1.533,1.533,0,0,1,1.309,1.309,1.309,1.309,0,1,0,2.618,0A4.116,4.116,0,0,0,13.309,7Z" transform="translate(3.5 1.988)" fill="#0f0f0f" />
                    <path id="Path_19" data-name="Path 19" d="M9.633,31.017q.056.031.115.056c.71.305,1.587-.377,3.341-1.74l1.757-1.367A24.9,24.9,0,0,0,23.761,26.8a9.162,9.162,0,0,0,5.621-5.621,25.868,25.868,0,0,0,0-13.9A9.162,9.162,0,0,0,23.761,1.65C19.571.184,11.351.211,7.239,1.65A9.162,9.162,0,0,0,1.617,7.271a25.868,25.868,0,0,0,0,13.9A9.162,9.162,0,0,0,7.239,26.8a14.469,14.469,0,0,0,1.717.514C8.956,29.533,8.956,30.644,9.633,31.017Zm1.94-3.822V25.729a.652.652,0,0,0-.516-.638A24.149,24.149,0,0,1,8.1,24.326a6.544,6.544,0,0,1-4.015-4.015,19.986,19.986,0,0,1-.8-6.088,19.986,19.986,0,0,1,.8-6.088A6.544,6.544,0,0,1,8.1,4.12a24.707,24.707,0,0,1,7.37-.943A24.642,24.642,0,0,1,22.9,4.12a6.544,6.544,0,0,1,4.015,4.015,19.985,19.985,0,0,1,.8,6.088,19.985,19.985,0,0,1-.8,6.088A6.544,6.544,0,0,1,22.9,24.326a23.92,23.92,0,0,1-8.674,1,.658.658,0,0,0-.423.138Z" transform="translate(0 0)" fill="#0f0f0f" fill-rule="evenodd" />
                  </g>
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Skype' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <path id="skype-svgrepo-com" d="M3.727,8.5a4.773,4.773,0,0,1,8.134-3.389l.556.551.757-.2A10.92,10.92,0,0,1,26.54,18.827l-.2.757.551.556a4.773,4.773,0,0,1-6.75,6.75l-.556-.551-.757.2A10.919,10.919,0,0,1,5.46,13.173l.2-.757-.551-.556A4.753,4.753,0,0,1,3.727,8.5ZM8.5,1A7.5,7.5,0,0,0,2.652,13.2,13.647,13.647,0,0,0,18.8,29.348,7.5,7.5,0,0,0,29.348,18.8,13.647,13.647,0,0,0,13.2,2.652,7.473,7.473,0,0,0,8.5,1Zm5.648,11.359a1.991,1.991,0,0,1,1.76-.791,4.6,4.6,0,0,1,2.97.962,1.364,1.364,0,0,0,1.654-2.168,7.319,7.319,0,0,0-4.624-1.521,4.687,4.687,0,0,0-4.239,2.373,3.375,3.375,0,0,0,.105,3.363,4.6,4.6,0,0,0,2.792,1.987l2.119.571c.816.22,2.055.978,1.609,2a2.825,2.825,0,0,1-2.627,1.3A5.077,5.077,0,0,1,12.4,19.47a1.364,1.364,0,1,0-1.655,2.168,7.089,7.089,0,0,0,4.625,1.522c2.153,0,4.5-.815,5.428-2.933a3.754,3.754,0,0,0-.315-3.6c-1.047-1.615-2.851-2.082-4.6-2.534-.2-.052-.405-.1-.605-.159C14.559,13.737,13.72,13.176,14.148,12.359Z" transform="translate(-1 -1)" fill-rule="evenodd" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Snapchat' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28.147" height="30" viewBox="0 0 28.147 30">
                  <path id="snapchat-svgrepo-com" d="M9.425,4.957A8.56,8.56,0,0,1,16.214,2,8.522,8.522,0,0,1,23.02,5.162a12.153,12.153,0,0,1,2.455,7.11l.132.019.029,0c.242.035.532.078.834.136a4.389,4.389,0,0,1,3.676,2.806,2.9,2.9,0,0,1-.411,2.732,4.361,4.361,0,0,1-1.711,1.254c-.253.114-.5.211-.714.291a15.917,15.917,0,0,0,2.3,3.96,3.518,3.518,0,0,1,.2,3.631,3.562,3.562,0,0,1-2.927,2.145,18.947,18.947,0,0,0-2.556.277,7.331,7.331,0,0,0-1.422.463c-.341.141-.654.28-.991.431-.268.119-.552.246-.878.386A12.274,12.274,0,0,1,16.214,32a12.274,12.274,0,0,1-4.822-1.192c-.326-.14-.61-.266-.878-.386-.338-.15-.65-.29-.991-.431A7.328,7.328,0,0,0,8.1,29.528a18.948,18.948,0,0,0-2.556-.277,3.562,3.562,0,0,1-2.927-2.145,3.518,3.518,0,0,1,.2-3.631A15.861,15.861,0,0,0,5.128,19.49c-.191-.077-.414-.169-.641-.275a4.553,4.553,0,0,1-1.661-1.221,3.054,3.054,0,0,1-.581-2.616c.463-2.2,2.528-2.744,3.621-2.949.31-.058.611-.1.864-.136l.05-.007.171-.024A11.981,11.981,0,0,1,9.425,4.957ZM11.611,6.8C10.522,8.09,9.786,10.17,9.786,13.224v.15l-.031.147a1.782,1.782,0,0,1-1.02,1.232,3.536,3.536,0,0,1-.853.254c-.223.041-.471.076-.693.107l-.066.009c-.253.035-.494.07-.73.114-1.093.205-1.3.477-1.352.73-.038.181-.005.217.014.238l.005.006a1.852,1.852,0,0,0,.638.415c.178.083.365.159.573.242l.051.02c.181.072.4.159.588.248a2.837,2.837,0,0,1,.764.5,1.7,1.7,0,0,1,.5,1.634,16.711,16.711,0,0,1-3.089,5.937.338.338,0,0,0-.023.15,1.262,1.262,0,0,0,.133.518,1.3,1.3,0,0,0,.325.436.356.356,0,0,0,.149.086,21.75,21.75,0,0,1,2.943.321,10.049,10.049,0,0,1,2,.634c.346.143.745.32,1.131.491.27.12.535.237.772.339a9.525,9.525,0,0,0,3.7.961,9.526,9.526,0,0,0,3.7-.961c.237-.1.5-.219.772-.339.387-.172.785-.348,1.131-.491a10.046,10.046,0,0,1,2-.634,21.751,21.751,0,0,1,2.943-.321.357.357,0,0,0,.149-.086,1.3,1.3,0,0,0,.325-.436,1.262,1.262,0,0,0,.133-.518.336.336,0,0,0-.021-.148,16.714,16.714,0,0,1-3.09-5.939,1.7,1.7,0,0,1,.553-1.671,2.981,2.981,0,0,1,.782-.475c.192-.084.409-.167.6-.237l.069-.026c.217-.083.414-.159.6-.242a1.826,1.826,0,0,0,.606-.373.639.639,0,0,0-.031-.136c-.13-.4-.5-.68-1.5-.874-.228-.044-.458-.078-.7-.114l-.055-.008c-.215-.031-.457-.066-.676-.109a3.341,3.341,0,0,1-.841-.265,1.782,1.782,0,0,1-.981-1.219l-.031-.147v-.15A9.816,9.816,0,0,0,20.8,6.962a5.669,5.669,0,0,0-4.587-2.105A5.715,5.715,0,0,0,11.611,6.8Z" transform="translate(-2.167 -2)" fill-rule="evenodd" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Signal' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="31.504" height="31.504" viewBox="0 0 31.504 31.504">
                  <g id="signal-svgrepo-com" transform="translate(-15.248 -15.247)">
                    <path id="Path_20" data-name="Path 20" d="M30.64,136.4q-.339-.189-.667-.4a1.125,1.125,0,0,0-.821-.156l-3.63.707.707-3.63a1.125,1.125,0,0,0-.156-.821l-.066-.1H23.428q.238.472.509.926l-.729,3.745a1.875,1.875,0,0,0,2.2,2.2l3.745-.729a14.875,14.875,0,0,0,1.489.778Z" transform="translate(-5.829 -94.25)" stroke="#000" stroke-width="1.5" fill-rule="evenodd" />
                    <path id="Path_21" data-name="Path 21" d="M41.606,20.394a15.074,15.074,0,0,0-2.271-1.867A1.125,1.125,0,1,0,38.082,20.4,12.894,12.894,0,0,1,41.6,23.917a1.125,1.125,0,1,0,1.869-1.252,15.064,15.064,0,0,0-1.867-2.271Zm-8.118-1.9a1.125,1.125,0,1,0,.437-2.207,15.077,15.077,0,0,0-5.852,0,1.125,1.125,0,1,0,.437,2.207,12.826,12.826,0,0,1,4.978,0Zm12.224,9.58a1.125,1.125,0,1,0-2.207.437,12.831,12.831,0,0,1,0,4.978,1.125,1.125,0,1,0,2.207.437A15.072,15.072,0,0,0,45.712,28.074Zm-2.24,11.262A1.125,1.125,0,1,0,41.6,38.084a12.9,12.9,0,0,1-3.235,3.324,1.125,1.125,0,1,0,1.3,1.835,15.142,15.142,0,0,0,3.8-3.906ZM23.915,20.4a1.125,1.125,0,1,0-1.252-1.869,15.157,15.157,0,0,0-3.906,3.8,1.125,1.125,0,0,0,1.835,1.3A12.895,12.895,0,0,1,23.915,20.4Zm-5.179,7.1a1.125,1.125,0,0,0-2.164-.616,15.06,15.06,0,0,0-.546,5.019,1.125,1.125,0,1,0,2.246-.135,12.81,12.81,0,0,1,.465-4.269ZM35.116,45.427a1.125,1.125,0,0,0-.616-2.164,12.811,12.811,0,0,1-4.269.465,1.125,1.125,0,1,0-.134,2.246A15.06,15.06,0,0,0,35.116,45.427ZM19.244,35.948a1.125,1.125,0,1,0-2.074.872q.2.472.429.93h2.579a12.636,12.636,0,0,1-.934-1.8Zm6.807,6.806a12.625,12.625,0,0,1-1.8-.934V44.4q.457.23.93.429a1.125,1.125,0,1,0,.872-2.074Z" transform="translate(0)" stroke="#000" stroke-width="1.5" fill-rule="evenodd" />
                  </g>
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Telegram' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32.503" height="27.257" viewBox="0 0 32.503 27.257">
                  <path id="telegram-svgrepo-com" d="M15.84,45.77s13.269-5.429,17.87-7.34c1.764-.765,7.746-3.211,7.746-3.211s2.761-1.07,2.531,1.529c-.077,1.07-.69,4.817-1.3,8.869-.92,5.735-1.917,12-1.917,12s-.153,1.759-1.457,2.065-3.451-1.07-3.835-1.376c-.307-.229-5.752-3.67-7.746-5.352a1.446,1.446,0,0,1,.077-2.447c2.761-2.523,6.059-5.658,8.053-7.646.92-.918,1.841-3.059-1.994-.459C28.418,46.152,23.05,49.67,23.05,49.67a4.518,4.518,0,0,1-3.528.076c-2.3-.688-4.985-1.606-4.985-1.606s-1.841-1.147,1.3-2.37Z" transform="translate(-12.748 -33.748)" fill="none" stroke="#000" stroke-width="2.5" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Discord' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35.5 28.104">
                  <g id="discord-svgrepo-com" transform="translate(0 -2.5)">
                    <path id="Path_22" data-name="Path 22" d="M11.733,12.958a2.713,2.713,0,0,1-2.367,2.958A2.713,2.713,0,0,1,7,12.958,2.713,2.713,0,0,1,9.367,10,2.713,2.713,0,0,1,11.733,12.958Zm-3.286,0a1.054,1.054,0,0,0,.92,1.149,1.054,1.054,0,0,0,.92-1.149,1.054,1.054,0,0,0-.92-1.149A1.054,1.054,0,0,0,8.447,12.958Z" transform="translate(3.768 4.386)" fill="#0f0f0f" fill-rule="evenodd" />
                    <path id="Path_23" data-name="Path 23" d="M15.367,15.917a2.713,2.713,0,0,0,2.367-2.958A2.713,2.713,0,0,0,15.367,10,2.713,2.713,0,0,0,13,12.958,2.713,2.713,0,0,0,15.367,15.917Zm0-1.809a1.054,1.054,0,0,1-.92-1.149,1.054,1.054,0,0,1,.92-1.149,1.054,1.054,0,0,1,.92,1.149A1.054,1.054,0,0,1,15.367,14.108Z" transform="translate(6.998 4.386)" fill="#0f0f0f" fill-rule="evenodd" />
                    <path id="Path_24" data-name="Path 24" d="M14.772,3.736a1.479,1.479,0,0,0-1.8-1.2A23.018,23.018,0,0,0,5.144,5.676a1.479,1.479,0,0,0-.518.539A34.673,34.673,0,0,0,.973,14.987,39.554,39.554,0,0,0,0,24.687a1.479,1.479,0,0,0,.433,1.046A16.846,16.846,0,0,0,5.5,29.367,15.254,15.254,0,0,0,11.833,30.6a1.479,1.479,0,0,0,1.4-1.011l1-2.994a21.317,21.317,0,0,0,3.515.308,21.317,21.317,0,0,0,3.515-.308l1,2.994a1.479,1.479,0,0,0,1.4,1.011A15.255,15.255,0,0,0,30,29.367a16.847,16.847,0,0,0,5.067-3.634,1.479,1.479,0,0,0,.433-1.046,39.553,39.553,0,0,0-.973-9.7,34.668,34.668,0,0,0-3.653-8.771,1.479,1.479,0,0,0-.518-.539A23.02,23.02,0,0,0,22.531,2.54a1.479,1.479,0,0,0-1.8,1.2l-.559,3.355a19.125,19.125,0,0,0-4.839,0Zm9.951,23.878-.558-1.673a24.565,24.565,0,0,0,3.841-1.4,1.479,1.479,0,1,0-1.281-2.666,21.1,21.1,0,0,1-2.733,1.031,21.54,21.54,0,0,1-6.241,1.042,21.54,21.54,0,0,1-6.241-1.042A21.66,21.66,0,0,1,8.78,21.877,1.479,1.479,0,1,0,7.5,24.545a24.7,24.7,0,0,0,3.833,1.4l-.558,1.673a11.631,11.631,0,0,1-4.076-.95,13.3,13.3,0,0,1-3.741-2.6A35.336,35.336,0,0,1,3.845,15.7,31.132,31.132,0,0,1,7.019,8a18.372,18.372,0,0,1,5.1-2.191l.318,1.906a12.221,12.221,0,0,0-3.7,1.735,1.5,1.5,0,0,0-.3,2.074,1.479,1.479,0,0,0,2.064.3A8.492,8.492,0,0,1,12.29,10.9a14.683,14.683,0,0,1,5.46-1,14.682,14.682,0,0,1,5.46,1A8.489,8.489,0,0,1,25,11.824a1.479,1.479,0,0,0,2.064-.3,1.512,1.512,0,0,0-.306-2.078,12.634,12.634,0,0,0-3.7-1.73l.318-1.906A18.372,18.372,0,0,1,28.481,8a31.139,31.139,0,0,1,3.174,7.7,35.339,35.339,0,0,1,.884,8.368,13.3,13.3,0,0,1-3.741,2.6A11.631,11.631,0,0,1,24.722,27.614ZM13.312,20.99c1.634,0,2.958-1.656,2.958-3.7s-1.324-3.7-2.958-3.7-2.958,1.656-2.958,3.7S11.679,20.99,13.312,20.99Zm11.833-3.7c0,2.042-1.324,3.7-2.958,3.7s-2.958-1.656-2.958-3.7,1.324-3.7,2.958-3.7S25.146,15.249,25.146,17.292ZM13.312,18.728a1.317,1.317,0,0,1-1.149-1.437,1.317,1.317,0,0,1,1.149-1.437,1.317,1.317,0,0,1,1.149,1.437A1.317,1.317,0,0,1,13.312,18.728Zm8.875,0a1.317,1.317,0,0,1-1.149-1.437,1.317,1.317,0,0,1,1.149-1.437,1.317,1.317,0,0,1,1.149,1.437A1.317,1.317,0,0,1,22.187,18.728Z" transform="translate(0 0)" fill="#0f0f0f" fill-rule="evenodd" />
                  </g>
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Slack' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <path id="slack-svgrepo-com" d="M29.567,16a4.774,4.774,0,0,0-5.386-7.723v-2.5A4.773,4.773,0,0,0,16,2.433,4.774,4.774,0,0,0,8.277,7.818h-2.5A4.773,4.773,0,0,0,2.433,16a4.774,4.774,0,0,0,5.386,7.723v2.5A4.773,4.773,0,0,0,16,29.567a4.774,4.774,0,0,0,7.723-5.386h2.5A4.773,4.773,0,0,0,29.567,16ZM12.591,3.727a2.045,2.045,0,0,1,2.045,2.045V7.818H12.591a2.045,2.045,0,1,1,0-4.091Zm4.773,2.045a2.045,2.045,0,0,1,4.091,0v8.864H17.364Zm-2.727,8.864V10.545H5.773a2.045,2.045,0,1,0,0,4.091Zm9.545,0h2.045a2.045,2.045,0,1,0-2.045-2.045Zm2.045,2.727H17.364v4.091h8.864a2.045,2.045,0,0,0,0-4.091Zm-6.818,6.818H17.364v2.045a2.045,2.045,0,1,0,2.045-2.045Zm-4.773-6.818H10.545v8.864a2.045,2.045,0,0,0,4.091,0Zm-8.864,0H7.818v2.045a2.045,2.045,0,1,1-2.045-2.045Z" transform="translate(-1 -1)" fill="#0f0f0f" fill-rule="evenodd" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://abc.com" />

            </div>
            <div className="w-full  mt-2  border  flex items-center px-3 rounded-lg">

              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="testweb.com/" />

            </div>
          </div>}
          {items === 'Facebook' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg id="Page-1" xmlns="http://www.w3.org/2000/svg" width="15" height="30" viewBox="0 0 15 30">
                  <g id="Dribbble-Light-Preview">
                    <g id="icons">
                      <path id="facebook-_176_" data-name="facebook-[#176]" d="M339.232,7269v-13.5h4.1l.669-6h-4.768v-2.922c0-1.544.039-3.078,2.2-3.078h2.187v-4.29a24.2,24.2,0,0,0-3.779-.21c-3.968,0-6.453,2.486-6.453,7.05v3.45H329v6h4.385V7269Z" transform="translate(-329 -7239)" fill-rule="evenodd" />
                    </g>
                  </g>
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://facebook.com/username" />

            </div>

          </div>}
          {items === 'Instagram' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32.5" height="32.5" viewBox="0 0 32.5 32.5">
                  <g id="instagram-svgrepo-com" transform="translate(-4.25 -3.75)">
                    <path id="Path_10" data-name="Path 10" d="M26.929,5H14.071A8.571,8.571,0,0,0,5.5,13.571V26.429A8.571,8.571,0,0,0,14.071,35H26.929A8.572,8.572,0,0,0,35.5,26.429V13.571A8.571,8.571,0,0,0,26.929,5Z" transform="translate(0)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" fill-rule="evenodd" />
                    <path id="Path_11" data-name="Path 11" d="M14.964,19.929a5.464,5.464,0,1,1,3.864-1.6A5.464,5.464,0,0,1,14.964,19.929Z" transform="translate(5.536 5.536)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" fill-rule="evenodd" />
                    <rect id="Rectangle_38" data-name="Rectangle 38" width="3" height="3" rx="1" transform="translate(27.7 12.8) rotate(-90)" />
                    <rect id="Rectangle_39" data-name="Rectangle 39" width="1.821" height="1.821" rx="0.5" transform="translate(28.26 12.24) rotate(-90)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2.5" />
                  </g>
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://instagram.com/username" />

            </div>

          </div>}
          {items === 'Twitter' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="36.71" height="30" viewBox="0 0 36.71 30">
                  <path id="twitter-svgrepo-com" d="M24.09,2.308a7.689,7.689,0,0,1,5.249,2.005,13.429,13.429,0,0,0,4.182-1.56,6.479,6.479,0,0,1-2.9,3.557A13.463,13.463,0,0,0,34.409,5.3a13.261,13.261,0,0,1-3.287,3.331c.012.275.018.552.018.828A18.127,18.127,0,0,1,12.623,27.692,19.752,19.752,0,0,1,2.288,24.867a13.074,13.074,0,0,0,1.57.092A13.426,13.426,0,0,0,12.046,22.2a6.57,6.57,0,0,1-6.157-4.464,6.84,6.84,0,0,0,1.24.115,6.667,6.667,0,0,0,1.734-.226,6.471,6.471,0,0,1-5.286-6.3v-.084a6.7,6.7,0,0,0,2.985.808A6.394,6.394,0,0,1,3.632,6.691a6.273,6.273,0,0,1,.891-3.232,18.886,18.886,0,0,0,13.585,6.72,6.239,6.239,0,0,1-.173-1.464A6.125,6.125,0,0,1,24.09,2.308M34.409,5.3h.006M24.09,0a8.323,8.323,0,0,0-8.38,7.56A16.6,16.6,0,0,1,6.278,1.974a2.287,2.287,0,0,0-1.755-.823q-.09,0-.18.007a2.293,2.293,0,0,0-1.785,1.11,8.635,8.635,0,0,0-.682,7.424,2.315,2.315,0,0,0-.591,1.546v.084a8.663,8.663,0,0,0,2.362,5.93,2.325,2.325,0,0,0,.063,1.207A8.7,8.7,0,0,0,6.346,22.38a11.405,11.405,0,0,1-2.488.271,10.567,10.567,0,0,1-1.293-.076,2.513,2.513,0,0,0-.278-.016,2.31,2.31,0,0,0-1.21,4.267A21.986,21.986,0,0,0,12.623,30a20.074,20.074,0,0,0,15.512-6.7,21.11,21.11,0,0,0,5.3-13.546,15.519,15.519,0,0,0,2.813-3.073A2.319,2.319,0,0,0,35.722,3.4,2.32,2.32,0,0,0,34.966.961,2.283,2.283,0,0,0,32.373.755,11,11,0,0,1,29.921,1.8,10.425,10.425,0,0,0,24.09,0Z" transform="translate(0.005)" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://instagram.com/username" />

            </div>

          </div>}
          {items === 'LinkedIn' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <path id="linkedin-svgrepo-com" d="M8,2A6,6,0,0,0,2,8V26a6,6,0,0,0,6,6H26a6,6,0,0,0,6-6V8a6,6,0,0,0-6-6ZM5,8A3,3,0,0,1,8,5H26a3,3,0,0,1,3,3V26a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3Zm7.5,7.5a1.5,1.5,0,0,0-3,0v9a1.5,1.5,0,0,0,3,0Zm.75-5.25A2.25,2.25,0,1,1,11,8,2.25,2.25,0,0,1,13.25,10.25ZM17,14a1.5,1.5,0,0,1,1.23.642A5.265,5.265,0,0,1,20.75,14,5.39,5.39,0,0,1,26,19.357v5.127h0a1.5,1.5,0,0,1-3,0h0V19.357A2.393,2.393,0,0,0,20.75,17a2.64,2.64,0,0,0-2.25,1.445v6.043h0a1.5,1.5,0,0,1-3,0h0V15.533h0v0h0A1.5,1.5,0,0,1,17,14Z" transform="translate(-2 -2)" fill-rule="evenodd" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://linkedin.com/username" />

            </div>

          </div>}
          {items === 'Pinterest' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.707" height="30" viewBox="0 0 23.707 30">
                  <path id="pinterest-svgrepo-com" d="M178.806,20.793c-.8,4.131-1.837,7.11-4.731,9.18-.895-6.242,1.313-10.929,2.336-15.909-1.747-2.892.21-8.716,3.891-7.283,4.53,1.766-3.6,10.334,2.079,11.458,5.926,1.172,8.047-8.94,4.375-12.614-5.308-5.3-15.884-.806-14.237,6.715.664,3.032-1.594,3.895-1.594,3.895-1.828-.741-2-3.307-1.909-5.811.21-5.758,5.253-9.79,10.313-10.35,6.4-.706,12.4,2.313,13.232,8.243.935,6.69-2.765,14.375-9.609,13.853a12.881,12.881,0,0,1-4.145-1.376" transform="translate(-168.996 0.027)" fill-rule="evenodd" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://pinterest.com/username" />

            </div>

          </div>}
          {items === 'Tiktok' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29.264" height="32.65" viewBox="0 0 29.264 32.65">
                  <path id="tik-tok-brand-assets-video-socialnetwork-oneline-svgrepo-com" d="M30.667,10.507c-2.444.109-7.467-1.24-8-7.507H18V21.278c0,5.222-4.112,7.458-6.852,5.473-3.479-2.52-1.148-7.758,3.185-7.105V14.1C11,14.1,4,15.4,4,23.562,4,34.007,15.358,33.68,18,32.3c4.3-2.24,5.333-4.666,5.333-10.047V13.118a22.936,22.936,0,0,0,7.333,1.958" transform="translate(-2.75 -1.75)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://tiktok.com/username" />

            </div>

          </div>}
          {items === 'Image' && <div className="mt-2">
            <h1 className="text-md">{items}</h1>
            <div className="w-full    border  flex items-center px-3 rounded-lg">
              <div>
                <svg id="image-svgrepo-com" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                  <rect id="Rectangle_84" data-name="Rectangle 84" width="30" height="30" fill="none" />
                  <path id="Path_25" data-name="Path 25" d="M27,20.333v5.333A1.333,1.333,0,0,1,25.667,27H4.333A1.333,1.333,0,0,1,3,25.667V23m24-2.667v-16A1.333,1.333,0,0,0,25.667,3H4.333A1.333,1.333,0,0,0,3,4.333V23m24-2.667-7.356-4.9a1.333,1.333,0,0,0-1.336-.083L3,23" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="1.5" />
                  <circle id="Ellipse_18" data-name="Ellipse 18" cx="2" cy="2" r="2" transform="translate(7.8 9.1)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="1.5" />
                </svg>


              </div>
              <input className="appearance-none block   text-gray-700   rounded mt-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="https://tiktok.com/username" />
              <input className="appearance-none block text-gray-700 rounded" type="file" name="" id="" />
            </div>

          </div>}
        </div>)
      }
    </div>
  );
};

export default Card;