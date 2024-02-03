import styled from 'styled-components'

const Wrapper = styled.main`
  .logo {
    position: relative;
    display: inline-block;
    font-size: 2.5rem;
  }

  .logo::before {
    content: '';

    position: absolute;
    bottom: 1rem;
    left: 0;
    z-index: -1;
    height: 0.2rem; /* Hier habe ich den h-3-Wert als 0.75rem interpretiert */
    width: 150%;
    /* Hier fügst du die gewünschte Hintergrundfarbe für "titlebg" ein */
    background-color: var(
      --textColorSecondary
    ); /* Beispielwert, bitte ersetzen */
  }

  .logo.dark::before {
    /* Hier fügst du die gewünschte Hintergrundfarbe für "titlebgdark" im Dark Mode ein */
    background-color: var(--textColorSecondary);
  }

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--textColorSecondary);
    }
  }
  p {
    color: var(--gray-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`

export default Wrapper
