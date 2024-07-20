import React, { useEffect, useState } from 'react'
import '../Style/Footer.css'
import img1 from '../Asseit/car_img_7jpeg.png'
import img2 from '../Asseit/car_img_8.jpeg'
import img3 from '../Asseit/car_img_9.jpeg'


function Footer() {



  const images = [img1,img2,img3]

 
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);


   

        

  return (
    <div className='footer_cnt'>

    <div className='img_cnt'>
        
    <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
        

    </div>
        
      
    </div>
  )
}

export default Footer
