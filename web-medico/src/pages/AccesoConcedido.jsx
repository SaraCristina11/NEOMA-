import { useEffect, useState } from 'react';
import AuthCard from '../components/AuthCard.jsx';
import { IconCheck } from '../components/Icons.jsx';

/**
 * Pantalla puente tras validar el código.
 * Aquí se conectará el panel del paciente (historial, tendencias, alertas, PDF).
 */
export default function AccesoConcedido({ paciente, onSalir }) {
  const [listo, setListo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setListo(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AuthCard titulo="Acceso autorizado" subtitulo={`Historial de ${paciente.nombre}`} emblema="ok">
      <div className="concedido">
        <span className="concedido__check" aria-hidden="true"><IconCheck width={28} height={28} /></span>
        <p className="concedido__texto" role="status">
          {listo
            ? 'El panel clínico del paciente estará disponible aquí.'
            : 'Cargando el panel clínico del paciente…'}
        </p>
        <div className={`progreso ${listo ? 'progreso--listo' : ''}`} aria-hidden="true">
          <span />
        </div>
        <p className="card__nota">
          Acceso de solo lectura · La sesión queda registrada en la auditoría del paciente.
        </p>
        <button type="button" className="boton boton--secundario" onClick={onSalir}>
          Cerrar sesión del paciente
        </button>
      </div>
    </AuthCard>
  );
}
