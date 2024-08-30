import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loder from '../Loder/Loder'

export default function Catigores() {

  const [catigory, setCatigory] = useState([])
  function getCatigory() {
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then((data) => setCatigory(data.data.data))
  }

  useEffect(() => {
    getCatigory();
  }, [])





return (
  <div>

    <div className='container  mt-5'>
      <div className="row flex flex-nowrap">
        
        {catigory.length > 0?
        catigory.map((item) => (

          <div className=' w-1/3 inner   '>

            <div className='m-4 border-2'>

              <img className='w-full  h-72' src={item.image} alt="" />
              <h1 className='text-center my-5 font-semibold text-3xl text-green-700'>{item.name}</h1>
            </div>

          </div>

        )):<Loder/>
        }
      </div>
    </div>

  </div>
)
}
