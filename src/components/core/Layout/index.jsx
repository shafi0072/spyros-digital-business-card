import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import Navigation from '../Navigation/Navigation';


const index = ({ children }) => {
    return (
        <div className="flex">
            <div className="col-md-1 w-[5%] h-[100] bg-[#0077b5]">
                <div className='  pt-[40%]'>
                    <div className='text-white flex justify-center'>
                        <CalendarTodayIcon fontSize='large' />
                    </div>
                    <div className='text-white mt-2 flex justify-center'>
                        <SettingsIcon fontSize='large' />
                    </div>
                </div>
            </div>
            <div className="">
                <div className=' flex '>
                    <div className=" px-3 h-[100]  bg-[#F7FAFC]">
                        <div className='mt-4 border-b-[15px] border-[#0077B5]'>
                            <img className='w-[100%]' src="https://www.drkimberlyhenry.com/wp-content/uploads/2017/12/profile-of-a-man-showing-a-strong-jaw-300x300.jpg" alt="" />
                        </div>
                        <div className='mt-3 border-l-2 border-[#0077B5] pl-4'>
                            <h1 className='text-xl font-bold'>Dr. Spyridon Georgios <br /> Poulis Suffix (Sotos) <span className='uppercase text-sm font-normal'>phd</span></h1>

                            <p className='mt-3 uppercase '>CEO</p>
                            <p className='text-md font-bold text-[#0077B5]'>Marketing</p>
                            <p className=' uppercase '>Company Name</p>
                        </div>
                        <div className="mt-5 w-[300px]">
                            <p className='italic text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit.  Qui ipsa, saepe eos, similique culpa ad accusamus rerum praesentium molestiae, corrupti dolore dignissimos suscipit ea. Maiores tempora modi nobis iusto corporis.</p>
                        </div>
                    </div>
                    <div className="ml-2 w-[100%]">
                        <Navigation children= {children}/>
                    </div>
                </div>
               

            </div>
        </div>
    );
};

export default index;