import styled from "styled-components";

export const StyledPage = styled.div`
  .activities {
    background-color: #313131;
    color: #ffffff;
    padding: 30px 0;
    .about_activities {
      margin: 0 auto;
      max-width: 1440px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      .sub_title__activities {
        width: 50%;
        font-size: 22px;
      }
      .title_activities {
        max-width: 420px;
        width: 100%;
        p {
          color: #e35638;
        }
        h1 {
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: 800;
        }
      }
    }
  }
  .grid_activities {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 0;
    .flat_activities {
      display: flex;
      flex-direction: column;
      .title_activities__flat {
        width: 50%;
        padding: 20px 0 40px 0;
      }
      text-align: start;
      img {
        max-width: 100%;
        max-height: 400px;
      }
    }
  }
`;
