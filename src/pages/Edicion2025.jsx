import { Link } from "react-router-dom";
import til from '../assets/til.png';
import foto_panel from '../assets/foto_panel.png';
import inauguracion1 from '../assets/inauguracion1.jpeg';
import inauguracion2 from '../assets/inauguracion2.jpeg';
import inauguracion3 from '../assets/inauguracion3.jpeg';
import taller_liderazgo from '../assets/taller_liderazgo.png';
import taller1_1 from '../assets/taller1_1.png';
import taller1_2 from '../assets/taller1_2.png';
import taller2_1 from '../assets/taller2_1.png';
import taller2_2 from '../assets/taller2_2.png';
import taller2_3 from '../assets/taller2_3.png';
import taller3_1 from '../assets/taller3_1.png';
import taller3_2 from '../assets/taller3_2.png';
import taller3_3 from '../assets/taller3_3.png';
import comida1 from '../assets/comida1.jpeg';
import comida2 from '../assets/comida2.jpeg';
import comida3 from '../assets/comida3.jpeg';
import comida4 from '../assets/comida4.jpeg';
import comida5 from '../assets/comida5.jpeg';
import comida6 from '../assets/comida6.jpeg';
import comida7 from '../assets/comida7.jpeg';
import comida8 from '../assets/comida8.jpeg';
import comida9 from '../assets/comida9.jpeg';
import comida10 from '../assets/comida10.jpeg';
import comida11 from '../assets/comida11.jpeg';
import comida12 from '../assets/comida12.jpeg';
import comida13 from '../assets/comida13.jpeg';
import comida14 from '../assets/comida14.jpeg';
import sh_tnk1 from '../assets/shark_tank1.png';
import sh_tnk2 from '../assets/shark_tank2.png';
import sh_tnk3 from '../assets/shark_tank3.png';
import sh_tnk4 from '../assets/shark_tank4.png';
import './Edicion2025.css';

