import { useState } from 'react';
import til from './assets/til.png';
import premiacion_principal from './assets/premiacion_principal.png';
import patrocinadores from './assets/patrocinadores.png';
import fenixThumb from "./assets/fenix_instagram.png";
import equaliaThumb from "./assets/equalia_instagram.png";
import PueblatiraThumb from "./assets/loquepueblatira_instagram.png";
import InstagramVideo from "./components/InstagramVideo";
import './App.css';
import { Link } from "react-router-dom";
// import { useEffect } from "react";

// function InstagramEmbed() {
//   useEffect(() => {
//     if (window.instgrm) {
//       window.instgrm.Embeds.process();
//     }
//   }, []);

//   return (
//     <blockquote
//       className="instagram-media"
//       data-instgrm-permalink="https://www.instagram.com/reel/DP72JgODDrS/"
//       data-instgrm-version="14"
//     >
//       <a href="https://www.instagram.com/reel/DP72JgODDrS/"></a>
//     </blockquote>
//   );
// }

export default function TecInnovationLab() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="tec-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <img src={til} alt="TEC Innovation Lab Logo" className="logo-img"/>
          </div>
          <ul className="nav-menu">
            <li><a onClick={() => scrollToSection('que-es')}>¿Qué es TIL?</a></li>
            <li><a onClick={() => scrollToSection('como-funciona')}>¿Cómo funciona?</a></li>
            <li><a onClick={() => scrollToSection('numeralia')}>Numeralia</a></li>
            <li><a onClick={() => scrollToSection('proyectos')}>Nuestros Proyectos</a></li>
            <li><a onClick={() => scrollToSection('creditos')}>Créditos</a></li>
            <li><a onClick={() => scrollToSection('contacto')}>Contacto</a></li>
            <li><Link to="/edicion-2025">Edición 2025</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-title">
            Innova, <br />Crea y<br />Transforma <br />el Futuro
          </p>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="main-image-section">
        <div className="main-image">
          <div className="image-content">
            <div className="brand-display">
              <img src={premiacion_principal} alt="TIL" className="premiacion-imagen"/>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="que-es" className="about-section">
        <h2 className="about-title">
          ¿Qué es el <span className="highlight-red">Tec Innovaction Lab</span>?
        </h2>
        
        <div className="about-content">
          <p className="about-text">
            El Tec InnovAction Lab es un espacio formativo y de vinculación que impulsa la <span className="underline-red">innovación pública</span> y 
            el <span className="underline-red">liderazgo</span> social de las y los estudiantes del Tecnológico de Monterrey. Mediante metodologías de 
            diseño centrado en las personas, <span className="underline-red">pensamiento crítico</span>, <span className="underline-red">análisis de datos</span> e <span className="underline-red">inteligencia colectiva</span>,   
            el laboratorio conecta al estudiantado con actores gubernamentales, empresariales y de la sociedad 
            civil para resolver desafíos reales de impacto comunitario.
          </p>
          
          <p className="about-text">
            Es un <span className="underline-red">ecosistema</span> donde se experimenta, se aprende haciendo y se generan soluciones accionables que
            fortalecen la vida pública, promueven la <span className="underline-red">participación ciudadana</span> y consolidan el compromiso del Tec
            con el <span className="underline-red">desarrollo sostenible</span> y la transformación del país.
          </p>
          
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="how-it-works">
        <h2 className="section-title">¿Cómo funciona?</h2>

        <div className="function-intro">
          <p className="projects-text">
            El proyecto articula a estudiantes, gobierno, academia, sector privado y sociedad civil en un ejercicio de <br></br>co-creación orientado a 
            resolver desafíos públicos. Sus líneas de trabajo se organizan en seis ejes estratégicos:
          </p>
        </div>
        
        <div className="steps-container">
          <div className="step">
            <h3 className="step-title">Incidencia</h3>
            <p className="step-description">
              Promover la participación de juventudes en procesos públicos.
            </p>
          </div>

          <div className="step">
            <h3 className="step-title">Inteligencia Colectiva</h3>
            <p className="step-description">
              Integrar diversas perspectivas para el diseño público de soluciones a problemas locales.
            </p>
          </div>

          <div className="step">
            <h3 className="step-title">Investigación Aplicada</h3>
            <p className="step-description">
              Generar análisis y datos útiles para la toma de decisiones.
            </p>
          </div>

          <div className="step">
            <h3 className="step-title">Inclusión </h3>
            <p className="step-description">
              Incorporar a jóvenes y grupos prioritarios en procesos formativos
            </p>
          </div>

          <div className="step">
            <h3 className="step-title">Interacción</h3>
            <p className="step-description">
              Fomentar el diálogo intersectorial y la creación de redes colaborativas.
            </p>
          </div>

          <div className="step">
            <h3 className="step-title">Identidad creativa</h3>
            <p className="step-description">
              Impulsar la creatividad como elemento central de la innovación pública.
            </p>
          </div>
        </div>
      </section>

      {/* Numeralia Section */}
      <section id="numeralia" className="numeralia-section">
        <h2 className="section-title">Numeralia</h2>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">+100</div>
            <div className="stat-label">Participantes de<br/>preparatoria</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">+50</div>
            <div className="stat-label">Estudiantes de<br/>profesional</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">+25</div>
            <div className="stat-label">Profesores y<br/>profesoras</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">+5</div>
            <div className="stat-label">Aliados<br/>estratégicos</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">+10</div>
            <div className="stat-label">EXATEC</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">+4</div>
            <div className="stat-label">Medios de<br/>comunicación</div>
          </div>

          <div className="stat-card">
            <div className="stat-number">+30</div>
            <div className="stat-label">Personas<br/>asesoras</div>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="projects-section">
        <h2 className="section-title">Nuestros Proyectos</h2>
        
        <div className="projects-intro">
          <p className="projects-text">
            Durante la octava edición del Tec Innovaction Lab, estudiantes de diversas carreras y semestres trabajaron en proyectos 
            que abordan desafíos reales de la comunidad. Estos son algunos de los proyectos destacados:
          </p>
        </div>

        <div className="projects-grid">
          <div className="project-card">
            <h3 className="project-title">Cuidado del agua</h3>
          </div>

          <div className="project-card">
            <h3 className="project-title">Ayuda en las comunidades</h3>
          </div>

          <div className="project-card">
            <h3 className="project-title">Educación para todos</h3>
          </div>
        </div>

        <div className="projects-videos-grid">
    {/* Video 1 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.youtube.com/embed/0gIbOXJkmb8"
          title="Proyecto 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Atenas</h3>
        <p className="project-video-description">
          ECOGREEN
        </p>
      </div>
    </div>

    {/* Video 2 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://youtube.com/embed/WomCw8M_mOk"
          title="Proyecto 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Atenas</h3>
        <p className="project-video-description">
          SISET
        </p>
      </div>
    </div>

    {/* Video 3 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.youtube.com/embed/ajPumQZUn7E"
          title="Proyecto 3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Atenas</h3>
        <p className="project-video-description">
          EcoTeamFuturePossible
        </p>
      </div>
    </div>

    {/* Video 4 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.youtube.com/embed/C2kfPmxpkyM"
          title="Proyecto 4"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Crecer</h3>
        <p className="project-video-description">
          El Consejo
        </p>
      </div>
    </div>

    {/* Video 5 */}
    {/* <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.instagram.com/reel/DP77JUhDYNx/"
          title="Proyecto 5"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Crecer</h3>
        <p className="project-video-description">
          MUN Bridge
        </p>
      </div>
    </div> */}
{/* Video 6 */}
<div className="project-video-card">
  <div className="video-wrapper-project">
    <InstagramVideo
      url="https://www.instagram.com/reel/DP8HCD2jf2e/"
      thumbnail={PueblatiraThumb}
      title="IMEX - Lo que Puebla Tira"
    />
  </div>
  <div className="project-video-info">
    <h3 className="project-video-title">IMEX</h3>
    <p className="project-video-description">Lo que Puebla Tira</p>
  </div>
