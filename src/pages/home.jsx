import "../css/home.css";
import "../css/Dialog.css";

import { useState } from "react";
import Cv from "./Cv";

import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";
import image2 from "../assets/image2.png";
import image4 from "../assets/image4.png";
import image52 from "../assets/image52.png";
import image54 from "../assets/image54.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@radix-ui/react-dialog";

const App = () => {
  const [openCv, setOpenCv] = useState(false);
  const navigate = useNavigate();

  const handleClickInicio = () => {
    console.log("Inicio");
    navigate("/");
  };
  const handleClickPortafolio = () => {
    console.log("Portafolio");
    navigate("/Portafolio");
  };
  const handleClickCv = () => {
    console.log("Cv");
    setOpenCv(true);
  };

  return (
    <>
      <div>
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

        <img className="image1" src={image1} />

        <p className="disenador">
          Diseñador UX/UI Diseño de productos digitales{" "}
        </p>

        <p className="estableciendo">
          Estableciendo vínculos entre los usuarios y las soluciones que usted
          ofrece, creando experiencias digitales satisfactorias para todos.
        </p>

        <div className="frame1">
          <div className="textFrame1" onClick={handleClickPortafolio}>
            Ver Portafolio
          </div>
        </div>
        <div className="frame4">
          <div className="textFrame4" onClick={handleClickCv}>
            Ver Curriculum
          </div>
        </div>

        <img className="image3" src={image3} />
        <img className="image2" src={image2} />
        <img className="image4" src={image4} />
        <img className="image52" src={image52} />
        <img className="image54" src={image54} />
      </div>

      {/* Modal (Popup) para el CV */}
      {openCv && (
        <div className="dialog-overlay" onClick={() => setOpenCv(false)}>
          <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
            <Cv openCv={openCv} setOpenCv={setOpenCv} />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
