import React from 'react';
import logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
      <div className="flex flex-col items-center">
        <img className="w-[470px]" src={logo} alt="" />
        <p className="text-[#706f6f] text-[18px] font-normal">
          Journalism Without Fear or Favour
        </p>
        <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
      </div>
    );
};

export default Header;