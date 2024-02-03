import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"

const Header = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Басты бет</Link>
              </li>
              <li>
                <Link to='/culture'>Диабет туралы</Link>
              </li>
              <li>
                <Link to='/politics'>Денсаулық</Link>
              </li>
              <li>
                <Link to='/memes'>Тамақтану</Link>
              </li>
              <li>
                <Link to='/sports'>Спорт</Link>
              </li>
              <li>
                <Link to='/boxed'>Құқықтар</Link>
              </li>
              <li>
                <Link to='/reviews'>Хикаялар және мотивация</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header