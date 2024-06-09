import styled from "styled-components";

export const StyledProduction = styled.div`
  /* display: none; */

  background-color: #d9d9d9;
  /* color: #ffffff; */
  padding: 30px 0;
  .container {
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 800;
  }
  .grid_production {
    display: grid;
    grid-template-columns: 1 fr;
    grid-gap: 5px;
  }

  .grid_production-long {
    display: grid;
    grid-template-columns: 35% 1fr;
    grid-gap: 5px;
    img {
      height: 300px;
      object-fit: cover;
    }
  }
  .grid_production-default {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
  }

  @media (max-width: 674px) {
    h1 {
      margin-left: 20px;
      margin-bottom: 40px;
      font-weight: 800;
    }
    .grid_production-long {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 5px;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
    .grid_production-default {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-gap: 5px;
      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }
    }
  }
`;
