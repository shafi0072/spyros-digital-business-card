import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import Navbar from './Navbar/Navbar'

const index = ({ children }) => {
    return (
        <div className="row">
            <div className="col-md-1">
                <div className='bg-[#0077b5] w-[100%] h-[100vh] pt-[40%]'>
                    <div className='text-light flex justify-center'>
                        <CalendarTodayIcon fontSize='large' />
                    </div>
                    <div className='text-light mt-2 flex justify-center'>
                        <SettingsIcon fontSize='large' />
                    </div>
                </div>
            </div>
            <div className="col-md-11 flex">
                {children}
                <div className='mt-5  w-[60%]'>
                    <Navbar />
                </div>
            </div>
        </div>
    );
};

export default index;