import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function CatogorySlider() {

  const [CatogorySlider, setCatogorySlider] = useState([]);

  function getCatogorySlider(){
    axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    .then((data)=>{setCatogorySlider(data.data.data) })
    .catch((err)=>
    console.log(err))
  }

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
useEffect(() => {
  getCatogorySlider()
}, [])

  return (<>
    <div className='catigory mx-auto'>
      <Slider {...settings}>
     {CatogorySlider.map((catigory) => ( 
       <div className=' '>
        <img className=' h-60 w-full' src={catigory.image} alt="" />
        <h2 className='font-bold text-2xl'>{catigory.name}</h2>
      </div>
     ))}
    </Slider>



    </div>

    <form className=" mx-auto w-3/4  mt-10">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-green-900 border rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
    </div>
</form>
     </>
  )
}
