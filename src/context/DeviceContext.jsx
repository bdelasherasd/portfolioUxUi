import { createContext, useContext, useEffect, useState } from "react";

// Crear el contexto
const DeviceContext = createContext();

// Proveedor del contexto
export const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1240);
    };
    setCounter(counter + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile, counter }}>
      {children}
    </DeviceContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useDevice = () => {
  return useContext(DeviceContext);
};
