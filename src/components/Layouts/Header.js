import React from 'react'

export const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full h-13 z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-6 py-3">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-7 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Interview Questions
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Admin Login
          </button>
          
        </div>
        
      </div>
    </nav>


  )
}


