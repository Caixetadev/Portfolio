import styled from "styled-components";

export const SectionHome = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    span img, span:last-child {
      visibility: hidden;
    }

    h2 {
      white-space: nowrap;
    }
  }
`;

export const Content = styled.div`
  margin-left: 1rem;

  & img {
    border-radius: 1rem;
  }

  h1 {
    font-size: 6rem;
    letter-spacing: 0.6rem;
    margin-top: 1rem;
    text-transform: uppercase;
  }

  span {
    letter-spacing: 0.1rem;
    font-size: 1.8rem;
  }

  h2 {
    text-transform: uppercase;
    color: gray;
    font-size: 4rem;
    margin-bottom: 6rem;
  }

  h2::after {
    content: "|";
    margin-left: 0.5rem;
    color: ${(props) => props.theme.colors.background_three};
    opacity: 1;
    animation: blink 1s infinite;
  }

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }

  a {
    background-color: ${(props) => props.theme.colors.background_three};
    padding: 1.2rem 4rem;
    color: #fff;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    max-width: 5rem;
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(1.2);
  }

  @media (max-width: 567px) {
    span {
      font-size: 1.6rem;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }

    a {
      padding: .7rem 2rem;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 4rem;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 313px) {
    h2 {
      white-space: normal;
    }

    a {
      font-size: 1.4rem;
    }
  } 
`;
