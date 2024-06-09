import { StyledVideo } from "./Video.styled";

const Video = () => {
  return (
    <StyledVideo className="video" id="main">
      <div className="video__overlay"></div> {/* добавляем черный слой */}
      <video
        className="video__promo"
        src={require("../../../public/videos/TZ-ACK.mp4")}
        autoPlay
        muted
        loop
      />
      <div className="video__about-company">
        <h2>АРМАТУРНЫЕ КАРКАСЫ, ЗАКЛАДНЫЕ И АНКЕРНЫЕ ИЗДЕЛИЯ</h2>
        <h1>ТАГАНРОГСКИЙ ЗАВОД АРМАТУРНЫХ СЕТОК И КАРКАСОВ</h1>
        <p>
          Собственное производство на основе уникального специализированного
          оборудования
        </p>
      </div>
    </StyledVideo>
  );
};

export default Video;
