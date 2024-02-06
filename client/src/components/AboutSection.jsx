import React from 'react'
import cards from '../utils/cards'
import Wrapper from '../assets/wrappers/AboutSection'
const AboutSection = () => {
  return (
    <Wrapper>
      <div className="page">
        {/* info */}

        <div className="info">
          <div className="container">
            <h1>
              Ihr Umzugsexperte im Raum <span>NRW</span>
            </h1>
            <p className="aboutsection-text">
              Wenn Sie einen Experten für Umzüge und Transporte im Raum
              Wuppertal suchen, sind Sie bei uns an der richtigen Adresse. Wir
              helfen Ihnen dabei, Ihren Besitz unbeschadet vom alten zum neuen
              Standort zu befördern und bieten dabei eine Vielzahl an Leistungen
              an. Dabei können Sie nicht nur auf die jahrelange Erfahrung und
              das fachliche Know-how unserer Mitarbeiter vertrauen, sondern
              profitieren auch von unserem umfangreichen Fuhrpark, der Umzüge in
              allen Größenordnungen ermöglicht. Sprechen Sie uns gerne an, damit
              wir sämtliche Schritte Ihres Umzugs mit Ihnen planen und die
              notwendigen Transporte nach Ihren Wünschen durchführen können.
            </p>
          </div>
        </div>
        <div className="aboutsection-feature container">
          <div className="cards">
            {cards.map((item) => {
              const { title, text, icon } = item
              return (
                <div className="card">
                  <div className="icon">{icon}</div>
                  <h3>{title}</h3>
                  <p className="text">{text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default AboutSection
