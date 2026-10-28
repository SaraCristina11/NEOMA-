# NEOMA · Web del Médico (frontend)

Inicio del portal médico: el médico escribe el documento del paciente, el paciente recibe un código en su app NEOMA y, al ingresarlo, el médico entra al historial.

## Cómo correrlo

Requisito: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre http://localhost:5173

Para generar la versión final: `npm run build` (queda en la carpeta `dist/`).

## Flujo

1. **Acceso Médico**: documento del paciente (cédula de 6 a 10 dígitos; acepta puntos y espacios). Si no es válido, el campo se pone en rojo con el mensaje de error.
2. **Código de Verificación**: 4 casillas que avanzan solas, aceptan pegar el código y retroceden con Backspace. Si el código es incorrecto, las casillas se ponen en rojo y se limpian.
   - El código vence en 5 minutos (cuenta regresiva visible).
   - "Reenviar código" se habilita cada 30 segundos.
   - Máximo 5 intentos; después hay que reenviar un código nuevo.
3. **Acceso autorizado**: pantalla puente donde luego irá el panel clínico.

> Código de prueba mientras no hay backend: **1234** (definido en `src/services/authService.js`). No aparece en la interfaz.

## Estructura

```
src/
  App.jsx                    → controla los pasos del flujo
  components/
    Header.jsx, Footer.jsx
    AuthCard.jsx             → tarjeta blanca con barra verde + emblema
    OtpInput.jsx             → casillas del código
    Icons.jsx
  pages/
    AccesoDocumento.jsx
    CodigoVerificacion.jsx
    AccesoConcedido.jsx
  services/authService.js    → MOCK de la API (aquí se conecta el backend)
  utils/validators.js
  styles/global.css          → paleta NEOMA en variables CSS
public/logo/                 → logos PNG sin fondo (verde y blanco)
```

## Paleta (manual de marca)

| Token | Color | Uso |
|---|---|---|
| `--verde-900` | `#1A3626` | Botones, barra superior, textos de marca |
| `--menta` | `#D2E6D8` | Acentos suaves, casillas llenas |
| `--petroleo` | `#4A6B70` | Foco, iconos secundarios |
| `--crema` | `#F4F3ED` | Fondo general |
| `--blanco` | `#FFFFFF` | Tarjetas |
| `--error` | `#B42330` | Estados de error |

Tipografía: **Sora** (títulos, como en el manual) e **Inter** (texto).

## Stack recomendado

- **React + Vite + CSS** (este proyecto). Sin librerías de UI para mantenerlo liviano y fiel al diseño.
- **React Router** cuando agreguen el panel del paciente (`/acceso`, `/paciente/:id`).
- **Python con FastAPI** para el backend de este módulo (coincide con la documentación técnica): endpoints `POST /acceso/solicitar` y `POST /acceso/validar`, que devuelven un token JWT.
- **Recharts** para las gráficas de tendencias de 30 días (RF-015).

Para conectar el backend, solo cambien las funciones de `src/services/authService.js` por `fetch` reales y definan `VITE_API_URL` en un archivo `.env`.
