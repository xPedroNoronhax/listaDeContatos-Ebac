import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EstiloGlobal, { Container } from "./styles";
import Cadastro from "./pages/Cadastro";
import InfoContato from "./pages/InfoContato";

function App() {
  useEffect(() => {
    // Evitar o redirecionamento inicial ao renderizar
    if (window.location.pathname === '/') {
      return;
    }

    // Redirecionar para a página inicial se a rota não for reconhecida
    window.location.href = '/';
  }, []);

  return (
    <>
      <EstiloGlobal />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Cadastro />} />
            <Route path="/info/:contatoId" element={<InfoContato />} />
            {/* Adicione uma navegação de fallback para evitar o erro */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
