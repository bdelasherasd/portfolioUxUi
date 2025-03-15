import "../css/portafolio.css";
import "../css/Caso1.css";
import { useNavigate } from "react-router-dom";
import flechaatras from "../assets/arrow_back.svg";
import image49 from "../assets/image 49.svg";
import tv from "../assets/pngtree-tv-screen-material-70850711.png";
import { useEffect } from "react";

const Caso1 = () => {
  const navigate = useNavigate();

  const handleClickInicio = () => {
    console.log("Inicio");
    navigate("/");
  };
  const handleClickPortafolio = () => {
    console.log("Portafolio");
    navigate("/Portafolio");
  };
  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="back-arrow" onClick={handleBackClick}>
        <img src={flechaatras} />
      </div>

      <div className="group88">
        <div className="rectangle5"></div>
        <div className="frame3">
          <p className="inicio" onClick={handleClickInicio}>
            Inicio
          </p>
          <div className="line1"></div>
          <p className="portafolio" onClick={handleClickPortafolio}>
            Portafolio
          </p>
          <div className="line3"></div>
          <p className="contacto" onClick={handleClickInicio}>
            Contacto
          </p>
          <div className="line2"></div>
          <p className="sobremi" onClick={handleClickInicio}>
            Sobre Mi
          </p>
        </div>
      </div>

      <p className="text1">Sitio web adaptable para Cine Insomnia</p>
      <p className="text2">Mis responsabilidades</p>
      <ul className="text3">
        <li>Investigación y estudio de usuarios.</li>
        <li>Bosquejado y prototipado.</li>
        <li>Flujo de usuario y arquitectura de la información.</li>
        <li>Diseño de interacciones.</li>
        <li>Diseño Visual.</li>
      </ul>
      <img className="tv" src={tv} />
      <img className="caso1img49" src={image49} />
      <p className="text4">El Problema</p>
    </>
  );
};
export default Caso1;
