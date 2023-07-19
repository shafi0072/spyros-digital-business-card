import { userContext } from '@/src/Sotrage/ContextApi';
import Navigation from '@/src/components/core/Navigation/Navigation';
import React, { useContext } from 'react';


const Page1 = () => {
  const {infos, setInfo} = useContext(userContext)
  const handleOnChange = (e) => {
    const newValue = {...infos}
    newValue[e.target.name] = e.target.value
    setInfo(newValue)
  }
  console.log({infos})
  return (
   
    <div className='mt-8 px-[10%] '>
      <div className='border-b w-[100%]'>
        <p className="text-md font-bold
        mb-2">Peronal</p>
      </div>


      <form className='mt-3'>
        <div className="grid gap-6 mb-6 w-1/2">
          <div>
            <label htmlFor="Prefix" className="block mb-2 text-sm font-medium text-gray-900 ">Prefix</label>
            <input type="text" onChange={handleOnChange} name="Prefix" id="Prefix" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
            <input type="text" onChange={handleOnChange} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name='first_name' required />
          </div>
          <div>
            <label htmlFor="Middle_Name" className="block mb-2 text-sm font-medium text-gray-900 ">Middle Name </label>
            <input type="text" onChange={handleOnChange} id="Middle_Name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " name='Middle_Name' required />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
            <input type="text" onChange={handleOnChange} id="last_name" name='last_name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="Suffix" className="block mb-2 text-sm font-medium text-gray-900 ">Suffix</label>
            <input type="text" onChange={handleOnChange} id="Suffix" name='Suffix' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="Accreditations" className="block mb-2 text-sm font-medium text-gray-900 ">Accreditations</label>
            <input type="text" onChange={handleOnChange} id="Accreditations" name='Accreditations' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="Preferred_Name" className="block mb-2 text-sm font-medium text-gray-900 ">Preferred Name</label>
            <input type="text" onChange={handleOnChange} id="Preferred_Name" name='Preferred_Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>

          <div>
            <label htmlFor="Maiden_Name" className="block mb-2 text-sm font-medium text-gray-900 ">Maiden Name</label>
            <input type="text" onChange={handleOnChange} id="Maiden_Name" name='Maiden_Name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="Pronouns" className="block mb-2 text-sm font-medium text-gray-900 ">Pronouns</label>
            <input type="text" onChange={handleOnChange} id="Pronouns" name='Pronouns' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
        </div>




        
    
      <div className='border-b  mt-3'>
        <p className="text-md font-bold
        mb-2">Affiliation</p>
      </div>

        <div className="grid gap-6 mb-6 w-[50%]">
          
          <div>
            <label htmlFor="Title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
            <input type="text" onChange={handleOnChange} id="Title" name='Title' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="Department" className="block mb-2 text-sm font-medium text-gray-900 ">Department</label>
            <input type="text" onChange={handleOnChange} id="Department" name='Department' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="Company" className="block mb-2 text-sm font-medium text-gray-900 ">Company</label>
            <input type="text" onChange={handleOnChange} id="Company" name='Company' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "  required />
          </div>
          <div>
            <label htmlFor="Pronouns" className="block mb-2 text-sm font-medium text-gray-900 ">Headline</label>
            <textarea onChange={handleOnChange} id="message" name='Headline' rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "></textarea>
          </div>
        </div>




        <div className='mb-3'>
        <button type="submit" className="mr-2 hover:bg-blue-800 hover:text-white focus:ring-4 border border-[#0277B5] focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Cancel</button>
        <button type="submit" className="text-white bg-[#0277B5] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">save</button>
        </div>
      </form>
    </div>
  );
};

export default Page1;