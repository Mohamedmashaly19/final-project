import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// import {Navbar} from "flowbite-react";

import { userContext } from '../../context/userContext';

export default function Navbar() {
  let navigate = useNavigate()

  const { userToken, setUserToken } = useContext(userContext);
  function logout() {

    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/Login');


  }

  return (
    <div>
      <nav className="bg-gray-100 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <i _ngcontent-iml-c20="" className="fa-solid fa-cart-shopping  text-green-600 text-3xl nav-icon"></i>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">fresh cart

            </span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            {userToken ? <>
              <div className='row  '>
                <div className="hidden w-full lg:me-60 md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <NavLink to="Home" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent font-normal text-gray-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="Card" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent font-normal text-gray-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Card</NavLink>
                    </li>
                    <li>
                      <NavLink to="Wish" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent font-normal text-gray-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Wish List</NavLink>
                    </li>
                    <li>
                      <NavLink to="Product" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent font-normal text-gray-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Product</NavLink>
                    </li>
                    <li>
                      <NavLink to="Catigores" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent font-normal text-gray-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Catigores</NavLink>
                    </li>
                    <li>
                      <NavLink to="Brand" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent font-normal text-gray-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Brand</NavLink>
                    </li>


                  </ul>
                </div>
                <div className='ms-11 '>
                  <ul className="font-medium flex flex-col p-4 md:p-0  mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                    <li>
                      <Link to="/card">
                        <i _ngcontent-iml-c20="" className="fa-solid fa-cart-shopping  text-2xl nav-icon"></i>
                      </Link>

                    </li>
                    <li>
                      <NavLink to="/" onClick={logout} className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent text-gray-500 md:p-0 font-normal dark:text-white md:dark:text-blue-500" aria-current="page">Log Out</NavLink>
                    </li>


                  </ul>
                </div>
              </div>
            </> :


              <>

                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


                  <li>
                    <NavLink to="Rejister" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent text-gray-500 font-normal md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Register</NavLink>
                  </li>
                  <li>
                    <NavLink to="Login" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent text-gray-500 md:p-0 font-normal dark:text-white md:dark:text-blue-500" aria-current="page">Log in</NavLink>
                  </li>


                </ul>

              </>
            }
          </div>
        </div>
      </nav>

    </div>
  )
}
