import React from 'react'
import './About.scss'
import img1 from '../../../src/Assets/About/1.jpg'
import img2 from '../../../src/Assets/About/2.jpg'
import img3 from '../../../src/Assets/About/3.jpg'

function About(props) {
  return (
    <div className="about">
      <div className="container">
        <div className="about__content">
          <div className="about__container text-center">
            <h1 className="about__title ">Value, not volume</h1>
            <br />
            <p className="about__slogan">
              Thank you for choosing Bluestar as your trusted online shopping destination. We are committed to
              providing you with the best possible shopping experience
            </p>
          </div>
          <div className="about__preview">
            <div className="about__img">
              <img src={img1} alt="img" />
            </div>
            <div className="about__img">
              <img src={img2} alt="img2" />
            </div>
            <div className="about__img">
              <img src={img3} alt="img3" />
            </div>
          </div>
          <div className="about__container">
            <p className=" about__letter">
              Welcome to Bluestar, your ultimate online shopping destination for fashion-forward clothing and
              accessories. Our ecommerce website is dedicated to bringing you the latest styles and trends,
              right at your fingertips.

              At Bluestar, we understand that shopping online can be daunting, which is why we have made it
              our mission to provide you with an easy and enjoyable shopping experience. Our user-friendly
              website is designed with your convenience in mind, featuring intuitive navigation, detailed
              product descriptions, and high-quality images.
            </p>

            <p className=" about__letter">
              Our selection of products is carefully curated to provide you with a wide range of options that 
              cater to different tastes and preferences. From casual wear to formal attire, we have something 
              for everyone. We work with top-notch suppliers to ensure that all our products are of the highest
               quality and meet our strict standards.

              We believe in making fashion accessible to everyone, which is why we offer competitive prices 
              without compromising on quality. We also offer fast and reliable shipping, so you can get your 
              order delivered to your doorstep in no time.
            </p>
            <p className="about__author">From BLUESTAR Team with love.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 