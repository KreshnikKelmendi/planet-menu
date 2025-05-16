import React from 'react'
import categories from './categories'
import { useTranslation } from 'react-i18next';

const FirstCategory = ({handleCategoryClick}) => {
      const { t, i18n } = useTranslation();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10 mt-9 lg:mt-12 w-full container">
          {categories?.map((category, index) => (
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
  )
}

export default FirstCategory