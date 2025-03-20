import "../css/portafolio.css";
import "../css/Caso2.css";

import flechaatras from "../assets/arrow_back.svg";
import group122 from "../assets/Group 122.png";
import group79 from "../assets/Group 79.png";
import group78 from "../assets/Group 78caso2.png";
import group92 from "../assets/Group 92.png";
import group82 from "../assets/Group 82.png";
import group87 from "../assets/Group 87.png";
import personacaso2 from "../assets/PersonaCaso2.png";
import UserJourneyMap from "../assets/UserJourneyMap.png";
import frame92 from "../assets/Frame 92.png";
import frame93 from "../assets/Frame 93.png";
import frame8 from "../assets/Frame 8_2.png";
import image74 from "../assets/image 74.png";
import image75 from "../assets/image 75.png";
import image76 from "../assets/image 76.png";
import flecha01 from "../assets/Arrow 30.png";
import flecha02 from "../assets/Arrow 32.png";
import group108 from "../assets/Group 108.png";
import group119 from "../assets/Group 119.png";
import image260 from "../assets/image 260.svg";
import image261 from "../assets/image 261.svg";
import image262 from "../assets/image 262.svg";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Caso2 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };
  const handleClickInicio = () => {
    console.log("Inicio");
    navigate("/");
  };
  const handleClickPortafolio = () => {
    console.log("Portafolio");
    navigate("/Portafolio");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page caso2_00">
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

        <div className="texto01Caso2">App Móvil para Barf Chile</div>
        <img className="group122" src={group122} />
        <img className="group79" src={group79} />
        <img className="group78" src={group78} />
        <div className="texto02Caso2">
          Crear una aplicación móvil amigable, cuyo uso sea una experiencia
          significativa y agradable para los usuarios.
        </div>
        <div className="texto03">Investigación Previa</div>
        <div className="texto04">
          Realizar entrevistas con múltiples usuarios de BarfChile me llevó a
          descubrir que, aunque inicialmente pensé que el problema principal era
          la precisión del contenido de la comida, en realidad era la navegación
          y la experiencia del usuario lo que era problemático. Los usuarios
          tenían confianza en los contenidos gastronómicos de BarfChile y
          querían una experiencia agradable al comprar online. Las entrevistas
          sirvieron para establecer los principales Pain Points de los usuarios
          al navegar por la web de BarfChile, y establecer perfiles de usuarios.
        </div>
        <div className="texto05">Pain Points</div>
        <img className="group92" src={group92} />
        <img className="group82" src={group82} />
        <div className="texto06">Pain Points</div>
        <img className="group87" src={group87} />
        <img className="personacaso2" src={personacaso2} />
        <div className="texto07">
          Planteamiento del problema: “Francisca quiere lo mejor para Milo,
          rápido y sin sacrificar su salud.”
        </div>
        <div className="texto08">User Journey map</div>
        <div className="texto09">
          El Journey Map de Francisca nos permitió comprender el contexto de uso
          de la aplicación. A modo de ilustración, aprendimos que en un evento
          relacionado con la salud, es crucial llegar al destino sin comprometer
          los detalles esenciales.
        </div>
        <img className="UserJourneyMap" src={UserJourneyMap} />
        <div className="texto10">Bosquejado en papel</div>
        <div className="texto11">
          “A través del acto de dibujar diferentes soluciones potenciales a los
          problemas de los usuarios, pude evaluar las opciones más favorables
          para abordar cada problema pieza por pieza. Esto me permitió crear una
          pantalla unificada que incorporaba las mejores ideas.”
        </div>
        <img className="frame92" src={frame92} />
        <div className="texto12">Bosquejado Digital</div>
        <div className="texto13">
          Al entrevistar a usuarios reales, los objetivos para el diseño se
          establecieron para priorizar la facilidad de uso y la accesibilidad
          rápida, al mismo tiempo que proporcionaban la capacidad de explorar la
          información a fondo.
        </div>
        <img className="image74" src={image74} />
        <div className="texto14">
          Barra superior de navegación, con menú sandwish, icono de perfíl del
          usuario, carrito de compras y casilla de busqueda
        </div>
        <div className="texto15">
          Apartado de compras recientes para agilizar proceso de usuarios
          experimentados
        </div>
        <img className="flecha01" src={flecha01} />
        <img className="flecha01-1" src={flecha01} />
        <div className="texto16">
          Estudio de usabilidad: Prototipo de baja fidelidad
        </div>
        <div className="texto17">
          LLevé a cabo un estudio de usabilidad del prototipo de baja fidelidad.
          El estudio buscó determinar los principales pain points del proceso de
          compra básico.
        </div>
        <div className="texto18">Descubrimientos </div>
        <img className="group108" src={group108} />
        <div className="texto19">Refinando el diseño</div>
        <img className="image76" src={image76} />
        <img className="flecha02" src={flecha02} />
        <img className="image75" src={image75} />
        <div className="texto20">
          De acuerdo con las conclusiones del estudio de usabilidad, se llevaron
          a cabo cambios para guiar la atención del usuario al menú sandwish
          mediante un cambio de apariencia y agrandando el menú. Además de los
          cambios sugeridos al funcionamiento del cesto de compras y otros
          detalles.
        </div>
        <div className="texto21">Antes de estudio de usabilidad</div>
        <div className="texto22">Después de estudio de usabilidad</div>
        <div className="texto23">
          Estudio de usabilidad: Prototipo de alta fidelidad
        </div>
        <img className="group119" src={group119} />
        <img className="frame93" src={frame93} />
        <div className="texto24">Consideraciones de usabilidad</div>
        <img className="frame8_2" src={frame8} />
        <img className="image261" src={image261} />
        <img className="image260" src={image260} />
        <img className="image262" src={image262} />
        <div className="frame207">
          <div className="texto25">Ver prototipo Hifi</div>
        </div>
      </div>
    </>
  );
};

export default Caso2;