export default function Edicion2025() {
  return (
    <div className="tec-container">
      {/* Navigation */}
      <nav className="navbar-edicion">
        <div className="nav-content-edicion">
          <div className="logo-edicion">
            <Link to="/">
              <img
                src={til}
                alt="TEC Innovation Lab Logo"
                className="logo-img-edicion"
              />
            </Link>
          </div>
          <ul className="nav-menu-edicion">
            <li><a href="#inauguracion">Inauguración</a></li>
            <li><a href="#panel">Panel</a></li>
            <li><a href="#talleres">Talleres</a></li>
            <li><a href="#rincón">Rincón de Agentes de Cambio</a></li>
            <li><a href="#break">Break</a></li>
            <li><a href="#shark-tank">Shark Tank</a></li>
            <li><a href="#premiacion">Premiación</a></li>
          </ul>
        </div>
      </nav>

      {/* Sección Inauguración */}
<section className="evento-section" id="inauguracion">
  <div className="evento-header">
    <h1 className="evento-title">Inauguración</h1>
  </div>

  <div className="evento-content">
    <p>
      El Centro de Convenciones se llenó de entusiasmo y expectativas mientras los 16 equipos 
      finalistas ingresaban al recinto, conscientes de que estaban por vivir una experiencia 
      determinante para su crecimiento personal y profesional.
    </p>

    <p>
      Durante la inauguración, los participantes recibieron mensajes clave que marcaron el 
      inicio del evento:
    </p>

    <ul className="inauguracion-list">
      <li>Inspiración por parte de estudiantes y representantes del Tec InnovAction Lab.</li>
      <li>Visión y propósito, compartidos por autoridades académicas.</li>
      <li>Una misión clara: impulsar la innovación con impacto real en la sociedad.</li>
    </ul>

    <p>
      Este fue solo el punto de partida de una jornada llena de ideas, aprendizaje y colaboración.
    </p>
  </div>

  {/* Galería de Fotos Inauguración */}
  <div className="inauguracion-gallery">
    <div className="gallery-image gallery-image-1">
      <img src={inauguracion1} alt="Inauguración 1" />
    </div>
    <div className="gallery-image gallery-image-2">
      <img src={inauguracion2} alt="Inauguración 2" />
    </div>
    <div className="gallery-image gallery-image-3">
      <img src={inauguracion3} alt="Inauguración 3" />
    </div>
  </div>
</section>


      {/* Sección Panel */}
      <section className="evento-section" id="panel">
        <div className="evento-header">
          <h1 className="evento-title">Panel</h1>
        </div>

        <div className="evento-content">
          <p>
            Antes del Shark Tank, los participantes asistieron a un panel
            diseñado para fortalecer su visión y comprensión del impacto
            social. <span className="highlight-red">"El ADN de Agentes de Cambio"</span> reunió a especialistas
            en innovación pública y transformación comunitaria, quienes
            compartieron perspectivas clave sobre el papel de los agentes
            de cambio en México.
          </p>
        </div>

        <div className="panel-grid">
          <div className="panel-text">
            <p>
              El panel contó con la participación de Juan García,
              Fabiola Navarro, Tatiana Fraga y Natalia Arriaga,
              profesionales con una trayectoria destacada en
              innovación social. Los panelistas compartieron
              herramientas prácticas para convertir una idea en
              una propuesta capaz de generar beneficios reales
              en las comunidades.
            </p>

            <p>
              A través de preguntas sobre resiliencia,
              estrategias frente a obstáculos, participación
              ciudadana y gobernanza colaborativa en contextos de
              innovación pública, los ponentes guiaron a los
              finalistas en su proceso de preparación.
            </p>

            <p>
              Este espacio resultó esencial para afianzar sus
              proyectos antes de la fase final del Shark Tank,
              consolidando una base sólida de criterio y visión
              estratégica.
            </p>
          </div>

          <div className="panel-image">
            <img src={foto_panel} alt="Panel Discussion" />
          </div>
        </div>

        {/* Videos de Panelistas */}
<div className="talleristas-section">
  <h2 className="talleristas-title">Panelistas</h2>
  
  <div className="panel-videos">
    <div className="video-item">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/JdmySDTLgfs"
          title="Video Panelista 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-caption"><span className="highlight-box">Juan García</span></p>
    </div>

    <div className="video-item">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/SFxTuFwDzpc"
          title="Video Panelista 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
       <p className="video-caption"><span className="highlight-box">Fabiola Navarro</span></p>
    </div>
  </div>
</div>

      </section>

      {/* Sección Talleres */}
      <section className="evento-section" id="talleres">
        <div className="evento-header">
          <h1 className="evento-title">Talleres</h1>
        </div>

        {/* Taller 1: Liderazgo Público */}
        <div className="taller-container">
          <div className="taller-header-box">
            <h2 className="taller-title">Liderazgo Público</h2>
          </div>

          <div className="taller-content-grid">
            <div className="taller-image">
              <img src={taller_liderazgo} alt="Taller Liderazgo Público" />
            </div>

            <div className="taller-text-highlight">
              <p className="taller-quote">
                El <span className="highlight-box">síndrome del impostor</span> es el miedo más común en personas de alto desempeño.
              </p>
            </div>
          </div>

          <div className="taller-description">
            <div className="taller-description-column">
              <p>
                En la Sala de Relaciones Internacionales se llevó a cabo el taller de Liderazgo Público con el eje temático de "El síndrome del impostor como oportunidad". Fue un espacio para hablar de frente sin rodeos del impostor, ese miedo tan común en personas de alto desempeño que pocas veces se reconoce abiertamente.
              </p>
              <p>
                A través de ejercicios prácticos y confidentes han logrado identificar vía voz interna: ¿qué dice de uno?, ¿qué palabras se repite, y en qué tono?, y así mismo se cómo impacta a su forma de liderar. El objetivo principal fue negar al Intrapersonal: ese venía de norma y hacer un plan de acción real, basado en el mismo punto de partida para el crecimiento personal.
              </p>
            </div>

            <div className="taller-description-column">
              <p>
                Durante la sesión se presentó el método de Resignificación enfocado en resultados en transformar la interpretación de las situaciones desde otro tipo de perspectiva. Se pasó de pensamientos como "soy idea no va a funcionar", a mirarse más profundamente y ver que las oportunidades sí son ese tipo de oportunidad que quedo trabajar y mejorar, logrando la clara comprensión de manera y no como freno.
              </p>
              <p>
                Además, se exploraron estrategias prácticas de dominar recogidas a errores sin caer en la dureza autocrítica, sino para reconocer logros y líderes desde el equipo personal. El taller cerró apoyando a transformar la negatividad en confianza. El taller se vivió como un espacio dinámico para romper la rigidez, conversar y crecer en liderazgo desde uno mismos, guiado por Cristóbal Rodríguez.
              </p>
            </div>
          </div>
          {/* Galería inferior del taller */}
          <div className="taller-gallery">
            <div className="taller-gallery-image">
              <img src={taller1_1} alt="Taller actividad 1" />
            </div>
            <div className="taller-gallery-image">
              <img src={taller1_2} alt="Taller actividad 2" />
            </div>
          </div>

        </div>
         {/* Taller 2: Design Thinking */}
        <div className="taller-container">
          <div className="taller-header-box">
            <h2 className="taller-title">Design Thinking</h2>
          </div>

          <div className="taller-content-grid">
            <div className="taller-image">
              <img src={taller2_1} alt="Taller Design Thinking" />
            </div>

            <div className="taller-text-highlight">
              <p className="taller-quote">
                Hay momentos donde la <span className="highlight-box">creatividad</span> deja de ser teoría y se vuelve una práctica real.
              </p>
            </div>
          </div>

          <div className="taller-description">
            <div className="taller-description-column">
              <p>
                En el marco del evento se llevó a cabo el taller de Design Thinking con <span className="highlight-box">Flor Hernández,</span>
                un espacio pensado para que el pensamiento creativo dejara de ser teoría y se convirtiera 
                en práctica real. Antes de enfrentarse a los retos principales, las y los participantes 
                aprovecharon esta sesión como punto de partida para abrir la mente, cuestionar sus ideas 
                iniciales y comenzar a diseñar con intención.
              </p>
              <p>
                Durante el taller, Flor puso sobre la mesa una idea clave: innovar no es solo imaginar cosas 
                nuevas, sino conectar con las personas desde su experiencia. A partir de ahí, se trabajó el 
                proceso de Design Thinking revisando sus etapas principales: <span className="highlight-box">Empatizar,</span> 
                <span className="highlight-box">Definir,</span> <span className="highlight-box">Idear,</span>
                <span className="highlight-box">Prototipar,</span>y <span className="highlight-box">Testear</span>. Más que una secuencia rígida, se presentó como un mapa flexible que 
                permite avanzar, regresar, explorar, y sobre todo, descubrir distintas rutas para encontrar 
                soluciones más potentes y significativas.
              </p>
            </div>

            <div className="taller-description-column">
              <p>
                Cada equipo trabajó con un caso de movilidad urbana, explorando perfiles de personas, desafíos de transporte público, automovilistas y ciudadanía en movimiento. Con estos escenarios, las y los equipos identificaron puntos de dolor, necesidades atrevidas y disruptivas, alejándose de las soluciones típicas y cuestionando cómo mejorar realmente la forma en la que nos movemos y vivimos la ciudad.
              </p>
              <p>
                Entre dinámicas, perfiles de usuario y lluvias de ideas, los asistentes aprendieron a mirar los problemas con otros ojos y, sobre todo, a trabajar desde una empatía más profunda con las personas usuarias y a retomar necesidades en torno a su problema social. El resultado fue que cada equipo convirtió en un espacio práctico y motivador que impulsó a los equipos a transformar sus intuiciones en propuestas de diseño con propósito y sentido.
              </p>
            </div>
          </div>
          {/* Galería inferior del taller */}
          <div className="taller-gallery">
            <div className="taller-gallery-image">
              <img src={taller2_2} alt="Taller actividad 1" />
            </div>
            <div className="taller-gallery-image">
              <img src={taller2_3} alt="Taller actividad 2" />
            </div>
          </div>
        </div>
        {/* Taller 3: Comunicación Estratégica */}
  <div className="taller-container">
  <div className="taller-header-box">
    <h2 className="taller-title">Comunicación Estratégica</h2>
  </div>

  <div className="taller-content-grid">
    <div className="taller-image">
      <img src={taller3_1} alt="Taller Comunicación Estratégica" />
    </div>

    <div className="taller-text-highlight">
      <p className="taller-quote">
        Las buenas ideas se venden, <span className="highlight-box">sí sabes contarlas</span>
      </p>
    </div>
  </div>

  <div className="taller-description">
    <div className="taller-description-column">
      <p>
        En el HUB de Emprendimiento se llevó a cabo el taller <span className="highlight-red">"Armando tu PITCH"</span>, impartido por Leticia Tellería, donde los estudiantes aprendieron a comunicar sus ideas con claridad, intención e impacto.
      </p>
      <p>
        Durante la sesión, los asistentes aprendieron cómo construir un pitch claro, breve y persuasivo, capaz de comunicar una idea con verdadero impacto. <span className="highlight-red">Se exploró qué es un pitch, por qué es tan importante en el mundo del emprendimiento y en contextos sociales</span>, y cómo puede ayudar a presentar iniciativas, atraer aliados o defender una propuesta frente a un comité o cliente.
      </p>
    </div>

    <div className="taller-description-column">
      <p>
        También se revisaron los diferentes tipos de pitch y se practicó la estructura esencial:
      </p>
      <ul className="pitch-list">
        <li>Identificación del problema</li>
        <li>Presentación de la solución</li>
        <li>Propuesta de valor</li>
        <li>Cierre que inspire acción</li>
      </ul>
      <p>
        Además, los estudiantes recibieron consejos clave sobre comunicación efectiva: uso de verbos de acción, historias que generen conexión, lenguaje claro, tono de voz firme, postura abierta, contacto visual y la importancia del silencio estratégico. Así, se trató de un espacio práctico y motivador que impulsó a los asistentes a transformar sus ideas en mensajes poderosos.
      </p>
    </div>
  </div>

  {/* Galería inferior del taller */}
  <div className="taller-gallery">
    <div className="taller-gallery-image">
      <img src={taller3_2} alt="Comunicación Estratégica actividad 1" />
    </div>
    <div className="taller-gallery-image">
      <img src={taller3_3} alt="Comunicación Estratégica actividad 2" />
    </div>
  </div>
</div>
{/* Talleristas */}
<div className="talleristas-section">
  <h2 className="talleristas-title">Talleristas</h2>
  
  <div className="panel-videos">
    <div className="video-item">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID_1"
          title="Tallerista Natalia Arriaga"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-caption"><span className="highlight-box">Natalia Arriaga</span></p>
    </div>

    <div className="video-item">
      <div className="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID_2"
          title="Tallerista Cristóbal Rodríguez"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="video-caption"><span className="highlight-box">Cristóbal Rodríguez</span></p>
    </div>
  </div>
</div>


      </section>
      {/* Sección Rincón de Agentes de Cambio */}
<section className="evento-section" id="rincón">
  <div className="evento-header">
    <h1 className="evento-title">Rincón Agentes de Cambio</h1>
  </div>

  <div className="rincon-content-grid">
    <div className="rincon-image">
      <img src={til} alt="Rincón de Agentes de Cambio" />
    </div>

    <div className="rincon-text">
      <p className="rincon-quote">
        <p>Las <span className="highlight-box">grandes ideas</span> empiezan con una intención: 
        <span className="highlight-box">mejorar el mundo.</span>
        </p>
      </p>
    </div>
  </div>

  <div className="rincon-description">
    <div className="rincon-description-column">
      <p>
        La feria de innovación "Rincón de Agentes de Cambio" reunió a estudiantes de nivel preparatoria 
        que presentaron proyectos diseñados para generar un impacto positivo en su comunidad. Durante el evento, 
        los asistentes pudieron recorrer cada stand y conocer propuestas creativas enfocadas en temas sociales, 
        ambientales y tecnológicos. Los alumnos mostraron con orgullo sus ideas innovadoras, explicaron sus propuestas 
        y trabajo en equipo, mientras compartían con jueces y visitantes el objetivo y funcionamiento de sus soluciones.
      </p>
    </div>

    <div className="rincon-description-column">
      <p>
        El público tuvo la oportunidad de participar activamente votando por sus proyectos favoritos, mientras que un
        panel de jueces evaluó cada propuesta considerando criterios como innovación, viabilidad e impacto.
      </p>
      <p>
        Al finalizar la jornada, se reconoció el esfuerzo de todos los participantes y se anunciaron los tres equipos 
        ganadores que avanzaron a la gran final. Estos equipos destacaron por la claridad de sus ideas, la calidad de 
        sus presentaciones y el potencial de sus propuestas. Así, los tres ganadores obtuvieron su pase a la final, 
        donde compitieron nuevamente para demostrar su talento como verdaderos agentes de cambio.
      </p>
    </div>
  </div>
  
</section>
    {/* Sección Break con TEUS */}
<section className="evento-section" id="break">
  <div className="evento-header">
    <h1 className="evento-title">Break</h1>
  </div>

  <div className="break-subtitle">
    <p>
      Un <span className="highlight-red">pequeño break con TEUS</span> antes de continuar con la agenda del día
    </p>
  </div>

  <div className="masonry-gallery">
    <div className="masonry-item">
      <img src={comida1} alt="Break TEUS 1" />
    </div>
    <div className="masonry-item">
      <img src={comida2} alt="Break TEUS 2" />
    </div>
    <div className="masonry-item">
      <img src={comida3} alt="Break TEUS 3" />
    </div>
    <div className="masonry-item">
      <img src={comida4} alt="Break TEUS 4" />
    </div>
    <div className="masonry-item">
      <img src={comida5} alt="Break TEUS 5" />
    </div>
    <div className="masonry-item">
      <img src={comida6} alt="Break TEUS 6" />
    </div>
    <div className="masonry-item">
      <img src={comida7} alt="Break TEUS 7" />
    </div>
    <div className="masonry-item">
      <img src={comida8} alt="Break TEUS 8" />
    </div>
    <div className="masonry-item">
      <img src={comida9} alt="Break TEUS 9" />
    </div>
    <div className="masonry-item">
      <img src={comida10} alt="Break TEUS 10" />
    </div>
    <div className="masonry-item">
      <img src={comida11} alt="Break TEUS 11" />
    </div>
    <div className="masonry-item">
      <img src={comida12} alt="Break TEUS 12" />
    </div>
    <div className="masonry-item">
      <img src={comida13} alt="Break TEUS 13" />
    </div>
    <div className="masonry-item">
      <img src={comida14} alt="Break TEUS 14" />
    </div>
  </div>
</section>
{/* Sección Shark Tank */}
<section className="evento-section" id="shark-tank">
  <div className="evento-header">
    <h1 className="evento-title">Shark Tank</h1>
  </div>

  <div className="taller-container">
    <div className="taller-content-grid">
      <div className="taller-image">
        <img src={sh_tnk1} alt="Shark Tank" />
      </div>

      <div className="taller-text-highlight">
        <p className="taller-quote">
          El <span className="highlight-box">momento de la verdad</span>
        </p>
      </div>
    </div>

    <div className="taller-description">
      <div className="taller-description-column">
        <p>
          El momento más crucial del evento organizado, producido y realizado por el <span className="highlight-red">Lab del Tec de Monterrey campus Puebla</span>, fue la competencia al estilo Shark Tank. Toda la preparación, el aprendizaje y los nervios de los participantes convergieron en un solo espacio para este enfrentamiento decisivo.
        </p>
      </div>

      <div className="taller-description-column">
        <p>
          Se abrieron las puertas del Shark Tank para recibir a cinco equipos finalistas: tres de Preparatoria y dos del Sprint de Innovación. Estos jóvenes innovadores se enfrentaron a un panel de <span className="highlight-red">"Tiburones"</span> (jueces e inversores), entre los cuales se distinguía la presencia de una corporación como <span className="highlight-red">AT&T</span>.
        </p>
      </div>
    </div>

    {/* Galería inferior del Shark Tank */}
    <div className="taller-gallery">
      <div className="taller-gallery-image">
        <img src={sh_tnk2} alt="Shark Tank momento 1" />
      </div>
      <div className="taller-gallery-image">
        <img src={sh_tnk3} alt="Shark Tank momento 2" />
      </div>
    </div>
  </div>
</section>



    </div>
    
  );
}