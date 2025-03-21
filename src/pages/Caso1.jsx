import "../css/portafolio.css";
import "../css/Caso1.css";
import { useNavigate } from "react-router-dom";

import flechaatras from "../assets/arrow_back.svg";
import image49 from "../assets/image 49.svg";
import image50 from "../assets/image 50.svg";
import image51 from "../assets/image 51.svg";
import diapo_persona from "../assets/Diapo Persona.png";
import slide from "../assets/Slide 16_9 - 1 1.png";
import bosquejo from "../assets/Bosuejo digital.png";
import Arrow27 from "../assets/Arrow 27.png";
import Arrow28 from "../assets/Arrow 28.png";
import group109 from "../assets/Group 109.png";
import group110 from "../assets/Group 110.png";
import frame7 from "../assets/Frame 7.png";
import comprar from "../assets/Comprar entradas 1.png";
import frame8 from "../assets/Frame 8.png";
import group120 from "../assets/Group 120.png";
import group121 from "../assets/Group 121.png";

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
        <div className="Bosquejadodigital">Bosquejado Digital</div>
        <div className="frame6">
          <div className="textoFrame6">
            Al realizar los bosquejos digitales la principal atención fue
            responder a la necesidad de comprar tickets online para todo tipo de
            usuario
          </div>
        </div>

        <img className="bosquejo" src={bosquejo} />
        <img className="Arrow27" src={Arrow27} />
        <img className="Arrow28" src={Arrow28} />
        <div className="textArrow28">
          Comprar entradas como pop up desde cartelera, agilizando proceso de
          compra
        </div>
        <div className="textArrow27">
          Sistema fácil e intuitivo para comprar entradas
        </div>
        <div className="usabilidad">
          Estudio de usabilidad: Prototipo de baja fidelidad
        </div>
        <div className="lleve">
          LLevé a cabo un estudio de usabilidad del prototipo de baja fidelidad.
          El estudio buscó determinar el formato de organización de la cartelera
          más cómodo para todos los usuarios, y determinar los principales pain
          points del proceso de compra de tickets.{" "}
        </div>
        <div className="descubrimiento">Descubrimientos</div>

        <div className="r1el1"></div>
        <div className="elipseDesc1"></div>
        <div className="t1el1">1</div>
        <div className="textor1">
          Los participantes prefieren ver la cartelera por películas en vez de
          calendario
        </div>

        <div className="r1el2"></div>
        <div className="elipseDesc2"></div>
        <div className="t1el2">2</div>
        <div className="textor2">
          El sistema de compras fue comprendido por todos los participantes
        </div>

        <div className="rectangle4_c1"></div>
        <div className="group81_c1"></div>
        <div className="elipse4_caso1"></div>
        <div className="tres_caso1">3</div>
        <div className="texto5_caso1">
          En general, los usuarios consideraron que el espacio podría usarse más
        </div>

        <div className="rectangle5_c1"></div>
        <div className="elipse5_caso1"></div>
        <div className="cuatro">4</div>
        <div className="texto6_caso1">
          El funcionamiento de la boletería fue aceptado por participantes
        </div>

        <div className="rect6_caso1"></div>
        <div className="elip6_caso1"></div>
        <div className="cinco">5</div>
        <div className="texto7_c1">
          Algunos usuarios sienten que el proceso es demasiado rápido
        </div>

        <div className="rect7_c1"></div>
        <div className="elip7_c1"></div>
        <div className="seis">6</div>
        <div className="texto8_c1">
          Todos los participantes del estudio usarían la app
        </div>
        <div className="texto9">Refinando el diseño</div>
        <img className="group109" src={group109} />
        <img className="group110" src={group110} />

        <div className="texto10c1">
          Estudio de usabilidad: Prototipo de alta fidelidad
        </div>
        <img className="frame7" src={frame7} />
        <img className="comprar" src={comprar} />
        <img className="frame8" src={frame8} />
        <img className="group120" src={group120} />
        <img className="group121" src={group121} />
        <div className="back-arrowBottom" onClick={handleBackClick}>
          <img src={flechaatras} />
        </div>
      </div>
    </>
  );
};
export default Caso1;
