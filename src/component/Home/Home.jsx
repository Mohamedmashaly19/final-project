import React from 'react'
import MainSlider from './../MainSlider/MainSlider';
import CatogorySlider from './../CatogorySlider/CatogorySlider';
import Products from './../Products/Products';

export default function Home() {
  return (<>

    <div className='container'>
      <MainSlider />
    </div>

      <CatogorySlider />

    <div className='container'>
      <Products />

    </div>

  </>
  )
}
