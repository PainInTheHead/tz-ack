import styled from "styled-components";

export const StyledCustomers = styled.div`
  /* display: none; */

  width: 100%;

  padding: 30px 0;

  background-color: #d9d9d9;

  & .customers__container {
    box-sizing: border-box;
    max-width: 1440px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
  }

  & .customers__title {
    h1 {
      font-weight: 800;
    }

    p {
      color: #e35638;
    }
  }

  & .customers__logos {
    max-width: 1440px;

    margin-top: 40px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2%;

    img {
      width: 100%;
      max-width: 360px;
      height: 100px;
      /* object-fit: cover; */
    }
  }
  @media (max-width: 1102px) {
    & .customers__title {
      text-align: center;
      h1 {
        font-weight: 800;
      }

      p {
        color: #e35638;
      }
    }
    .customers__logos {
      max-width: 1440px;
      margin: 0 auto; /* добавлено для центрирования сетки */
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(
        auto-fit,
        minmax(320px, 360px)
      ); /* изменено для адаптивности */
      grid-template-rows: 100px 100px;
      grid-gap: 10px;
      justify-content: center;
    }

    .customers__logos img {
      width: 100%; /* изменено на процентное значение для адаптивности */
      max-width: 360px;
      height: 100px;
      object-fit: cover;
      object-position: center;
    }
  }
`;
