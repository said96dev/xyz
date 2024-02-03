import styled from 'styled-components'

const Wrapper = styled.section`
  body,
  html {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: left;
    font-size: 3rem;
    color: var(--primary-500);
    font-weight: bold;
    letter-spacing: 0.5rem;
    font-family: var(--bodyFont) !important ;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .Login-img {
    width: 100%;
    max-height: 100vh;
    overflow: hidden;
    border-bottom-left-radius: 2rem;
    position: relative;
    text-align: center;
    img {
      width: 100%;
      height: 100vh;
    }
    h1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 5rem;
      background: #e3f2fd;

      letter-spacing: 1rem;
      font-weight: bolder;
      color: var(--primary-500);
    }
  }
  .Loginform {
    width: 50%;

    margin: 3rem auto;
    button {
      width: 100%;
      height: 50px;
      border-radius: 0.3rem;
    }
  }
  @media (max-width: 750px) {
    display: block;
    max-height: 100vh;
    overflow: hidden;
    .Login-img {
      display: none;
      img {
        display: none;
      }
    }
    .Loginform {
      width: 100%;
      padding: 2rem;
    }
  }
`

export default Wrapper
