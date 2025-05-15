import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="w-full  top-0 left-0 z-50  py-1">
      <div className="container mx-auto lg:px-6 flex justify-center items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-auto w-28 lg:w-32 object-contain rounded-full"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
