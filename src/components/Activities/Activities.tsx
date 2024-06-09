import Image from "next/image";
import { StyledActivities } from "./Activities.styled";

const Activities = () => {
  return (
    <StyledActivities className="activities" id="products">
      <div className="activities__about">
        <div className="activities__title">
          <h1>НАША ПРОДУКЦИЯ</h1>
          <p>Арматурные каркасы нашего производства</p>
        </div>
        <p className="activities__sub-title">
          {" "}
          Имеется полный комплект уникального специализированного оборудования
          для контактной точечной сварки, изготовленного по заказу и
          модернизированного на микроконтроллерах.
        </p>
      </div>
      <div className="activities__grid">
        <div className="activities__flat activities__flat--odd">
          <Image src="/activities/1.png" alt="flat" width={864} height={481} />
          <div className="activities__title-flat activities__title-flat--odd">
            <h2>ПЛОСКИЕ АРМАТУРНЫЕ КАРКАСЫ</h2>
            <p>
              Плоские и объемные арматурные каркасы для монолитной заливки
              бетона для ленточных и плитных фундаментов, для армирования плит
              перекрытия при строительстве жилых и промышленных объектов.
              Суммарный диаметр свариваемых арматур до 72 мм. Вся продукция
              сертифицирована и сопровождается паспортами качества.
            </p>
          </div>
        </div>
        <div className="activities__flat">
          <Image src="/activities/2.png" alt="flat" width={864} height={481} />
          <div className="activities__title-flat activities__title-flat--even">
            <h2>АРМАТУРНЫЕ КАРКАСЫ БНС</h2>
            <p>
              Арматурные каркасы пространственные, для БНС, БСС (буронабивных и
              буросекущих свай). Изготавливаются с помощью контактной сварки,
              сварки в среде защитных газов и вязки каркасов. Спиральная и
              хомутовая навивка по Вашему проекту в соответствии с ГОСТ и ТУ, а
              также нестандартное исполнение. Каркасы БНС используются при
              возведении ответственных сооружений, таких как высотные жилые
              здания, энергоблоки электростанций, тоннели, эстакады, мосты, и
              др.
            </p>
          </div>
        </div>
        <div className="activities__flat activities__flat--odd">
          <Image src="/activities/3.png" alt="flat" width={864} height={481} />
          <div className="activities__title-flat activities__title-flat--odd">
            <h2>ЗАКЛАДНЫЕ ДЕТАЛИ</h2>
            <p>
              Металлические элементы, устанавливаемые в конструкции до
              бетонирования для соединений сваркой сборных и сборно-монолитных
              железобетонных конструкций между собой и с другими конструкциями
              зданий.
            </p>
          </div>
        </div>
        <div className="activities__flat activities__flat--even">
          <Image src="/activities/4.png" alt="flat" width={864} height={481} />
          <div className="activities__title-flat activities__title-flat--even">
            <h2>СЕТКА СВАРНАЯ</h2>
            <p>
              Представляет собой специальное металлическое изделие, которое
              изготавливается путем сварки металлической проволоки. эффективное
              решение для армирования конструкций во многих отраслях
              промышленности и сферах применения, включая строительные площадки.
            </p>
          </div>
        </div>
      </div>
    </StyledActivities>
  );
};

export default Activities;
