import React from 'react'
import Slider from 'react-slick'




export default function MainSlider() {


  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

  }

  return (
    <div className='row justify-center py-8'>
      <div className='w-1/4  h-[450px] '>
        <Slider {...settings} className='h-[400px]' >
        <img src="https://routeegy.github.io/Ecommerce/assets/images/41nN4nvKaAL._AC_SY200_.jpg" alt="" />
        <img src="https://routeegy.github.io/Ecommerce/assets/images/XCM_Manual_1396328_4379574_Egypt_EG_BAU_GW_DC_SL_Jewelry_379x304_1X._SY304_CB650636675_.jpg" alt="" />
        <img src="https://routeegy.github.io/Ecommerce/assets/images/61cSNgtEISL._AC_SY200_.jpg" alt="" />
        </Slider>
      </div>


      <div className='w-1/4 h-full '>
        <img src="https://routeegy.github.io/Ecommerce/assets/images/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg" alt="" />
        <img src="https://routeegy.github.io/Ecommerce/assets/images/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg" alt="" />
      </div>


    </div>
  )
}
