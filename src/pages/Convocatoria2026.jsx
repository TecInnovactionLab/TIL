import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import til from "../assets/til.png";
import "./Convocatoria2026.css";

// El PDF vive en public/, no en assets/, para que la URL no cambie entre builds.
const PDF_URL = `${import.meta.env.BASE_URL}convocatoria-til-2026.pdf`;

// Cierre de recepción de propuestas: 9 de octubre de 2026, hora del centro de México.
const CIERRE = new Date("2026-10-09T23:59:59-06:00");

function calcularRestante(fecha) {
  const restante = fecha.getTime() - Date.now();
  if (restante <= 0) return null;
  return {
    dias: Math.floor(restante / 86400000),
    horas: Math.floor((restante / 3600000) % 24),
    minutos: Math.floor((restante / 60000) % 60),
  };
}

// El visor sólo se monta en pantallas anchas: en móvil el iframe no renderiza
// el PDF (Safari iOS, Chrome Android) y aun oculto por CSS descargaría los 4 MB.
function useVisorDisponible() {
  const [disponible, setDisponible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48.0625rem)");
    const actualizar = () => setDisponible(mq.matches);
    actualizar();
    mq.addEventListener("change", actualizar);
    return () => mq.removeEventListener("change", actualizar);
  }, []);

  return disponible;
}

function useCuentaRegresiva(fecha) {
  const [tiempo, setTiempo] = useState(() => calcularRestante(fecha));

  useEffect(() => {
    const id = setInterval(() => setTiempo(calcularRestante(fecha)), 30000);
    return () => clearInterval(id);
  }, [fecha]);

  return tiempo;
}

const LINEAS = [
  {
    numero: "01",
    titulo: "Sociedad inclusiva y gobernanza participativa",
    texto:
      "Democracia digital, inclusión, perspectiva de género, derechos humanos y cultura de la legalidad.",
  },
  {
    numero: "02",
    titulo: "Transformación pública hacia la sostenibilidad",
    texto:
      "Tecnología, datos abiertos y digitalización para mejorar servicios públicos, transparencia y desarrollo urbano.",
  },
  {
    numero: "03",
    titulo: "Desafíos globales y sociales",
    texto:
      "Movilidad, cambio climático, salud, migración, desigualdad, gobernanza de la IA y desinformación, ligados a los ODS.",
  },
];

const CALENDARIO = [
  { fecha: "3 de agosto", titulo: "Lanzamiento", detalle: "Publicación oficial de la convocatoria." },
  { fecha: "3 de ago – 9 de oct", titulo: "Recepción de propuestas", detalle: "Envío del documento y el enlace del video pitch." },
  { fecha: "15 de octubre", titulo: "Anuncio de finalistas", detalle: "El Comité Evaluador publica los equipos seleccionados." },
  { fecha: "30 y 31 de octubre", titulo: "Hackatón final presencial", detalle: "Jornada de trabajo y premiación en Campus Puebla." },
];

