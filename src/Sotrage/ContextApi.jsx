import React, { createContext, useState } from 'react';

export const userContext = createContext()

const ContextApi = ({children}) => {
  const [color, setColor] = useState('#0077B5') 
  const [profileImage, setProfileImage] = useState(null)
  const [logoImage, setLogoImage] = useState(null)
  const [design, setDesign] = useState('classic')
  const [infos, setInfo] = useState({})
  const value = {
    color,
    profileImage,
    logoImage,
    design,
    infos,
    setColor,
    setProfileImage,
    setLogoImage,
    setDesign,
    setInfo
  }
  return (
    <userContext.Provider value={value}>
      {children}
    </userContext.Provider>
  );
};

export default ContextApi;