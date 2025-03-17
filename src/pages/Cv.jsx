import "../css/Cv.css";
import image55 from "../assets/image 55.png";
import image53 from "../assets/image 53.svg";

const Cv = ({ openCv, setOpenCv }) => {
  const handleClickCerrar = () => {
    console.log("Cerrar");
    setOpenCv(false);
  };
  return (
    <div className="page cv">
      <img className="image55" onClick={handleClickCerrar} src={image55} />
      <img className="image53" src={image53} />
    </div>
  );
};

export default Cv;
