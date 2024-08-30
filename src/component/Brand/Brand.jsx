import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import Loder from '../Loder/Loder';

export default function Brand() {

  const [showModal, setShoModal] = useState(false);

  function handllModal() {


    setShoModal(true);
  }
  const [modelData, setModelData] = useState([])


  const [brands, setBrands] = useState([]);


  function getModalData(id) {

    axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
      .then((data) => {
       
        setModelData(data.data.data);
      })
  }


  function getBrand() {

    axios.get('https://ecommerce.routemisr.com/api/v1/brands').then((data) => {
      setBrands(data.data.data);
      // console.log(data.data.data);


    })
  }



  useEffect(() => {

    getBrand()
  }, [])


  return (
    <div className='container mt-6'>
      <h1 className='text-green-500 text-4xl font-semibold my-8 text-center '>All Brands</h1>
      <div className="row">


        {brands.length > 0 ?
        brands.map((brand) => (
          <div onClick={() => (handllModal(), getModalData(brand._id))} className="md:w-1/4 p-2 ">
            <div className="inner border-2 rounded-xl  ">

              <img src={brand.image} alt="" />
              <h2 className='my-8 text-center'>{brand.name}</h2>
              
            </div>
          </div>

        )): <Loder/>
        
        }

      </div>
      {showModal && <Modal setShoModal={setShoModal} brands={brands} modelData={modelData} />}








    </div>
  )
}
