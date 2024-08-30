import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { CardContext } from '../../context/cardContext';

export default function ProdctItem({ prdt }) {
  const { addToCard } = useContext(CardContext);
  const [dataWish, setDataWish] = useState([]);
  const wishIds = dataWish?.map((item) => item?.id)
  function wishData() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
        headers: { token: localStorage.getItem("userToken") },
      })
      .then((data) => {
        console.log();
        setDataWish(data.data.data);
      });
  }

  function ToggleWishlist(productId) {
    if (wishIds?.includes(productId)) {
      axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers: { token: localStorage.getItem('userToken'), }
      }
      ).then(() => {
        wishData()
        toast.success("It has been successfully remove", {
          position: 'top-right',
          className: 'p-2 text-2xl ',
          icon: '😅'
        })

      })
    } else {
      axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
        productId,
      }, {
        headers: { token: localStorage.getItem('userToken'), }
      }
      ).then(() => {
        wishData()

        toast.success("It has been successfully added", {
          position: 'top-right',
          className: 'p-2 text-2xl ',
          icon: '❤️'
        })

      })
    }
  }



  return (
    <div className=' relative w-full p-4 md:w-1/2 lg:w-1/4 inner  overflow-hidden'>
      <Link
        to={`/ProudectDetails/${prdt._id}`} className='' key={prdt._id}>
        <img src={prdt.imageCover} alt="" />
        <p className='text-green-500'>{prdt.title.split(' ').slice(0, 3).join(' ')}</p>
        <h6 className='font-bold my-2'>{prdt.category.name}</h6>
        <div className='flex justify-between'>
          <p>{prdt.price} EGp</p>
          <div className='row'>
            <i className='fa-solid fa-star  text-yellow-400 p-1'></i>
            <p>{prdt.ratingsAverage}</p>
          </div>
        </div>
      </Link>
      <i id='heart' onClick={() => {
        ToggleWishlist(prdt._id)
      }
      } className={`fa-solid  cursor-pointer fa-heart h3 text-2xl float-end mt-2 ${wishIds?.includes(prdt.id) && "text-red-500"}`}></i>
      <button
        onClick={() => {
          addToCard(prdt.id);
          toast.success("It has been successfully added", {
            position: 'top-right',
            className: 'p-2 text-2xl ',
            icon: '��️'
          })
        }}
        type="button" className="w-full mt-2 m-auto home-btn text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"> + Add</button>

    </div>
  )
}
