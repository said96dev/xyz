import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 2rem 0;
  align-items: center;
  display: flex;
  justify-content: center;
  z-index: 1000;
  .logo::before {
    content: '';
    width: 8%;
    position: absolute;
    bottom: 8.8rem;
    left: 5rem;
    z-index: -1;
    height: 0.2rem;
    background-color: var(--textColorSecondary);
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .footer-center {
      width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .address-container,
    .contact-daten-container {
      flex: 1;
      margin: 0 10px;
    }

    .address-daten {
      margin-top: 10px;
    }

    .address-daten-item {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    .address-daten-item svg {
      margin-right: 5px;
    }
  }
`

export default Wrapper
