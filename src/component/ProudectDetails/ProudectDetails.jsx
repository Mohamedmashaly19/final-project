
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick';
import { CardContext } from './../../context/cardContext';
import  { useContext } from 'react'

export default function ProudectDetails() {

const { addToCard } = useContext(CardContext);

async function addToDetils(id) {
   await addToCard(id);
}



  const [details, setDetails] = useState({})
  let { id } = useParams()



  function getDetails() {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
      .then((data) => (setDetails(data.data.data)))
  }


  useEffect(() => {
    getDetails()
  }, []);



  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    

  }


  return (

    <div className="container lg:mt-20">
      <div className='row '>


        <div className='lg:w-1/4    '>

          <Slider {...settings}>
            {details?.images?.map((image) => ( 
              <img src={image} className='w-full object-contain'  alt="" />
                
            
            ))}

          </Slider>

        </div>


        <div className='lg:w-3/4 my-auto py-24 px-10'>
          <h1 className='font-bold text-3xl'>{details.title}</h1>
          <p className='my-4'>{details.description}</p>
          <div className='row justify-between '>
            <p>{details.price} EGP</p>
            <div className='row '>
              <i className='fa-solid fa-star text-yellow-400  m-1'></i>
              <p> {details.ratingsAverage}</p>
            </div>
          </div>
          <div className='row  justify-between mt-5'>
            <button 
            onClick={() => {addToDetils(details.id)}}
            type="button" className="w-3/4 text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> + Add</button>
            <i className="fa-solid fa-heart h3 text-2xl"></i>
          </div>
        </div>

      </div>


    </div>

  )
}
