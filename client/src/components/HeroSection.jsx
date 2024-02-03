import React from 'react'
import delivery_truck from '../assets/images/heavy_box.svg'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'

function Landing() {
  return (
    <Wrapper>
      <nav>
        <span className="logo">XYZ</span>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Transporter <span>XYZ</span> Service
          </h1>
          <p>
            Effizienter Transport, zuverlässiger Service. Unsere
            Transporter-Firma bietet maßgeschneiderte Lösungen für schnelle und
            sichere Lieferungen – jederzeit und überall
          </p>
          <Link to="/kontakt" className="btn btn-hero-l">
            Kontakt
          </Link>
        </div>
        <img src={delivery_truck} alt="task assign " className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
