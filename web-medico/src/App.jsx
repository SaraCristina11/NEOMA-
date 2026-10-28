import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AccesoDocumento from './pages/AccesoDocumento.jsx';
import CodigoVerificacion from './pages/CodigoVerificacion.jsx';
import AccesoConcedido from './pages/AccesoConcedido.jsx';

/**
 * Flujo de acceso del médico:
 *   1. documento  → el médico escribe el documento del paciente
 *   2. codigo     → el paciente recibe un código en su app NEOMA y se lo dicta al médico
 *   3. concedido  → acceso autorizado (aquí conectará luego el panel clínico)
 */
export default function App() {
  const [paso, setPaso] = useState('documento');
  const [paciente, setPaciente] = useState(null);
  const [solicitud, setSolicitud] = useState(null);

  const irACodigo = ({ paciente, solicitud }) => {
    setPaciente(paciente);
    setSolicitud(solicitud);
    setPaso('codigo');
  };

  const reiniciar = () => {
    setPaciente(null);
    setSolicitud(null);
    setPaso('documento');
  };

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <div className="app__stage" key={paso}>
          {paso === 'documento' && <AccesoDocumento onSolicitado={irACodigo} />}
          {paso === 'codigo' && (
            <CodigoVerificacion
              paciente={paciente}
              solicitud={solicitud}
              onVolver={reiniciar}
              onNuevaSolicitud={setSolicitud}
              onValidado={() => setPaso('concedido')}
            />
          )}
          {paso === 'concedido' && <AccesoConcedido paciente={paciente} onSalir={reiniciar} />}
        </div>
        <Footer />
      </main>
    </div>
  );
}
