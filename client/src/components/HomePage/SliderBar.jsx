import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SliderBar() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
  return (
    <div >
      <Slider {...settings} className="overflow-x-clip">
        <div>
          <div className='relative z-0  '>
            <img src="img-6.jpeg" className='h-60 w-full object-cover rounded-xl ' />
            <div className='w-full flex flex-wrap justify-center items-center'>
              <h1 className='z-10 px-8 -mt-60 text-white font-bold text-sm sm:text-xl'>𝐀 𝐥𝐢𝐛𝐫𝐚𝐫𝐲 𝐢𝐬 𝐚 𝐭𝐫𝐞𝐚𝐬𝐮𝐫𝐞 𝐭𝐫𝐨𝐯𝐞 𝐰𝐡𝐞𝐫𝐞 𝐭𝐡𝐞 𝐩𝐚𝐬𝐭, 𝐩𝐫𝐞𝐬𝐞𝐧𝐭, 𝐚𝐧𝐝 𝐟𝐮𝐭𝐮𝐫𝐞 𝐜𝐨𝐧𝐯𝐞𝐫𝐠𝐞.</h1> 
            </div>
          </div>
          
        </div>

        <div>
        <div className='relative z-0 mx-2'>
            <img src="slider2.jpg" className='h-60 w-full object-cover rounded-xl ' />
            <div className='flex flex-wrap justify-center items-center'>
              <h1 className='z-10 px-8 -mt-60 text-white font-bold text-sm sm:text-xl'>𝐋𝐢𝐛𝐫𝐚𝐫𝐢𝐞𝐬 𝐚𝐫𝐞 𝐭𝐡𝐞 𝐥𝐢𝐠𝐡𝐭𝐡𝐨𝐮𝐬𝐞𝐬 𝐢𝐧 𝐭𝐡𝐞 𝐬𝐞𝐚 𝐨𝐟 𝐤𝐧𝐨𝐰𝐥𝐞𝐝𝐠𝐞.</h1>
            </div>
          </div>
        </div>

        <div>
        <div className='relative z-0 '>
            <img src="slider1.jpg" className='h-60 w-full object-cover rounded-xl ' />
            <div className='flex flex-wrap justify-center items-center'>
              <h1 className='z-10 px-8 -mt-60 text-white font-bold text-sm sm:text-xl'>𝐀 𝐥𝐢𝐛𝐫𝐚𝐫𝐲 𝐢𝐬 𝐧𝐨𝐭 𝐣𝐮𝐬𝐭 𝐚 𝐛𝐮𝐢𝐥𝐝𝐢𝐧𝐠 𝐟𝐢𝐥𝐥𝐞𝐝 𝐰𝐢𝐭𝐡 𝐛𝐨𝐨𝐤𝐬, 𝐛𝐮𝐭 𝐚 𝐬𝐚𝐧𝐜𝐭𝐮𝐚𝐫𝐲 𝐟𝐨𝐫 𝐭𝐡𝐞 𝐬𝐨𝐮𝐥. </h1>
            </div>
          </div>
        </div>

        <div>
        <div className='relative z-0 mx-2'>
            <img src="slider-4.jpeg" className='h-60 w-full object-cover rounded-xl ' />
            <div className='flex flex-wrap justify-center items-center'>
              <h1 className='z-10 px-8 -mt-60 text-white font-bold text-sm sm:text-xl'>𝐈𝐧 𝐚 𝐥𝐢𝐛𝐫𝐚𝐫𝐲, 𝐨𝐧𝐞 𝐜𝐚𝐧 𝐟𝐢𝐧𝐝 𝐭𝐡𝐞 𝐤𝐞𝐲 𝐭𝐨 𝐮𝐧𝐥𝐨𝐜𝐤 𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐞 𝐰𝐨𝐫𝐥𝐝𝐬</h1>
            </div>
          </div>
        </div>

        
      </Slider>
    </div>


   


  );
}