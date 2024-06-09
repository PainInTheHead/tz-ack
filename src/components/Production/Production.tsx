import Image from "next/image";
import { StyledProduction } from "./Production.styled";

const Production = () => {
  return (
    <StyledProduction>
      <div className="container">
        <h1 className="header">ПРОИЗВОДСТВО</h1>

        <div className="grid_production">
          <div className="grid_production-long" id="gallery">
            <Image
              src="/production/1.png"
              alt="prod1"
              width={576}
              height={451}
              className="grid_production-long__odd"
            />
            <Image
              src="/production/2.png"
              alt="prod2"
              width={948}
              height={451}
              className="grid_production-long__even"
            />
          </div>
          <div className="grid_production-long">
            <Image
              src="/production/3.png"
              alt="prod3"
              width={576}
              height={451}
              className="grid_production-long__odd"
            />
            <Image
              src="/production/4.png"
              alt="prod4"
              width={948}
              height={451}
              className="grid_production-long__even"
            />
          </div>
          <div className="grid_production-default">
            <Image
              src="/production/5.png"
              alt="prod5"
              width={706}
              height={515}
              className="grid_production-long__odd"
            />
            <Image
              src="/production/6.png"
              alt="prod6"
              width={706}
              height={515}
              className="grid_production-long__even"
            />
          </div>
        </div>
      </div>
    </StyledProduction>
  );
};

export default Production;
