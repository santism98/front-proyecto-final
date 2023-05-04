import { useState } from "react";
import { RiverContext } from "./RiverContext";

export const RiverProvider = ({ children }) => {
  const [riversViewed, setproductsViewed] = useState();

  return (
    <RiverContext.Provider value={{ riversViewed, setproductsViewed }}>
      {children}
    </RiverContext.Provider>
  );
};
