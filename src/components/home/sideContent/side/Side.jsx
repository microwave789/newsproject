import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"


const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
  return (
    <>
      <Heading title='Хабардар болыңыз' />
      <SocialMedia />

      <Heading title='Бізге жазылыңыз' />

      <section className='subscribe'>
        <h1 className='title'>Жаңа мақаламаларға жазылыңыз</h1>
        <form action=''>
          <input type='email' placeholder='Email Address...' />
          <button>
            <i className='fa fa-paper-plane'></i> САҚТАП АЛ
          </button>
        </form>
      </section>

      <section className='banner'>
        <img src='./images/sidebar-banner-new.png' alt='' width='300px' />
      </section>

      <Tpost />

      <section className='catgorys'>
        <Heading title='Категориялар' />
        {/*<div className='items'>{allCat}</div>*/}
        {catgeory.map((val) => {
          return (
            <div className='category category1'>
              <span>{val}</span>
            </div>
          )
        })}
      </section>

      <section className='gallery'>
        <Heading title='Галлерея' />
        <Slider {...settings}>
          {gallery.map((val) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side
