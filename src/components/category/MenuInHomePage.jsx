import React from 'react';
import firstImage from "../../assets/product-1.jpg";
import secondImage from "../../assets/product-2.jpg";
import thirdImage from "../../assets/product-3.jpg";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MenuInHomePage = () => {
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smoth' });
  };

  return (
    <div className='w-full py-16 lg:pt-24 px-0'>
      <div className='container mx-auto'>
        {/* Decorative Header */}
        <div className='flex flex-col items-center mb-20'>
          <div className='relative mb-12'>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-cherola text-[#201E1F] text-center tracking-tight'>
              {t('menu.culinare')}
            </h2>
            <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-[#8E2209]'></div>
          </div>
          <p className='text-black max-w-2xl text-center font-cherola lg:text-2xl'>
            {t('menu.culinareDescription')}
          </p>
        </div>

        {/* Image Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20'>
          {/* Main Featured Image */}
          <div className='lg:col-span-2 relative group overflow-hidden aspect-[4/3]'>
            <img
              className='w-full h-full object-cover transform group-hover:scale-105 transition duration-700 rounded-lg'
              src={firstImage}
              alt='Featured culinary creation'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
          </div>

          {/* Secondary Images Stack */}
          <div className='flex flex-col gap-8'>
            <div className='relative group overflow-hidden aspect-square'>
              <img
                className='w-full h-full object-cover transform group-hover:scale-105 transition duration-700 rounded-lg'
                src={secondImage}
                alt='Artistic cuisine'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
            <div className='relative group overflow-hidden aspect-square'>
              <img
                className='w-full h-full object-cover transform group-hover:scale-105 transition duration-700 rounded-lg'
                src={thirdImage}
                alt='Gourmet presentation'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className='flex flex-col items-center'>
          <Link
            onClick={handleClick}
            to="/"
            className='
              px-12 py-4
              border border-[#201E1F]
              text-[#201E1F]
              hover:bg-[#222]
              hover:text-white
              transition-colors
              duration-300
              text-sm
              tracking-widest
              font-medium
              relative
              group
              overflow-hidden
            '
          >
            <span className='relative z-10'>EXPLORE OUR MENU</span>
            <span className='
              absolute
              inset-0
              bg-[#222]
              transform
              -translate-y-full
              group-hover:translate-y-0
              transition-transform
              duration-300
              z-0
            '></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuInHomePage;