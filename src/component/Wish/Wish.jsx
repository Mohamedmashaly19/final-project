import axios from 'axios';
import { useEffect, useState } from 'react'
import Loder from '../Loder/Loder';





export default function Wish() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function removeProduct(productId) {
    setIsLoading(true)

    return axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
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
  function getProudects() {
    axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',
      {
        headers: { token: localStorage?.getItem("userToken") }
      })
      .then((data) => {
        setProducts(data.data.data);
      })
      .catch(() => {
        console.log("errro");
      })
  }
  useEffect(() => {
    getProudects();
  }, []);



  return (
    <div className='mt-20'>
      <div className='container py-7 bg-gray-100 rounded-md'>
        <h1 className='ms-4 mb-2 px-7 text-3xl font-semibold'>My Wish List</h1>
        <div className='row ms-6'>
          {isLoading && <Loder />}
          {
            products.length > 0 ?
              products.map((prdt) => (<>

                <div className='flex justify-between w-full items-center   border-b-2 '>

                  <div className='flex  items-center  '>

                    <div className='w-44 m-5'>
                      <img className='w-full ' src={prdt.imageCover} alt="" />

                    </div>
                    <div>
                      <h6 className='font-bold my-2'>{prdt.category.name}</h6>
                      <p>{prdt.price} EGp</p>



                      <button onClick={async () => {



                        await removeProduct(prdt?.id)?.then(() => getProudects())
                      }
                      }> Remove
                        <i _ngcontent-rkc-c24="" className="fa fa-trash ms-2 text-red-600"></i>
                      </button>

                    </div>
                  </div>

                  <div className=' me-7'>
                    <button className='border p-3 rounded-lg  outline-8 border-green-500'>addToCard</button>
                  </div>

                </div>


              </>

                // <ProdctItem prdt={prdt} />
              )) :
              <Loder />

          }
        </div>
      </div>
    </div>
  )
}
