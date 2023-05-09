/**

Proporciona un contexto para la lista de ríos visualizados por el usuario y permite establecer su estado.
@typedef {{riversViewed: any, setproductsViewed: Function}} RiverContextValue
*/
import { useState } from "react";
import { RiverContext } from "./RiverContext";

/**

Proporciona un componente que envuelve la aplicación y permite acceder al contexto de la lista de ríos visualizados.
@param {Object} props - Propiedades del componente.
@param {React.ReactNode} props.children - Componentes que se renderizarán dentro del componente RiverProvider.
@returns {JSX.Element} Componente con contexto para la lista de ríos visualizados.
*/
export const RiverProvider = ({ children }) => {
const [riversViewed, setproductsViewed] = useState();
return (
<RiverContext.Provider value={{ riversViewed, setproductsViewed }}>
{children}
</RiverContext.Provider>
);
};