import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='box logo'>
            <p>Cұрақтарыңыз болса &#9998; </p>
            <p>Қант диабетімен ауыратындарға арналған қазақ тіліндегі алғашқы жаңалықтар сайты</p>
            <i className='fa fa-envelope'></i>
            <span> merei.zhazitova@gmail.com </span> <br />
            <i className='fa fa-headphones'></i>
            <span> +7 707 7892545</span>
          </div>
          <div className='box'>
            <h3>Денсалық</h3>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>Қандай қант деңгейінде жаттығуға болады?</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero2.jpg' alt='' />
              <p>Артық салмақ және 1 типті қант диабеті, себептері мен салдары</p>
            </div>
          </div>
          <div className='box'>
            <h3>Құқықтар</h3>
            <div className='item'>
              <img src='../images/hero/hero3.jpg' alt='' />
              <p>2024 бөлінген дәрі-дәрмектер саны</p>
            </div>
            <div className='item'>
              <img src='../images/hero/hero1.jpg' alt='' />
              <p>2024-гі өзгерістер</p>
            </div>
          </div>
          <div className='box'>
            <h3>ТАҚЫРЫПТАР</h3>
            {/*<i className='fa fa-chevron-right'></i>*/}
            <ul>
              <li>
                <span>Денсаулық</span> <label>(5)</label>
              </li>
              <li>
                <span>Тамақтану</span> <label>(6)</label>
              </li>
              <li>
                <span>Хикаялар және мотивация</span> <label>(7)</label>
              </li>
              <li>
                <span>Құқықтар</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal  '>
        <div className='container flexSB'>
          
        </div>
      </div>
    </>
  )
}

export default Footer