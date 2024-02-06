import React from 'react'
import Wrapper from '../assets/wrappers/Footer'
import { IoLocationSharp } from 'react-icons/io5'
import { FaMobileScreenButton } from 'react-icons/fa6'
import { MdMarkEmailUnread } from 'react-icons/md'
const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-center">
        <div className="logo-container">
          <h1>
            <span className="logo">XYZ</span>
          </h1>
        </div>
        <div className="address-container">
          <h3>XYZ-Umzüge</h3>
          <div className="address-daten">
            <div className="address-daten-item">
              <IoLocationSharp />
              Wuppertal, oberer Girfflenberg 71
            </div>
            <div className="address-daten-item">
              <FaMobileScreenButton />
              +49 (0) 123 456 789
            </div>
            <div className="address-daten-item">
              <MdMarkEmailUnread />
              www.example.de
            </div>
          </div>
        </div>
        <div className="contact-daten-container">
          <h3>Öffnungszeiten</h3>
          Mo – Sa 07:00 – 18:00 <br /> Uhr Sonntag geschlossen
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer
