// import React, {  useEffect, useState } from 'react'
import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import Loder from '../Loder/Loder';
import { CardContext } from '../../context/CardContext';
import { Link } from 'react-router-dom';





export default function Wish() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])

  function getLoggedCard() {
    setIsLoading(true)
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers: { token: localStorage.getItem("userToken") }
      })
      .then(response => {
        setProducts(response?.data?.data?.products)
        setIsLoading(false)
      })
      .catch(error => { console.log(error); })
  }

  function removeProduct(productId) {
    setIsLoading(true)

    return axios.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        headers: { token: localStorage.getItem("userToken") }
      }
    )
      .then((response) => {
        console.log(response); setIsLoading(false)

      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getLoggedCard()
  }, [])


  return (
    <div className='mt-20'>
      <div className='container py-7 bg-gray-100 rounded-md'>
        <h1 className='ms-4 mb-2 px-7 text-3xl font-semibold'>My Wish List</h1>
        <div className="row justify-between">
          <div>
            <h4 className='text-2xl ms-9'>total price :{ }</h4>
          </div>
          <div>
            <Link to="/CheckOut" className='btn p-3 bg-blue-500 ms-40 text-white  me-14 rounded-lg'>check out</Link>


            <h4 className=' me-9 mt-4 text-2xl'>total number of items :<span className='text-green-400 ms-2'>{products.length}</span> </h4>
          </div>
        </div>
        <div className='row ms-6'>
          {isLoading && <Loder />}

          {
            products.map((prdt) => (<>

              <div className='flex justify-between w-full items-center   border-b-2 '>
                <div className='flex  items-center  '>

                  <div className='w-44 m-5'>
                    <img className='w-full ' src={prdt.product?.imageCover} alt="" />

                  </div>
                  <div>
                    <h6 className='font-bold my-2'>{prdt.product?.category.name}</h6>
                    <p>{prdt.price} EGp</p>
                    <button onClick={async () => {
                      await removeProduct(prdt.product?.id)?.then(() => getLoggedCard())
                    }
                    }> Remove
                      <i _ngcontent-rkc-c24="" className="fa fa-trash ms-2 text-red-600"></i>
                    </button>
                  </div>
                </div>

                <div className=' me-7'>
                  <button className='border me-2 px-2 rounded-lg  outline-8 border-green-500 b'>+</button>
                  <span>1</span>
                  <button className='border  px-2.5 rounded-lg  outline-8 border-green-500 ms-3'>-</button>
                </div>

              </div>


            </>

              // <ProdctItem prdt={prdt} />
            ))


          }
        </div>
      </div>
    </div>
  )
}
