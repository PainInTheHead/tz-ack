import styled from "styled-components";

export const StyledFooter = styled.footer`
  /* display: none; */

  background-color: #313131;
  color: #ffffff;
  padding: 30px 0;
  width: 100%;

  & .footer__container {
    box-sizing: border-box;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .footer__contact_mail {
    cursor: pointer;
    text-decoration: underline;
  }

  & .footer__contact-info {
    width: 70%;
  }

  h1 {
    font-weight: 800;
    margin-bottom: 40px;
  }

  & .footer__contact_current__info {
    font-size: 16px;
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    grid-gap: 1%;
    margin-bottom: 30px;
    height: 40px;
  }
  & .footer__contact_sub__info {
    color: #e35638;
    text-decoration: underline;
    cursor: pointer;
    font-size: 12px;
  }

  .footer__location {
    margin-left: 20px;
  }

  .footer__contact_sub__info--desktop {
    display: none;
  }

  .footer__contact_sub__info--mobile {
    display: inline-block;
  }

  @media (max-width: 882px) {
    & .footer__container {
      flex-wrap: wrap;
    }
    .footer__location {
      margin-left: 0;
      max-width: 100%;
      width: 100%;
      img {
        width: 100%;
      }
    }
    & .footer__contact-info {
      width: 100%;
    }
  }

  @media (max-width: 420px) {
    & .footer__contact_current__info {
      font-size: 12px;
      display: grid;
      grid-template-columns: 40px 1fr;
      align-items: center;
      grid-gap: 1%;
      margin-bottom: 10px;
      height: auto;
    }
    .footer__contact_about__current {
      margin-left: 10px;
    }

    .footer__contact_mail {
      margin-left: 10px;
    }
  }

  @media (min-width: 768px) {
    .footer__contact_sub__info--desktop {
      display: inline-block;
    }

    .footer__contact_sub__info--mobile {
      display: none;
    }
  }
`;
