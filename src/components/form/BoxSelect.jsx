import React, { useState } from 'react';

const BoxSelect = ({ amount, customStyle, textSize }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div 
    className={`relative rounded-[20px] shadow ${isSelected ? 'bg-primaryColor text-white' : isHovered ? 'bg-cyan-600 text-white' : 'bg-gray-300 text-cyan-950'} font-poppinsBold text-${textSize} text-center cursor-pointer flex items-center justify-center`}
    style={customStyle}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleClick}
  >
    <div className="w-full h-full absolute left-0 top-0 opacity-20 rounded-[20px] shadow" />
    <div className="w-full">{amount}</div>
  </div>
  );
};

export default BoxSelect;