</div>

    {/* Video 7 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://youtube.com/embed/50sRFjr1MO0"
          title="Proyecto 7"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Prepa Tec</h3>
        <p className="project-video-description">
          O&O
        </p>
      </div>
    </div>
{/* Video 8 */}
<div className="project-video-card">
  <div className="video-wrapper-project">
    <InstagramVideo
      url="https://www.instagram.com/reel/DP7t6D2jeoz/"
      thumbnail={equaliaThumb}
      title="Prepa Tec - Equalia"
    />
  </div>
  <div className="project-video-info">
    <h3 className="project-video-title">Prepa Tec</h3>
    <p className="project-video-description">Equalia</p>
  </div>
</div>


    {/* Video 9 */}
    {/* <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.instagram.com/reel/DP7tO7hjW_M/"
          title="Proyecto 9"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Prepa Tec</h3>
        <p className="project-video-description">
          Corte Yorkina
        </p>
      </div>
    </div> */}

    {/* Video 10 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.youtube.com/embed/0DYGoh9WjSA"
          title="Proyecto 10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Trinity</h3>
        <p className="project-video-description">
          Microspora
        </p>
      </div>
    </div>
    
{/* Video 11 */}
{/* <div className="project-video-card">
  <div className="video-wrapper-project">
    <InstagramEmbed />
  </div>

  <div className="project-video-info">
    <h3 className="project-video-title">Victoria</h3>
    <p className="project-video-description">Fénix</p>
  </div>
</div> */}

