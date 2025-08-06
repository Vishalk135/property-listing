import { useState, createContext, useContext } from "react";

const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [properties, setProperties] = useState([]);

  const addProperty = (property) => {
    const newProperty = {
      ...property,
      id: Date.now(),
    };
    setProperties((prev) => [...prev, newProperty]);
  };

  const deleteProperty = (id) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PropertyContext.Provider value={{ properties, addProperty, deleteProperty }}>
      {children}
    </PropertyContext.Provider>
  );
}

export function useProperty() {
  return useContext(PropertyContext);
}
