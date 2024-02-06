import styled from 'styled-components'

const Wrapper = styled.main`
  .aboutsection-text {
    font-size: 1.2rem;
  }
  .info {
    padding-bottom: 3rem;
    padding-top: 3rem;
    background-color: var(--white);
    width: 100%;
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
      grid-template-columns: 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    .cards {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        .text {
          word-wrap: break-word;
          font-size: 1.1rem;
          font-weight: 300;
        }
        .icon {
          align-items: center;
          font-size: 5rem;
          color: var(--textColorSecondary);
        }
      }
    }
  }
`

export default Wrapper
