import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import categories from './categories';
import { FaExclamationCircle, FaExclamationTriangle } from 'react-icons/fa';

const Category = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [currentView, setCurrentView] = useState('categories'); // 'categories', 'subcategories', 'items'

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category.hasSubcategories) {
      setCurrentView('subcategories');
    } else {
      setCurrentView('items');
    }
    window.scrollTo(0, 0);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setCurrentView('items');
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    if (currentView === 'items') {
      if (selectedCategory.hasSubcategories) {
        setCurrentView('subcategories');
      } else {
        setCurrentView('categories');
        setSelectedCategory(null);
      }
    } else if (currentView === 'subcategories') {
      setCurrentView('categories');
      setSelectedCategory(null);
    }
    window.scrollTo(0, 0);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="overflow-hidden mt-9 lg:mt-16 flex flex-col items-center">
      {/* Language switcher */}
      <div className="mb-4 flex items-center">
        <button
          onClick={() => changeLanguage(i18n.language === 'en' ? 'sq' : 'en')}
          className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-gray-100 transition-colors"
        >
          {i18n.language === 'en' ? (
            <>
              <img
                src="https://flagcdn.com/w20/al.png"
                alt="Albanian flag"
                className="w-6 h-4 object-cover"
              />
              <span className='underline underline-offset-4 cursor-pointer'>Shiko menunë në shqip</span>
            </>
          ) : (
            <>
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="English flag"
                className="w-6 h-4 object-cover"
              />
              <span className='underline underline-offset-4 cursor-pointer'>See the menu in English</span>
            </>
          )}
        </button>
      </div>

      {/* Title - Only shown in main categories view */}
      {currentView === 'categories' && (
        <p className="text-center font-cherola text-[#201E1F] max-w-3xl text-xl lg:text-xl">
          <span className='font-bold text-3xl lg:text-5xl'>{t('menu.discover')}</span> <br /> <br />
          <b className='lg:text-3xl'>{t('menu.click')}</b>
        </p>
      )}

      {currentView !== 'categories' && (
        <div className="w-full container mt-9 lg:mt-12">
          {/* Back button */}
          <button
            onClick={handleBackClick}
            className="mb-6 flex items-center text-[#8E2209] hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            {t('menu.back')}
          </button>

          {/* Title */}
          <h2 className="text-5xl font-bold font-cherola text-[#201E1F] mb-8">
            {currentView === 'subcategories'
              ? selectedCategory.title[i18n.language]
              : selectedSubcategory?.name[i18n.language] || selectedCategory.title[i18n.language]}
          </h2>

          {/* Subcategories list */}
          {currentView === 'subcategories' ? (
            <div className="grid grid-cols-1 gap-10">
              {selectedCategory.subcategories.map((subcategory, index) => (
                <div
                  key={index}
                  onClick={() => handleSubcategoryClick(subcategory)}
                  className="border-b border-[#1d2d12] p-6 hover:shadow-lg transition duration-300 flex flex-col items-start space-y-2 cursor-pointer relative"
                >
                  <h3 className="text-3xl lg:text-7xl font-bold font-cherola text-[#201E1F]">
                    {subcategory.name[i18n.language]}
                  </h3>

                  {subcategory.description && (
                    <p className="text-gray-600 text-left max-w-3xl">
                      {subcategory.description[i18n.language]}
                    </p>
                  )}

                  {/* See more arrow button */}
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1d2d12]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-10">
              {(selectedSubcategory?.items || selectedCategory.subcategories).map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#1d2d12] p-6 hover:shadow-lg transition duration-300 flex flex-col items-start space-y-2"
                >
                  <h3 className="text-3xl lg:text-7xl font-bold font-cherola text-[#201E1F]">
                    {item.name[i18n.language]}
                  </h3>

                  {item.description && (
                    <p className="text-gray-600 text-left max-w-3xl">
                      {item.description[i18n.language]}
                    </p>
                  )}

                  <span className="text-[#1d2d12] font-cherola text-5xl lg:text-7xl mt-2">
                    {item.price[i18n.language]}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {currentView === 'categories' && (
        // Categories grid
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10 mt-9 lg:mt-12 w-full container">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category)}
              className="flex flex-col justify-between rounded-2xl items-center p-4 border border-[#1d2d12] text-center hover:shadow-lg transition duration-300 ease-in-out group cursor-pointer"
            >
              {/* Icon */}
              <div className="text-[#1d2d12] mb-4 group-hover:scale-110 transition duration-300">
                {category.svg}
              </div>

              {/* Title */}
              <p className="font-bold font-cherola uppercase text-[#201E1F] tracking-[1px] text-2xl lg:text-3xl mb-4">
                {category.title[i18n.language]}
              </p>

              {/* Button at Bottom */}
              <div className="mt-auto">
                <span className="text-[#1d2d12] text-base lg:text-xl underline underline-offset-2 font-cherola group-hover:underline">
                  {t('menu.viewMore')}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Allergy notice - shown on all pages */}
      <div className="w-full container mt-6 lg:mt-16 mb-10">
        <div className="pt-6 pb-8 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-3">
            <FaExclamationCircle className="text-[#8E2209] text-xl" />
            <span className="text-[#8E2209] font-cherola font-medium text-lg lg:text-2xl">
              {i18n.language === 'en' ? "Allergy Warning:" : "Paralajmërim për alergji"}
            </span>
          </div>
          <p className="text-[#201E1F] max-w-2xl mx-auto">
            {i18n.language === 'en'
              ? "If you have any food allergies, please inform your waiter."
              : "Nëse jeni alergjik ndaj ndonjë produkti, ju lutemi të njoftoni kamarierin tuaj."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;