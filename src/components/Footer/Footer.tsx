import Image from "next/image";
import { StyledFooter } from "./Footer.styled";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const telephoneCopy = "+7 (988) 952-45-00";
  const mailCopy = "ip.ageeva21@mail.ru";

  const handleCopy = () => {
    toast.success("Текст скопирован!", {
      position: "top-center",
      autoClose: 5000,
    });
  };

  return (
    <StyledFooter className="footer">
      <div className="footer__container container">
        <div className="footer__contact-info">
          <h1>КОНТАКТЫ</h1>
          <div className="footer__contact_current__info">
            <Image
              src="/icons/telephone.png"
              alt="telephone"
              width={40}
              height={40}
            />
            <div className="footer__contact_about__current">
              <p className="footer__contact_main__info">+7 (988) 952-45-00 </p>
              <CopyToClipboard text={telephoneCopy} onCopy={handleCopy}>
                <button className="footer__contact_sub__info footer__contact_sub__info--desktop">
                  Свяжитесь с нами
                </button>
              </CopyToClipboard>
              <a href={`tel:${telephoneCopy}`}>
                <button className="footer__contact_sub__info footer__contact_sub__info--mobile">
                  Свяжитесь с нами
                </button>
              </a>
            </div>
          </div>
          <div className="footer__contact_current__info">
            <Image
              src="/icons/address.png"
              alt="address"
              width={40}
              height={40}
            />
            <div className="footer__contact_about__current">
              <p className="footer__contact_main__info">
                347939, Ростовская область, г. Таганрог, шоссе Мариупольское,
                54/3{" "}
              </p>
              <a
                href="https://yandex.ru/maps/971/taganrog/house/mariupolskoye_shosse_54_3/Z0EYfgZhSUcHQFptfX5weHRlbQ==/?ll=38.831788%2C47.225700&z=13.91"
                className="footer__contact_sub__info"
                target="_blank"
              >
                Понедельник - пятница с 8:00-17:00
              </a>
            </div>
          </div>
          <div className="footer__contact_current__info">
            <Image src="/icons/mail.png" alt="mail" width={40} height={40} />
            <CopyToClipboard text={mailCopy} onCopy={handleCopy}>
              <p className="footer__contact_mail">ip.ageeva21@mail.ru</p>
            </CopyToClipboard>
          </div>
        </div>
        <div className="footer__location">
          <Image
            src="/icons/location.png"
            alt="location"
            width={725}
            height={501}
          />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
