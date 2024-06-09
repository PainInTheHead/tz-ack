import Image from "next/image";
import { StyledAboutCompany } from "./AboutCompany.styled";

const AboutCompany = () => {
  return (
    <StyledAboutCompany className="about-company">
      <div className="about-company__container container">
        <div className="about-company__full-header full-header_about">
          <Image src="/icons/arrows.png" alt="arrow" width={61} height={76} />
          <h1 className="about-company__header header_about">О КОМПАНИИ</h1>
        </div>
        <div className="about-company__main-text main-text__about">
          <p className="about-company__text text_about">
            Арматурный завод в г. Таганроге по производству кладочной, дорожной
            арматурной сетки, легких, тяжелых, плоских и пространственных
            арматурных каркасов, каркасов для буронабивных свай (БНС), сетки
            рабицы и ЦПВС.
          </p>
          <p className="about-company__sub-text sub-text_about">
            Сотрудничая с нами, Вы получаете повышение качества строительства
            при соблюдении сроков возведения объекта.
          </p>
        </div>
      </div>
    </StyledAboutCompany>
  );
};

export default AboutCompany;
