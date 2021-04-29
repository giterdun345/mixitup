import React from 'react';
import { Link } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCocktail } from '@fortawesome/free-solid-svg-icons'
const Header = ()=>{
  return(
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href='#' class="flex flex-nowrap order-first title-font font-medium items-center text-gray-900 lg:items-center justify-center mb-4 md:mb-0">
          <span class=" ml-3 font-logo mobile:text-4xl text-6xl ">
              <FontAwesomeIcon  icon={faCocktail} className='p-2' />          
              MixItUp
          </span>
        </a>
        <nav class="flex flex-nowrap items-center justify-end text-base mx-auto mt-9 mobile:mt-1">
          <a href='#' class="mr-9 hover:text-gray-900">First Link</a>
          <a href='#' class="mr-9 hover:text-gray-900">Second Link</a>
          <a href='#' class="mr-9 hover:text-gray-900">Third Link</a>
        </nav>
        <div class=" inline-flex mx-auto mt-5 justify-center">    
          <div class="pt-2 relative mx-auto text-gray-600">
            <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                   type="search" name="search" placeholder="Search"/>
          <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          </button>
      </div>
















        </div>
      </div>
    </header>
  )
}

export default Header;