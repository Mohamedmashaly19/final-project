import axios from 'axios';
import React from 'react'

export default function Modal({ setShoModal, brands, modelData }) {

    console.log(modelData);

    function closeModal() {
        setShoModal(false);
    }
    return (
        <div>


            <div className='modal '>
                <div className='w-1/3 mt-8 h-72 relative    bg-white rounded-2xl overflow-hidden'>
                    <svg onClick={closeModal} className="w-7 cursor-pointer h-7 float-end m-2 font-bold text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                    </svg>



                    <div className='flex justify-between mt-12   border-b-2 border-t-2'>
                        <div className='ms-4  flex  flex-wrap flex-col w-1/4'> 
                            <h2 className='mt-14 text-4xl font-semibold text-green-600 '>{modelData.name}</h2>
                            <h2 className='mt-3  float-start '>{modelData.name}</h2>
                        </div>
                        <div className=' w-2/4'>

                        <img className=' ' src={modelData.image} alt="" />
                        </div>
                    </div>





                    <button onClick={closeModal} className='btn cursor-pointer bg-gray-600 text-white px-4 py-2 rounded-lg m-3 absolute right-0 bottom-0'>close</button>
                </div>

            </div>


        </div>
    )
}
