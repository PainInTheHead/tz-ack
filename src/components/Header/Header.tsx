"Use client";
// import Link from "next/link";
import { StyledHeader } from "./Header.styled";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

type ActiveLinkType =
  | "main"
  | "products"
  | "gallery"
  | "objects"
  | "contacts"
  | "";

const Header = () => {
  const [activeLink, setActiveLink] = useState<ActiveLinkType>("");
  const [navbar, setNavar] = useState(false);

  const changeBackground = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setNavar(true);
    } else {
      setNavar(false);
    }
    window.removeEventListener("scroll", changeBackground);
    window.addEventListener("scroll", changeBackground);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <StyledHeader $navbar={navbar.toString()} className="header">
      <div className="header__container container">
        <div className="header__logo">
          <Image src="/Logo.png" alt="Логотип" width={282} height={73} />
        </div>
        <nav className="header__nav">
          <ul className="header__nav-ul">
            <li>
              <ScrollLink
                activeClass="header__active"
                to="main"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActiveLink("main")}
              >
                Главное
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="header__active"
                to="products"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActiveLink("products")}
              >
                Продукция
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                activeClass="header__active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                onClick={() => setActiveLink("gallery")}
              >
                Галерея
              </ScrollLink>
            </li>
            {/* <li>
              <ScrollLink
                activeClass="header__active"
                to="objects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setActiveLink("objects")}
              >
                Объекты
              </ScrollLink>
            </li> */}
            <li>
              <ScrollLink
                activeClass="header__active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => setActiveLink("contacts")}
              >
                Контакты
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