export default function Convocatoria2026() {
  const tiempo = useCuentaRegresiva(CIERRE);
  const visorDisponible = useVisorDisponible();

  return (
    <div className="conv-container">
      {/* Navegación */}
      <nav className="conv-navbar">
        <div className="conv-nav-content">
          <div className="conv-logo">
            <Link to="/">
              <img src={til} alt="Tec InnovAction Lab" className="conv-logo-img" />
            </Link>
          </div>
          <ul className="conv-nav-menu">
            <li><a href="#lineas">Líneas</a></li>
            <li><a href="#requisitos">Requisitos</a></li>
            <li><a href="#calendario">Calendario</a></li>
            <li><a href="#premios">Premios</a></li>
            <li><a href="#registro">Registro</a></li>
            <li><Link to="/">Inicio</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="conv-hero">
        <div className="conv-hero-grid">
          <div className="conv-hero-col">
            <p className="conv-eyebrow">Convocatoria juvenil · Segunda edición</p>
            <h1 className="conv-hero-title">
              Tec InnovAction<br />Lab <span className="conv-year">2026</span>
            </h1>
            <p className="conv-hero-text">
              Equipos de estudiantes de preparatoria y universidad que rediseñan lo público en la
              Región Centro-Occidente de México. Escuela de Ciencias Sociales y Gobierno,
              Campus Puebla.
            </p>
          </div>

          <aside className="conv-hero-aside">
            {tiempo ? (
              <div className="conv-countdown">
                <span className="conv-countdown-label">Cierra la recepción de propuestas en</span>
                <div className="conv-countdown-units">
                  <div className="conv-unit">
                    <span className="conv-unit-num">{tiempo.dias}</span>
                    <span className="conv-unit-word">días</span>
                  </div>
                  <div className="conv-unit">
                    <span className="conv-unit-num">{tiempo.horas}</span>
                    <span className="conv-unit-word">horas</span>
                  </div>
                  <div className="conv-unit">
                    <span className="conv-unit-num">{tiempo.minutos}</span>
                    <span className="conv-unit-word">min</span>
                  </div>
                </div>
                <span className="conv-countdown-date">Fecha límite: 9 de octubre de 2026</span>
              </div>
            ) : (
              <div className="conv-countdown conv-countdown-cerrado">
                <span className="conv-countdown-label">
                  La recepción de propuestas cerró el 9 de octubre de 2026.
                </span>
              </div>
            )}
          </aside>

          <div className="conv-hero-actions">
            <a className="conv-btn conv-btn-primary" href="#registro">Registrar mi equipo</a>
            <a className="conv-btn conv-btn-ghost" href={PDF_URL} download>
              Descargar convocatoria (PDF)
            </a>
          </div>
        </div>
      </header>

      {/* Premios */}
      <section className="conv-section" id="premios">
        <h2 className="conv-title">Premios</h2>
        <div className="conv-premios">
          <div className="conv-premio conv-premio-ganador">
            <span className="conv-premio-monto">$25,000</span>
            <span className="conv-premio-lugar">Equipo ganador</span>
          </div>
          <div className="conv-premio">
            <span className="conv-premio-monto">$12,500</span>
            <span className="conv-premio-lugar">Finalista con mención honorífica</span>
          </div>
          <div className="conv-premio">
            <span className="conv-premio-monto">$12,500</span>
            <span className="conv-premio-lugar">Finalista con mención honorífica</span>
          </div>
        </div>
        <p className="conv-nota">
          Los montos se entregan en pesos mexicanos y se otorgan de forma independiente en cada
          categoría.
        </p>
      </section>

      {/* Líneas de innovación */}
      <section className="conv-section" id="lineas">
        <h2 className="conv-title">Líneas de innovación</h2>
        <p className="conv-intro">Cada proyecto se alinea a una de estas tres áreas.</p>
        <div className="conv-lineas">
          {LINEAS.map((linea) => (
            <article className="conv-linea" key={linea.numero}>
              <span className="conv-linea-num">{linea.numero}</span>
              <h3 className="conv-linea-titulo">{linea.titulo}</h3>
              <p className="conv-linea-texto">{linea.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Requisitos */}
      <section className="conv-section" id="requisitos">
        <h2 className="conv-title">Lo esencial</h2>
        <div className="conv-requisitos">
          <div className="conv-requisito">
            <h3 className="conv-requisito-titulo">Tu equipo</h3>
            <p className="conv-requisito-texto">
              Cuatro estudiantes de la misma institución, con una persona líder y el
              acompañamiento de una persona asesora académica.
            </p>
          </div>
          <div className="conv-requisito">
            <h3 className="conv-requisito-titulo">La propuesta escrita</h3>
            <p className="conv-requisito-texto">
              Cinco cuartillas en preparatoria, siete en universidad. Análisis desde cuatro
              perspectivas: económica, jurídica, internacional e innovación pública. Referencias
              en APA 7.
            </p>
          </div>
          <div className="conv-requisito">
            <h3 className="conv-requisito-titulo">El video pitch</h3>
            <p className="conv-requisito-texto">
              Máximo 90 segundos, vertical o cuadrado. Se publica en TikTok o Instagram etiquetando
              a @tecinnovactionlab con #TecInnovactionLab2026 y #ECSGPuebla.
            </p>
          </div>
          <div className="conv-requisito">
            <h3 className="conv-requisito-titulo">Cómo se evalúa</h3>
            <p className="conv-requisito-texto">
              60% contenido y factibilidad según el Comité Evaluador, 40% engagement del video en
              redes sociales.
            </p>
          </div>
        </div>
      </section>

      {/* Calendario */}
      <section className="conv-section" id="calendario">
        <h2 className="conv-title">Calendario</h2>
        <ol className="conv-calendario">
          {CALENDARIO.map((fase) => (
            <li className="conv-fase" key={fase.titulo}>
              <span className="conv-fase-fecha">{fase.fecha}</span>
              <div className="conv-fase-cuerpo">
                <h3 className="conv-fase-titulo">{fase.titulo}</h3>
                <p className="conv-fase-detalle">{fase.detalle}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Registro */}
      <section className="conv-section" id="registro">
        <h2 className="conv-title">Registro</h2>
        <p className="conv-intro">Elige la categoría que corresponde a tu nivel educativo.</p>
        <div className="conv-registro">
          <a
            className="conv-categoria"
            href="https://admision.tec.mx/innovaction-lab-pue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="conv-categoria-nivel">Preparatoria</span>
            <span className="conv-categoria-detalle">
              Estudiantes de segundo o tercer año con matrícula vigente en la región
              Centro-Occidente.
            </span>
            <span className="conv-categoria-cta">Ir al registro →</span>
          </a>
          <a
            className="conv-categoria"
            href="https://forms.gle/1YWewkunEgEJA7es8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="conv-categoria-nivel">Universidad</span>
            <span className="conv-categoria-detalle">
              Estudiantes con matrícula vigente en una institución de la región Centro-Occidente.
            </span>
            <span className="conv-categoria-cta">Ir al registro →</span>
          </a>
        </div>
      </section>

      {/* Documento completo */}
      <section className="conv-section conv-section-pdf" id="documento">
        <h2 className="conv-title">Convocatoria completa</h2>
        <p className="conv-intro">
          Bases, rúbricas de evaluación, formato de entrega y avisos de privacidad.
        </p>

        <div className="conv-pdf-actions">
          <a className="conv-btn conv-btn-primary" href={PDF_URL} download>
            Descargar PDF
          </a>
          <a
            className="conv-btn conv-btn-ghost"
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir en una pestaña nueva
          </a>
        </div>

        {visorDisponible && (
          <div className="conv-pdf-visor">
            <iframe src={PDF_URL} title="Convocatoria Tec InnovAction Lab 2026" />
          </div>
        )}

        <p className="conv-nota">
          ¿Dudas sobre las bases? Escribe a{" "}
          <a className="conv-mail" href="mailto:tecsociallab@servicios.tec.mx">
            tecsociallab@servicios.tec.mx
          </a>
          .
        </p>
      </section>

      <footer className="conv-footer">
        <p>© 2026 Tec InnovAction Lab · Tecnológico de Monterrey, Campus Puebla</p>
      </footer>
    </div>
  );
}
