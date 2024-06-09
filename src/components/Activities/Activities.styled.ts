import styled from "styled-components";

export const StyledActivities = styled.div`
  /* display: none; */

  padding: 70px 0;

  background-color: #313131;
  color: #ffffff;

  & .activities__about {
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;
    margin-bottom: 70px;

    display: flex;
    justify-content: space-between;
  }

  & .activities__sub-title {
    width: 50%;

    font-size: 22px;
  }

  & .activities__title {
    padding: 0 20px;
    max-width: 420px;
    width: 100%;

    p {
      color: #e35638;
    }

    h1 {
      margin-bottom: 15px;

      font-size: 28px;
      font-weight: 800;
    }
  }

  & .activities__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 0;
  }
  & .activities__flat {
    height: 100%;
    width: 100%;
  }

  & .activities__title-flat {
    box-sizing: border-box;
    width: 100%;

    padding: 20px 0 40px 0;
  }

  /* text-align: start; */

  img {
    width: 100%;
    max-width: 100%;
    max-height: 400px; /* замените эту строку на следующую */
    height: 400px;
    object-fit: cover;
    object-position: center;
  }

  .activities__title-flat--odd {
    text-align: end;
    p {
      padding-right: 5%;

      padding-left: 20%;
    }
    h2 {
      padding-right: 5%;
    }
  }

  .activities__title-flat--even {
    text-align: start;
    p {
      padding-left: 5%;

      padding-right: 20%;
    }
    h2 {
      padding-left: 5%;
    }
  }
  @media (max-width: 884px) {
    & .activities__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(70%, 1fr));
      grid-gap: 0;
    }
    .activities__about {
      box-sizing: border-box;
      display: block;
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
      padding: 0 20px;
    }

    .activities__title {
      box-sizing: border-box;
      width: 100%;
      max-width: 100%;
    }
    .activities__sub-title {
      margin-top: 20px;
      width: 100%;
      max-width: 100%;
    }
  }
`;
