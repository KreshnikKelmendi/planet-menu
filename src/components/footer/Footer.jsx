import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-[#1d2d12] text-white pt-16 pb-8 px-4 overflow-hidden rounded-lg">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-footer bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16">
          {/* Logo/Brand Section */}
          <div className="mb-10 lg:mb-0 text-center lg:text-left">
            <h2 className="text-5xl font-cherola tracking-wider mb-3">PLANET RESORT</h2>
            <p className="text-gray-300 lg:text-2xl font-cherola">Shijoni shijen e kuzhinës autentike në Planet Resort</p>
            <div className="mt-6">
              <a 
                href="https://planet-gjilan.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-red-500 transition-colors font-cherola duration-300 text-2xl"
              >
                www.planet-gjilan.com
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-medium mb-6 text-gold-500 font-cherola">Connect With Us</h3>
            <div className="flex space-x-8">
              <a 
                href="https://www.instagram.com/resortplanet/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#E1306C] transition-all duration-500 transform hover:-translate-y-1"
                aria-label="Instagram"
              >
                <FaInstagram className="w-7 h-7" />
              </a>
              <a 
                href="https://www.facebook.com/PlanetGjilan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#3b5998] transition-all duration-500 transform hover:-translate-y-1"
                aria-label="Facebook"
              >
                <FaFacebook className="w-7 h-7" />
              </a>
              <a 
                href="https://www.tiktok.com/@resortplanet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#69C9D0] transition-all duration-500 transform hover:-translate-y-1"
                aria-label="TikTok"
              >
                <FaTiktok className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <div className="pt-12 flex flex-col items-center">
          <h3 className="text-xl font-medium mb-6 text-gold-500 font-cherola">Enjoyed your experience?</h3>
          <a
            href="https://www.google.com/maps/place/Resort+Planet/@42.4875823,21.5389916,17z/data=!3m1!4b1!4m9!3m8!1s0x1354ed8e49c836bd:0xd09285b16f262f45!5m2!4m1!1i2!8m2!3d42.4875823!4d21.5389916!16s%2Fg%2F1tfv790j?entry=ttu&g_ep=EgoyMDI1MDUxMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-10 py-4
              bg-transparent
              border-2 border-gold-500
              text-gold-500
              hover:bg-gold-500
              hover:text-black
              transition-all
              duration-500
              rounded-sm
              text-base
              tracking-widest
              font-medium
              relative
              overflow-hidden
              group
              shadow-lg
              hover:shadow-gold-500/30
            "
          >
            <span className="relative z-10 flex items-center">
              LEAVE US A REVIEW
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="
              absolute
              inset-0
              bg-gold-500
              transform
              scale-x-0
              group-hover:scale-x-100
              transition-transform
              duration-500
              origin-left
              z-0
            "></span>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-gray-400 text-2xl font-cherola">
          <p>© {new Date().getFullYear()} Planet Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;