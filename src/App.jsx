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
            resolver desafíos públicos. En el corto, mediano y largo plazo queremos lograr:
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
      Durante la primera edición del Tec Innovaction Lab, estudiantes de universidad y prepa trabajaron en proyectos 
      que abordan desafíos reales de la comunidad, organizados en tres líneas de innovación:
    </p>
  </div>
  {/* Podcast */}
  <div className='category-section'>
    <h3 className="category-title">El sonido de la Innovación Pública</h3>
    <div className="podcast-intro">
      <p className="projects-text">
        Escucha <strong>"El sonido de la Innovación Pública"</strong> - Una playlist que captura la esencia del Tec InnovAction Lab
      </p>
    </div>
    <div className="spotify-container">
      <iframe 
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/018VjvBWmPOGRANyfBKHVR?utm_source=generator&theme=0" 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allowFullScreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </div>
  </div>

  {/* Categoría 1: Sociedad Inclusiva y gobernanza participativa */}
  <div className="category-section">
    <h3 className="category-title">Sociedad Inclusiva y Gobernanza Participativa</h3>
    <div className="projects-videos-grid">
      {/* EQUALIA */}
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

      {/* O&O */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://youtube.com/embed/50sRFjr1MO0"
            title="O&O"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Prepa Tec</h3>
          <p className="project-video-description">O&O</p>
        </div>
      </div>

      {/* El Consejo */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://www.youtube.com/embed/C2kfPmxpkyM"
            title="El Consejo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Crecer</h3>
          <p className="project-video-description">El Consejo</p>
        </div>
      </div>

      {/* EcoTeam Future Possible */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://www.youtube.com/embed/ajPumQZUn7E"
            title="EcoTeam Future Possible"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Atenas</h3>
          <p className="project-video-description">EcoTeam Future Possible</p>
        </div>
      </div>
    </div>
  </div>

  {/* Categoría 2: Transformación Pública hacia la sostenibilidad */}
  <div className="category-section">
    <h3 className="category-title">Transformación Pública hacia la Sostenibilidad</h3>
    <div className="projects-videos-grid">
      {/* RenovaTez */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://www.youtube.com/embed/HHUhVRTt43k"
            title="RenovaTez"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Victoria</h3>
          <p className="project-video-description">RenovaTez</p>
        </div>
      </div>

      {/* ECOGREEN */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://www.youtube.com/embed/0gIbOXJkmb8"
            title="ECOGREEN"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Atenas</h3>
          <p className="project-video-description">ECOGREEN</p>
        </div>
      </div>
    </div>
  </div>

  {/* Categoría 3: Desafíos globales y sociales */}
  <div className="category-section">
    <h3 className="category-title">Desafíos Globales y Sociales</h3>
    <div className="projects-videos-grid">
      {/* Lo que Puebla Tira */}
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

      {/* SISET */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://youtube.com/embed/WomCw8M_mOk"
            title="SISET"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Atenas</h3>
          <p className="project-video-description">SISET</p>
        </div>
      </div>

      {/* Fénix */}
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

      {/* SOS Map */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://www.youtube.com/embed/LmvGmtZk-0w"
            title="SOS Map"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Woodcock</h3>
          <p className="project-video-description">SOS</p>
        </div>
      </div>

      {/* ServiTEX */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://www.youtube.com/embed/PUXqTUR51u8"
            title="ServiTEX"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Woodcock</h3>
          <p className="project-video-description">SERVITEX</p>
        </div>
      </div>

      {/* Microspora */}
      <div className="project-video-card">
        <div className="video-wrapper-project">
          <iframe
            src="https://www.youtube.com/embed/0DYGoh9WjSA"
            title="Microspora"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="project-video-info">
          <h3 className="project-video-title">Trinity</h3>
          <p className="project-video-description">Microspora</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Creditos Section */}
      <section id="creditos" className="credits-section">
        <h2 className="section-title">Créditos</h2>
        
        <div className="credits-content">

          <div className="credit-category">
            <h3 className="credit-title">Maribel Flores Sánchez</h3>
            <p className="credit-text">Líder del proyecto y Directora de la Escuela de Ciencias Sociales y Gobierno campus Puebla</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Nadia Nohemí Gil Hernández</h3>
            <p className="credit-text">Estudiante de la Licenciatura en Economía (LEC)</p>
            <p className="credit-text">Contribuyó en el diseño e implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Darío Alberto Sánchez Perzabal</h3>
            <p className="credit-text">Estudiante de Ingeniería en Robótica y Sistemas Digitales (IRS).</p>
            <p className="credit-text">Contribuyó en el diseño e implementación del Tec Innovaction Lab 2025.</p>
      
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Dariana Vega Morales</h3>
            <p className="credit-text">Estudiante de Ingeniería en Ingeniería en Sistemas Computacionales (ITC)</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Isabella Katt Dávila</h3>
            <p className="credit-text">Estudiante en licenciatura en Diseño Industrial (LDI).</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Frida Sophia Carreño Espinosa</h3>
            <p className="credit-text">Estudiante en licenciatura en Diseño Industrial (LDI).</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Karen Arlette Segura Bartolo</h3>
            <p className="credit-text">Estudiante en licenciatura en Diseño Industrual (LDI)</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>

          </div>

          <div className="credit-category">
            <h3 className="credit-title">Janet Ojeda Cano</h3>
            <p className="credit-text">Estudiante de Arquitectura (ARQ)</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Uriel Beltrán Quiroz</h3>
            <p className="credit-text">Estudiante en Ingeniería en Biotecnología (IBT)</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Bacilio Eduardo Aniceto Ojeda</h3>
            <p className="credit-text">Estudiante en Ingeniería en Biotecnología (IBT)</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Michelle Hernández Brito</h3>
            <p className="credit-text">Estudiante de Licenciatura en Inteligencia de Negocios (LIT)</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Eva Estafanía Torres Ávila</h3>
            <p className="credit-text">Estudiante de Ingeniería en Biotecnología (IBT).</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Amado Martínez González</h3>
            <p className="credit-text">Estudiante de la Licenciatura en Relaciones Internacionales (LRI) y Licenciatura en Economía (LEC)</p>
            <p className="credit-text">Contribuyó en la implementación del Tec Innovaction Lab 2025</p>
          </div>

      
          <div className="credit-category">
            <h3 className="credit-title">Rodrigo Osornio Sánchez</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Esmeralda del Rocio García Hernández</h3>
            <p className="credit-text">Ingeniería en Innovación y Transformación de Negocios (BME).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Marlon Yahir Martínez Chacón</h3>
            <p className="credit-text">Ingeniería en Tecnologías Computacionales (ITC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Andrea Rocha Otero</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">André Calmus González</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Juan Ignacio Del Río Acevedo</h3>
            <p className="credit-text">Licenciatura en Arte Digital (LAD).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Emilio Flores Cerwinka</h3>
            <p className="credit-text">Licenciatura en Diseño (LDI).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Alejandro Flores Hernández</h3>
            <p className="credit-text">Licenciatura en Economía (LEC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">David Francisco Sánchez Capilla</h3>
            <p className="credit-text">Ingeniería en Innovación y Transformación de Negocios (BME).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Gadiro Cano Sánchez</h3>
            <p className="credit-text">Ingeniería en Tecnologías Computacionales (ITC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Restituto Lara Larios</h3>
            <p className="credit-text">Ingeniería en Tecnologías Computacionales (ITC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Sebastián Medina Zamora</h3>
            <p className="credit-text">Licenciatura en Esterategia y Transformacion de Negocios (LAE).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Andrea Reyes Flores</h3>
            <p className="credit-text">Licenciatura en Esterategia y Transformacion de Negocios (LAE).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">María Fernanda Ortega Torres</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Angel Axel Pérez Asiain</h3>
            <p className="credit-text">Ingeniería Mecánica (IM).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Rodrigo Juárez López</h3>
            <p className="credit-text">Ingeniería Industrial (ISS).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Elizabeth Michelle Salazar Rodríguez</h3>
            <p className="credit-text">Licenciatura en Diseño Industrial (LDI).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Erick Adahy Pérez Domínguez</h3>
            <p className="credit-text">Arquitectura (ARQ).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Luis Antonio Jiménez Morales</h3>
            <p className="credit-text">Arquitectura (ARQ).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">David Amir Gómez Fermín</h3>
            <p className="credit-text">Licenciatura en Esterategia y Transformación de Negocios (LAE).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>
          
          <div className="credit-category">
            <h3 className="credit-title">José Antonio Pacheco Morales</h3>
            <p className="credit-text">Licenciatura en Derecho (LED).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Paulina Andrea Micet Cruz</h3>
            <p className="credit-text">Licenciatura en Economía (LEC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Erick Alejandro Tapia Vicente</h3>
            <p className="credit-text">Ingeniería Mecánica (IM).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Carolina Domínguez López</h3>
            <p className="credit-text">Licenciatura en Esterategia y Transformación de Negocios (LAE).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Alejandra De Los Santos Casas</h3>
            <p className="credit-text">Licenciatura en Finanzas (LAF).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Luis Manuel Gómez López</h3>
            <p className="credit-text">Licenciatura en Economía y Gobierno y Transformación Pública (LEC y LTP)</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">César Maximiliano Arreguín Lagunas</h3>
            <p className="credit-text">Ingeniería en Innovación y Transformación de Negocios (BME).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Gregorio Romero Sandoval</h3>
            <p className="credit-text">Ingeniería Civil (BC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Roberto Jara Muñoz</h3>
            <p className="credit-text">Licenciatura en Negocios Internacionales (BIB).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Mateo Pérez Lugo</h3>
            <p className="credit-text">Ingeniería en Innovación y Transformación de Negocios (BME).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Regina Bermúdez Maya</h3>
            <p className="credit-text">Arquitectura (ARQ).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">José Alejandro Méndez Juárez</h3>
            <p className="credit-text">Arquitectura (ARQ).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Roberto Castro Gómez</h3>
            <p className="credit-text">Ingeniería en Sistemas Computacionales (ITC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Nancy Paola Reyes Pazzi</h3>
            <p className="credit-text">Ingeniería en Sistemas Computacionales (ITC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Ana Luisa Cruz Flores</h3>
            <p className="credit-text">Ingeniería en Sistemas Computacionales (ITC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Rebeca Saldaña Espinoza</h3>
            <p className="credit-text">Ingeniería Mecatrónica (IMT). </p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">José Alfredo Guerrero Fernández</h3>
            <p className="credit-text">Ingeniería en Innovación y Transformación de Negocios (BME).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Diego Tenoch Bello López</h3>
            <p className="credit-text">Licenciatura en Comunicación (LC).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Javier Pichón Texis</h3>
            <p className="credit-text">Licenciatura en Arte Digital (LAD).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Valeria Pelcastre Reyes</h3>
            <p className="credit-text">Licenciatura en Diseño Industrial (LDI).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Karen Arlette Segura Bartolo</h3>
            <p className="credit-text">Licenciatura en Diseño Industrial (LDI).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Mateo Sebastián Chuquimarca Chasipanta</h3>
            <p className="credit-text">Ingeniería Mecánica (IM).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
          </div>

          <div className="credit-category">
            <h3 className="credit-title">Daniela Montserrat Díaz Ramos</h3>
            <p className="credit-text">Ingeniería en Biotecnología (IBT).</p>
            <p className="credit-text">Contribuyó en el diseño del Tec Innovaction Lab 2025</p>
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
              <strong>Ubicación:</strong> Tecnológico de Monterrey, Campus Puebla
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