import React, { useContext } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import Navigation from '../Navigation/Navigation';
import { userContext } from '@/src/Sotrage/ContextApi';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';

const index = ({ children }) => {
    const { infos, design, color, profileImage, logoImage } = useContext(userContext)
    console.log(`bg-[${color.toString()}]`)
    return (
        <div className="flex">
            <div className={`col-md-1 fixed left-0  w-[5%] h-[100%]`} style={{ background: '#0077B5' }}>
                <div className='  pt-[40%]'>
                    <div className='text-white flex justify-center'>
                        <CalendarTodayIcon fontSize='large' />
                    </div>
                    <div className='text-white mt-2 flex justify-center'>
                        <SettingsIcon fontSize='large' />
                    </div>
                </div>
            </div>
            <div className="w-[95%] h-full ml-[5%] ">
                <div className=' flex '>
                    <div className="fixed   top-8 left-[7%] px-3  mt-8">
                        {design === 'classic' && <div className='mt-4 relative'>
                            <div className='absolute bottom-[0px] top-[56%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 381 88.28">
                                    <path id="wave" d="M0,25.9V55.406c70.325,43.351,128.033,45.974,213.535-5.027S340.019,6.009,381,17.739v-7.65C286.9-26.122,210.5,45.427,151.305,63.278S52.111,68.378,0,25.9Z" transform="translate(0 0)" fill={color} />
                                </svg>
                            </div>
                            <div className='absolute bottom-[0px] top-[90%] left-[0%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="32.781" viewBox="0 0 96 32.781">
                                    <path id="wave-left" d="M0,35.773V68.554H96l-.032-1.475C63.791,67.267,33.386,56.325,0,35.773Z" transform="translate(0 -35.773)" fill="#fff" />
                                </svg>

                            </div>
                            <div className='absolute bottom-[0px] right-[0px] left-[12%] top-[78%]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="285" height="70" viewBox="0 0 285 81.75">
                                    <path id="wave-right" d="M300.742,6.114c-30.018-.329-66.667,9.2-121,41.617C136.118,73.767,99.61,86.065,65.025,86.281H65v1.575H350V14.529C334.376,10.055,318.753,6.312,300.742,6.114Z" transform="translate(-65 -6.106)" fill="#fff" />
                                </svg>

                            </div>
                            <div className={`w-[300px] h-[300px] `} style={{ background: color }}>
                                <img style={{ maxHeight: '100%', maxWidth: '100%', width: '100%' }} src={profileImage && URL.createObjectURL(profileImage)} alt="" />
                            </div>
                            <div className={`absolute w-[150px] -bottom-[22px] right-0 mt-5`} >
                                {logoImage && <img className='coverImage' src={logoImage && URL.createObjectURL(logoImage)} alt="" />}
                            </div>
                        </div>}
                        {design === 'flat' && <div className='mt-4 '>
                            <div className={`w-[300px] h-[300px] pb-5`} style={{ background: color }}>
                                <img style={{ maxHeight: '100%', maxWidth: '100%', width: '100%' }} src={profileImage && URL.createObjectURL(profileImage)} alt="" />
                            </div>
                        </div>}
                        {design === 'flat' && <div className={`w-[300px] mt-5`} >
                            {logoImage && <img className='coverImage' src={logoImage && URL.createObjectURL(logoImage)} alt="" />}
                        </div>}
                        <div className='h-[200px] overflow-y-auto'>
                        <div className={`mt-3  pl-4`} style={{ borderLeft: design !== "flat" && ` 2px solid ${color}` }}>
                            <h1 className='text-xl font-bold'>{infos?.Prefix && infos?.Prefix + '.'} {infos?.first_name} {infos?.Middle_Name}  <br /> {infos?.last_name} {infos?.Suffix}  {infos?.Maiden_Name && `(${infos?.Maiden_Name})`} <span className='uppercase text-sm font-normal'>{infos?.Accreditations}</span></h1>
                            <p className='mt-3 uppercase '>{infos?.Title}</p>
                            <p className='text-md font-bold' style={{ color: color }}>{infos?.Department}</p>
                            <p className=' uppercase '>{infos?.Company}</p>
                        </div>
                        <div className="mt-5 w-[300px]">
                            <p className='italic text-sm'> {infos?.Headline}</p>
                        </div>
                        <div className="mt-5 w-[300px]">
                            {infos?.Preferred_Name && <p className='italic text-sm text-gray-400'>   <MarkUnreadChatAltIcon size='small' /> Goes by {infos?.Preferred_Name} (He/Him)</p>}
                        </div>
                        </div>
                    </div>
                    <div className=" ml-[30%] w-full ">
                        <Navigation children={children} />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default index;