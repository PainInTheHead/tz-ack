import styled from "styled-components";

interface StyledHeaderProps {
  $navbar?: string;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  /* display: none; */
  background-color: ${(props) =>
    props.$navbar === "true" ? "white" : "transparent"};
  max-width: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out;

  & .header__container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }

  & .header__nav {
    width: 100%;
  }

  & .header__nav-ul {
    width: 100%;
    display: flex;
    justify-content: end;
    gap: 2%;
    list-style: none;

    li {
      margin-bottom: 5px;

      a {
        /* display: block; */
        padding: 5px 10px;
        color: ${(props) => (props.$navbar === "true" ? "#6b6b6b" : "#e35638")};
        text-decoration: none;
        border-radius: 3px;
        font-weight: 500;
        cursor: pointer;

        &:hover {
          color: #c2aa9f;
        }

        &.header__active {
          color: ${(props) => (props.$navbar === "true" ? "#e35638" : "white")};
        }
      }
    }
  }

  @media (max-width: 1455px) {
    .header__container {
      padding: 0 20px;
    }
    .header__nav {
      padding-right: 30px;
    }
  }

  @media (max-width: 840px) {
    & .header__nav-ul {
      width: 100%;
      display: flex;
      justify-content: end;
      gap: 0;
      list-style: none;
    }

    & .header__container {
      font-size: 12px;
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header__logo {
      width: 30%;
    }
  }

  @media (max-width: 768px) {
    /* стили для мобильных устройств с большим экраном */
  }

  @media (max-width: 600px) {
    /* стили для мобильных устройств с средним экраном */
  }

  @media (max-width: 480px) {
    /* стили для мобильных устройств с маленьким экраном */
  }

  @media (max-width: 370px) {
    /* стили для мобильных устройств с очень маленьким экраном */
  }
`;
