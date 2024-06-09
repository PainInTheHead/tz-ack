import Image from "next/image";
import { StyledCustomers } from "./Customers.styled";

const Customers = () => {
  return (
    <StyledCustomers className="customers" id="contacts">
      <div className="customers__container container">
        <div className="customers__title">
          <h1>НАШИ ЗАКАЗЧИКИ</h1>
          <p>Использующие нашу продукцию в своих архитектурных проектах</p>
        </div>
        <div className="customers__logos">
          <Image src="/customers/1.png" alt="flat" width={376} height={138} />
          <Image src="/customers/2.png" alt="flat" width={427} height={138} />
          <Image src="/customers/3.png" alt="flat" width={308} height={138} />
          <Image src="/customers/4.png" alt="flat" width={363} height={138} />
        </div>
      </div>
    </StyledCustomers>
  );
};

export default Customers;
