import styled from "styled-components";

export const StyledVideo = styled.div`
  /* display: none; */
  position: relative;
  height: 100vh;
  width: 100%;
  /* overflow: hidden; */

  & .video__about-company {
    width: 50%;
    position: absolute;
    top: 70%;
    left: 37%;
    transform: translate(-50%, -50%);
    text-align: start;
    color: #e35638;
    font-weight: 600;
    z-index: 3;

    h1 {
      width: 100%;
      font-size: 50px;
    }

    h2 {
      width: 70%;
      font-size: 30px;
    }

    p {
      color: #6b6b6b;
      font-size: 20px;
    }
  }

  & .video__promo {
    height: 100vh;
    width: 100%;
    object-fit: cover;
    position: absolute; /* добавляем абсолютное позиционирование */
    top: 0;
    left: 0;
    z-index: 1; /* добавляем z-index, чтобы видео было поверх черного слоя */
  }

  & .video__overlay {
    position: absolute; /* добавляем абсолютное позиционирование */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* добавляем черный цвет с прозрачностью 0.5 */
    z-index: 2; /* добавляем z-index, чтобы черный слой был поверх видео */
  }

  @media (max-width: 1125px) {
    & .video__about-company {
      width: 60%;
      position: absolute;
      top: 55%;
      left: 32%;
      transform: translate(-50%, -50%);
      text-align: start;
      color: #e35638;
      font-weight: 600;
      z-index: 3;

      h1 {
        width: 100%;
        font-size: 50px;
      }

      h2 {
        width: 70%;
        font-size: 30px;
      }

      p {
        color: #6b6b6b;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 873px) {
    & .video__about-company {
      width: 70%;
      position: absolute;
      top: 55%;
      left: 40%;
      transform: translate(-50%, -50%);
      text-align: start;
      color: #e35638;
      font-weight: 600;
      z-index: 3;

      h1 {
        width: 100%;
        font-size: 40px;
      }

      h2 {
        width: 70%;
        font-size: 25px;
      }

      p {
        color: #6b6b6b;
        font-size: 15px;
      }
    }
  }
`;
