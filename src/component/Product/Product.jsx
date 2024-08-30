import React from 'react'
import Products from '../Products/Products'

export default function Product() {
  return (<>

    <div className=' mt-8 container'>
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <input type="search" id="default-search" className="block mb-11 w-full p-4 ps-10 text-sm text-green-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />

      <Products />
    </div>
  </>
  )
}
