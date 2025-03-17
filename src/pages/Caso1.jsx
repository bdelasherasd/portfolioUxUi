import "../css/portafolio.css";
import "../css/Caso1.css";
import { useNavigate } from "react-router-dom";
import flechaatras from "../assets/arrow_back.svg";
import image49 from "../assets/image 49.svg";
import image50 from "../assets/image 50.svg";
import image51 from "../assets/image 51.svg";
import diapo_persona from "../assets/Diapo Persona.png";
import slide from "../assets/Slide 16_9 - 1 1.png";

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
      <div className="page caso1_00">
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
        <div className="Group_78" src="Group_78"></div>
        <div className="el_problema">El Problema</div>
        <ul className="la_pagina">
          <li>La página no cuenta con sistema de compra de tickets.</li>
          <li>
            Ademas, los usuarios reportaron algunas <br /> incomodidades al
            explorar la cartelera,
            <br /> especialmente en móvil.
          </li>
        </ul>

        <div className="crear_un_sitio">
          Crear un sitio web adaptable con sistema de compra de tickets para
          Cine Insomnia cuyo uso sea agradable, fácil y entretenido.
        </div>

        <div className="investigacion">Investigación Previa</div>
        <img className="image50_caso1" src={image50} />
        <img className="image51_caso1" src={image51} />

        <div className="para_este">
          Para este trabajo se realizaron dos investigaciones preliminares, y un
          estudio de usabilidad final. La primera investigación constó de una
          encuesta realizada a mas de 20 usuarios de Cine Insomnia de los cuales
          5 fueron seleccionados para una entrevista. La investigación sirvió
          para establecer los principales Pain Points de los usuarios al navegar
          por la web de Insomnia, y establecer perfiles de usuarios.
        </div>

        <div className="pain_points">Pain Points</div>
        <div className="rectangle1_caso1"></div>

        <div className="grupo80_caso1"></div>
        <div className="elipse1_caso1"></div>
        <div className="text1_caso1">1</div>

        <div className="es_necesario">
          Es necesario poder comprar tickets online.
        </div>

        <div className="rectangle2_caso1"></div>
        <div className="elipse2"></div>
        <div className="text2_caso1">2</div>
        <div className="falta_inter">
          Falta interacción entre usuarios y Cine insomnia (fidelización).
        </div>

        <div className="rectangle3_caso1"></div>
        <div className="elipse3"></div>
        <div className="text3_caso1">3</div>
        <div className="la_arquitectura">
          La arquitectura del sitio no se ajusta a los estándares de la
          industria, tornándose confuso para algunos usuarios.
        </div>

        <div className="persona">Persona*:</div>
        <div className="almendra">Almendra</div>

        <img className="diapo_persona" src={diapo_persona} />
        <div className="planteamiento">
          Planteamiento del problema: “Como profesional/estudiante ocupado
          quiero poder comprar entradas para el cine desde mi móvil para poder
          organizar mi visita con antelación y mejor, y no perder funciones de
          mi interés.”
        </div>
        <div className="mapadesitio">Mapa de sitio y bosquejos en papel</div>
        <img className="slide" src={slide} />
      </div>
    </>
  );
};
export default Caso1;