{/* Video 11 */}
<div className="project-video-card">
  <div className="video-wrapper-project">
    <InstagramVideo
      url="https://www.instagram.com/reel/DP72JgODDrS/"
      thumbnail={fenixThumb}
      title="Victoria - Fénix"
    />
  </div>
  <div className="project-video-info">
    <h3 className="project-video-title">Victoria</h3>
    <p className="project-video-description">Fénix</p>
  </div>
</div>




    {/* Video 12 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.youtube.com/embed/HHUhVRTt43k"
          title="Proyecto 12"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Victoria</h3>
        <p className="project-video-description">
          RenovaTez
        </p>
      </div>
    </div>

    {/* Video 13 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.youtube.com/embed/LmvGmtZk-0w"
          title="Proyecto 13"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Woodcock</h3>
        <p className="project-video-description">
          SOS
        </p>
      </div>
    </div>

    {/* Video 14 */}
    <div className="project-video-card">
      <div className="video-wrapper-project">
        <iframe
          src="https://www.youtube.com/embed/PUXqTUR51u8"
          title="Proyecto 14"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-video-info">
        <h3 className="project-video-title">Woodcock</h3>
        <p className="project-video-description">
          SERVITEX
        </p>
      </div>
    </div>
  </div>
      </section>

      {/* Creditos Section */}
      <section id="creditos" className="credits-section">
        <h2 className="section-title">Créditos</h2>
        
        <div className="credits-content">
          <div className="credit-category">
            <h3 className="credit-title">Nadia Nohemí Gil Hernández</h3>
            <p className="credit-text">Estudiante de la Licenciatura en Economía (LEC)</p>
            <p className="credit-text">Contribuyó como líder social de la implementación y gestión del proyecto.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Darío Alberto Sanchez Perzabal</h3>
            <p className="credit-text">Estudiante de 5to semestre de Ingeniería en Robótica y Sistemas Digitales (IRS).</p>
            <p className="credit-text">Contribuyó al desarrollo de un chatbot y una página web.</p>
            <p className="credit-text">Además, participó como staff en eventos del laboratorio, apoyando en la logística y organización.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Dariana Vega Morales</h3>
            <p className="credit-text">Estudiante de Ingeniería en Ingeniería en Sistemas Computacionales (ITC)</p>
            <p className="credit-text">Contribuyó al desarrollo de la página web del proyecto.</p>
            <p className="credit-text">También, contribuyo en la creación y publicación del contenido de redes sociales y participó como staff en el evento del laboratorio.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Amado Martínez González</h3>
            <p className="credit-text">Estudiante de la Licenciatura en Relaciones Internacionales (LRI) y Licenciatura en Economía (LEC)</p>
            <p className="credit-text">Contribuyó a la planeación del show del TIL, como en la creación de los guiones del evento y la estructura de la agenda.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Karen Arlette Segura Bartolo</h3>
            <p className="credit-text">Estudiante de Diseño, contribuyó mediante la elaboración de contenido para redes sociales así como para su publicación, también participó en la elaboración y cuidado visual de los materiales del proyecto.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Janet Ojeda Cano</h3>
            <p className="credit-text">Estudiante de Arquitectura (ARQ)</p>
            <p className="credit-text">Contribuyó a la creación de contenido en redes sociales y colaboró en la organización, preparación operativa y revisión de materiales para el evento.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Uriel Beltrán Quiroz</h3>
            <p className="credit-text">Estudiante en Ingeniería en Biotecnología (IBT)</p>
            <p className="credit-text">Contribuyó en el área de operaciones en cuánto a materiales y planeación, así como publicaciones en redes sociales con guiones y contenido. En el evento asistió como staff en diferentes áreas y momentos.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Bacilio Eduardo Aniceto Ojeda</h3>
            <p className="credit-text">Contribuyó en el área de Actividades, publicaciones en redes sociales con contenido y resumen de guión.</p>
            <p className="credit-text">Durante el evento asistió como staff en diferentes etapas y áreas del evento.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Michelle Hernández Brito</h3>
            <p className="credit-text">Estudiante de Licenciatura en Inteligencia de Negocios (LIT)</p>
            <p className="credit-text">Contribuyó en el área de investigación, diseño de contenido digital, además de apoyar como staff del evento.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Eva Estafanía Torres Ávila</h3>
            <p className="credit-text">Estudiante de Ingeniería en Biotecnología (IBT).</p>
            <p className="credit-text">Contribuyó en el diseño de contenido en Instagram, la planeación del show del TIL y fue como staff en el evento.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Frida Sophia Carreño Espinosa</h3>
            <p className="credit-text">Estudiante en licenciatura en Diseño Industrial.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Isabella Katt Dávila</h3>
            <p className="credit-text">Estudiante en licenciatura en Diseño Industrial.</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Rodrigo Osornio Sánchez</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Esmeralda del Rocio García Hernández</h3>
            <p className="credit-text">Ingeniería en Innovación y Transformación de Negocios (BME).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Marlon Yahir Martínez Chacón</h3>
            <p className="credit-text">Ingeniería en Tecnologías Computacionales (ITC).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Andrea Rocha Otero</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">André Calmus González</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Juan Ignacio Del Río Acevedo</h3>
            <p className="credit-text">Licenciatura en Arte Digital (LAD).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Emilio Flores Cerwinka</h3>
            <p className="credit-text">Licenciatura en Diseño (LDI).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Alejandro Flores Hernández</h3>
            <p className="credit-text">Licenciatura en Economía (LEC).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">David Francisco Sánchez Capilla</h3>
            <p className="credit-text">Ingeniería en Innovación y Transformación de Negocios (BME).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Gadiro Cano Sánchez</h3>
            <p className="credit-text">Ingeniería en Tecnologías Computacionales (ITC).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Restituto Lara Larios</h3>
            <p className="credit-text">Ingeniería en Tecnologías Computacionales (ITC).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Sebastián Medina Zamora</h3>
            <p className="credit-text">Licenciatura en Esterategia y Transformacion de Negocios (LAE).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Andrea Reyes Flores</h3>
            <p className="credit-text">Licenciatura en Esterategia y Transformacion de Negocios (LAE).</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">María Fenanda Ortega Torres</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="contact-section">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contact-content">
          <p className="contact-text">
            ¿Tienes preguntas o quieres participar en la próxima edición?
          </p>
          
          <div className="contact-info">
            <div className="contact-item">
              <strong>Instagram:</strong> @tecinnovactionlab
            </div>
            <div className="contact-item">
              <strong>Tik tok:</strong> @tecinnovactionlab
            </div>
            <div className="contact-item">
              <strong>Ubicación:</strong> Campus Puebla, Tecnológico de Monterrey
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            &copy; 2025 Tec Innovaction Lab - Tecnológico de Monterrey Campus Puebla
          </p>
          
          <div className="footer-sponsors">
            <img src={patrocinadores} alt="Patrocinador" className="sponsor-logo"/>
          </div>
        </div>
      </footer>
    </div>
  );
}