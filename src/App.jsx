import { useState } from "react";
import Header from "./components/Header";
import AreaListas from "./components/AreaListas";
import Footer from "./components/Footer";
import ResultadosBusca from "./components/ResultadosBusca";

function App() {
  const [busca, setBusca] = useState("");
  const [resultados, setResultados] = useState([]);

  return (
    <div className="app">
      <Header 
        setBusca={setBusca} 
        setResultados={setResultados}
      />

      {busca ? (  // ← SÓ verifica se FEZ BUSCA
        <ResultadosBusca resultados={resultados} />
      ) : (
        <AreaListas />
      )}

      <Footer />
    </div>
  );
}

export default App;
