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
            <li><a href="#shark-tank">Shark Tank</a></li>
            <li><a href="#premiacion">Premiación</a></li>
            <li><a href="#participantes">Participantes</a></li>
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
        <div className="panel-videos">
          <div className="video-item">
            <div className="video-wrapper">
              <iframe
                src="https://youtube.com/shorts/JdmySDTLgfs?feature=share"
                title="Video Panelista 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-caption">Panelista Fabiola Navarro</p>
          </div>

          <div className="video-item">
            <div className="video-wrapper">
              <iframe
                src="https://youtube.com/shorts/SFxTuFwDzpc?feature=share"
                title="Video Panelista 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="video-caption">Panelista Juan García</p>
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

      </section>
    </div>
  );
}