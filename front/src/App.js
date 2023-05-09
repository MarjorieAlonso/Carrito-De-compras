import React, { useEffect, useState } from "react";
import Home from "./Componentes/Home";
import Carrito from "./Componentes/Cart/Carrito";
import ProvData from "./Componentes/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const getApiResponse = () => {
      fetch("http://localhost:5000/")
        .then((res) => res.text())
        .then((res) => setResponse(res));
    };
    getApiResponse();
  }, []);

  return (
<ProvData>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/cart" element={<Carrito/>}/>
      </Routes>
    </BrowserRouter>
    </ProvData>
  );
}

export default App;
