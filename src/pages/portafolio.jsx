import "../css/home.css";
import "../css/portafolio.css";
import { useNavigate } from "react-router-dom";
import imagetv from "../assets/pngtree-tv-screen-material-70850711.png";
import image49 from "../assets/image 49.png";
import image50 from "../assets/image 50.svg";
import image51 from "../assets/image 51.svg";
import flechaatras from "../assets/arrow_back.svg";
import imageCaso from "../assets/Case Study BarfChile - Bernardo de las Heras 1.svg";
import image60 from "../assets/image 60.svg";
import image61 from "../assets/image 61.svg";
import image62 from "../assets/image 62.png";
import group95 from "../assets/Group 95.png";
import image63 from "../assets/image 63.png";

const portafolio = () => {
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
  const handleLink1 = () => {
    window.open("https://l1nq.com/FigmaDesktopPrototipeInsomnia", "_blank");
  };
  const handleLink2 = () => {
    window.open("https://encr.pw/FigmaPrototipeMobileVersion", "_blank");
  };
  const handleLink3 = () => {
    window.open("https://encr.pw/FigmaMobilProtoBarf", "_blank");
  };
  const handleLink4 = () => {};
  const handleLink5 = () => {
    window.open("https://encr.pw/FigmaProtoLagunappmob", "_blank");
  };
  const handleLink6 = () => {};

  return (
    <>
      <div>
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

        <div className="portafolio2">Portafolio</div>

        <div>
          <div className="group93">
            <div className="RectAngle27"></div>
          </div>
          <ul className="textoGrupo93">
            <li>Perfil de usuario digital</li>
            <li>Arquitectura de información</li>
            <li>Bosquejado a papel y digital</li>
            <li>Estudios de usabilidad</li>
            <li>
              Prototipado de baja y alta <br /> fidelidad
            </li>
          </ul>

          <div className="group76"></div>
          <img className="imagetv" src={imagetv} />
          <img className="image49" src={image49} />
          <img className="image50" src={image50} />
          <img className="image51" src={image51} />
          <p className="textoinsomnia">
            Sitio web adaptable para Cine Insomnia
          </p>
          <p className="textoinsomnia2">Prototipo hifi Versión escritorio</p>
          <div className="textoInsomnia3" onClick={handleLink1}>
            https://l1nq.com/FigmaDesktop...
          </div>
          <p className="textoInsonmia4">Prototipo hifi Versión móvil</p>
          <div className="textoInsonmia5" onClick={handleLink2}>
            https://l1nq.com/FigmaProtot...
          </div>
          <div className="ver1">
            <div className="ver1Text">Ver Trabajo</div>
          </div>
        </div>

        <div>
          <div className="RectAngle27_2"></div>
          <img className="image61" src={image61} />
          <img className="image60" src={image60} />
          <img className="imageCaso" src={imageCaso} />
          <p className="titBarf">App Móvil para Barf Chile</p>
        </div>

        <ul className="listaBarf">
          <li>Perfil de usuario digital</li>
          <li>User Journey Map</li>
          <li>Arquitectura de información</li>
          <li>Bosquejado a papel y digital</li>
          <li>Estudios de usabilidad</li>
          <li>
            Prototipado de baja y alta
            <br />
            fidelidad
          </li>
        </ul>

        <div className="textListaBarf">Prototipo hifi</div>
        <div className="linkBarf" onClick={handleLink3}>
          https://encr.pw/FigmaMobilPr...
        </div>

        <div className="verBarf" onClick={handleLink4}>
          <div className="textVerBarf">Ver Trabajo</div>
        </div>

        <div className="rectangle28"></div>
        <img className="imagetv2" src={imagetv} />
        <img className="image62" src={image62} />
        <img className="group95" src={group95} />
        <img className="image63" src={image63} />

        <div className="textTrabajo3">
          Sitio web adaptable y App Móbil para iniciativa de interes social
          Lagunapp
        </div>

        <ul className="listTrabajo3">
          <li>Perfil de usuario digital</li>
          <li>Descubrimiento de necesidades</li>
          <li>Arquitectura de información</li>
          <li>Bosquejado a papel y digital</li>
          <li>Estudios de usabilidad</li>
          <li>
            Prototipado de baja y alta
            <br />
            fidelidad
          </li>
        </ul>
        <div className="textTrabajo3_2">Prototipo hifi</div>
        <div className="linkTrabajo3" onClick={handleLink5}>
          https://encr.pw/FigmaMobilPr...
        </div>

        <div className="verTrabajo3" onClick={handleLink6}>
          <div className="textVerTrabajo3">Ver Trabajo</div>
        </div>
      </div>
    </>
  );
};

export default portafolio;
