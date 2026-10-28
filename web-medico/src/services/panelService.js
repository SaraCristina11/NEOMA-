/**
 * Servicio del panel del paciente (lo que ve el médico después de validar el código).
 *
 * HOY devuelve el panel VACÍO: no hay base de datos todavía.
 * Cuando el backend esté listo, cambia SOLO la función obtenerPanel por la
 * llamada real y devuelve un objeto con esta MISMA forma. Los componentes
 * ya saben dibujar los datos cuando lleguen.
 *
 * ─────────────────────────────────────────────────────────────
 * FORMA DE LOS DATOS (contrato con el backend)
 * ─────────────────────────────────────────────────────────────
 * perfil:        { edad: number, sexo: 'Masculino' | 'Femenino' | 'Otro' }
 * dispositivo:   { nombre: 'Apple Watch S9', ultimaSincronizacion: ISO string }
 *
 * healthScore: {
 *   valor: 0-100,
 *   riesgo: 'bajo' | 'medio' | 'alto',
 *   componentes: { cardiovascular, sueno, actividad, respiratorio }  // 0-100 c/u
 * }
 *
 * metricas: {                      // tarjetas pequeñas de arriba
 *   fc:     { actual: 78,   variacion: 4,    nota: '+4% vs. semana anterior', serie: [..] },
 *   spo2:   { actual: 96.8, variacion: -0.3, nota: 'Variación nocturna leve',  serie: [..] },
 *   sueno:  { actual: 5.4,  variacion: -22,  nota: '3 noches < 5 horas',        serie: [..] },
 *   estres: { actual: 54,   variacion: 12,   nota: 'Tendencia al alza',         serie: [..] },
 * }                                // variacion en %, serie = últimos 7-14 valores
 *
 * tendencias: { fc: [30 valores], spo2: [...], sueno: [...], estres: [...] }  // 1 por día
 *
 * alertas: [{ id, tipo: 'fc'|'sueno'|'spo2'|'actividad', titulo, detalle, fecha: ISO }]
 *
 * resumenIA: { parrafos: ['texto con **negrilla**', ...], modelo: 'GPT-4 · Biosensores' } | null
 *
 * extremos: {
 *   fcMax:     { valor, fecha },
 *   suenoMin:  { valor, fecha },
 *   spo2Min:   { valor, fecha },
 *   estresMax: { valor, fecha },
 * }
 */

const metricaVacia = () => ({ actual: null, variacion: null, nota: null, serie: [] });
const extremoVacio = () => ({ valor: null, fecha: null });


/** Pestaña "Información General".
 */

const informacionVacia = () => ({
  foto: null,
  nombreCompleto: null,
  tipoDocumento: null,
  documento: null,
  fechaNacimiento: null,
  genero: null,
  tipoSangre: null,
  estado: null,
  correo: null,
  celular: null,
  direccion: null,
  ciudad: null,
  eps: null,
  regimen: null,
  numeroAfiliacion: null,
  contactoEmergencia: { nombre: null, parentesco: null, celular: null },
  antecedentes: { alergias: [], enfermedades: [], cirugias: [], familiares: [] },
});

export function panelVacio() {
  return {
    perfil: { edad: null, sexo: null },
    dispositivo: { nombre: null, ultimaSincronizacion: null },
    healthScore: {
      valor: null,
      riesgo: null,
      componentes: { cardiovascular: null, sueno: null, actividad: null, respiratorio: null },
    },
    metricas: {
      fc: metricaVacia(),
      spo2: metricaVacia(),
      sueno: metricaVacia(),
      estres: metricaVacia(),
    },
    tendencias: { fc: [], spo2: [], sueno: [], estres: [] },
    alertas: [],
    resumenIA: null,
    extremos: {
      fcMax: extremoVacio(),
      suenoMin: extremoVacio(),
      spo2Min: extremoVacio(),
      estresMax: extremoVacio(),
    },
    informacion: informacionVacia(),
  };
}

/** Indica si el panel tiene al menos algún dato real (para habilitar el PDF, etc.). */
export function tieneDatos(panel) {
  if (!panel) return false;
  return (
    panel.healthScore.valor != null ||
    Object.values(panel.tendencias).some((s) => s.length > 0) ||
    panel.alertas.length > 0 ||
    panel.resumenIA != null
  );
}

/**
 * Trae el panel completo del paciente.
 * Para conectar el backend, reemplaza el cuerpo por algo así:
 *
 *   // import { API_URL } from './authService.js';
 *   const res = await fetch(`${API_URL}/pacientes/${documento}/panel`, {
 *     headers: { Authorization: `Bearer ${token}` },
 *   });
 *   if (!res.ok) throw new Error('No se pudo cargar el panel');
 *   return { ...panelVacio(), ...(await res.json()) };
 */
// eslint-disable-next-line no-unused-vars
export async function obtenerPanel(documento, token) {
  await new Promise((r) => setTimeout(r, 600));
  return panelVacio();


}
