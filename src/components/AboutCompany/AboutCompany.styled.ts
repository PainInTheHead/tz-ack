import styled from "styled-components";

export const StyledAboutCompany = styled.div`
  /* display: none; */
  max-width: 100%;
  width: 100%;

  background-color: #d9d9d9;

  & .about-company__container {
    width: 100%;
    max-width: 1440px;

    padding: 40px 0;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: start;

    font-size: 20px;
  }

  & .about-company__full-header {
    display: flex;
    align-items: center;

    font-size: 20px;
  }

  & .about-company__main-text {
    width: 50%;
  }

  & .about-company__text {
    margin-bottom: 20px;

    font-size: 18px;
  }

  & .about-company__sub-text {
    font-size: 16px;
  }

  @media (max-width: 1455px) {
    & .about-company__container {
      box-sizing: border-box;

      width: 100%;
      max-width: 1440px;

      padding: 40px 20px;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      align-items: start;

      font-size: 20px;
    }

    & .about-company__full-header {
      display: flex;
      align-items: center;

      font-size: 20px;
    }

    & .about-company__main-text {
      width: 50%;
    }

    & .about-company__text {
      margin-bottom: 20px;

      font-size: 18px;
    }

    & .about-company__sub-text {
      font-size: 16px;
    }
  }

  @media (max-width: 829px) {
    text-align: justify;
    .about-company__container {
      align-items: center;
      flex-direction: column;
    }
    .about-company__main-text {
      width: 100%;
    }
  }

  @media (max-width: 409px) {
    .about-company__full-header {
      font-size: 16px;
    }
    .about-company__text {
      font-size: 14px;
    }
    .about-company__sub-text {
      font-size: 12px;
    }
  }
`;
