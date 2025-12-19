import { Link } from "react-router-dom";
import til from '../assets/til.png';
import inauguracion1 from '../assets/inauguracion1.jpeg';
import inauguracion2 from '../assets/inauguracion2.jpeg';
import inauguracion3 from '../assets/inauguracion3.jpeg';
import panel1 from '../assets/panel_1.jpg';
import taller_liderazgo from '../assets/taller_liderazgo.png';
import taller1_1 from '../assets/taller1_1.png';
import taller1_2 from '../assets/taller1_2.png';
import taller2_1 from '../assets/taller2_1.png';
import taller2_2 from '../assets/taller2_2.png';
import taller2_3 from '../assets/taller2_3.jpg';
import taller3_1 from '../assets/taller3_1.png';
import taller3_2 from '../assets/taller3_2.png';
import taller3_3 from '../assets/comunicacion3.jpeg';
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
import premiacion1 from '../assets/premiacion1.jpeg';
import premiacion2 from '../assets/premiacion2.jpeg';
import premiacion3 from '../assets/premiacion3.png';
import premiacion4 from '../assets/premiacion4.png';
import premiacion5 from '../assets/premiacion5.png';
import rincon1 from '../assets/rincon1.jpeg';

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
  <div className="evento-content">
    <p>
      El Centro de Convenciones se llenó de <span className="highlight-box-inline">entusiasmo</span> y <span className="highlight-box-inline">expectativas</span> 
      mientras los 16 equipos finalistas ingresaban al recinto, conscientes de que estaban por vivir una <span className="highlight-box-inline">experiencia determinante</span> para su crecimiento personal y profesional.
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
            social. <span className="highlight-box-inline">"El ADN de Agentes de Cambio"</span> reunió a especialistas
            en innovación pública y transformación comunitaria, quienes
            compartieron perspectivas clave sobre el papel de los agentes
            de cambio en México.
          </p>
        </div>

        <div className="panel-grid">
          <div className="panel-text">
            <p>
              El panel contó con la participación de <span className="highlight-box-inline">Juan García,</span>
              <span className="highlight-box-inline">Fabiola Navarro,</span>
              <span className="highlight-box-inline">Tatiana Fraga</span>
               y <span className="highlight-box-inline">Natalia Arriaga</span>,
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
            <img src={panel1} alt="Panel Discussion" />
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
                En la Sala de Relaciones Internacionales se llevó a cabo el taller de Liderazgo Público con el eje
                “Transforma la inseguridad en áreas de oportunidad”. Fue un espacio para hablar de frente del síndrome del impostor,
                ese <span className="highlight-box-inline">miedo</span> tan común en personas de alto desempeño que pocas veces se reconoce abiertamente.
              </p>
              <p>
                A partir de esta idea central, las y los participantes trabajaron en identificar esa voz interna que repite 
                “no eres lo suficientemente bueno” y en reconocer cómo <span className="highlight-box-inline">impacta</span> en su forma de 
                <span className="highlight-box-inline">liderar.</span> El objetivo no fue negar la inseguridad,
                sino verla de frente y entender que también puede convertirse en un punto de partida para el 
                <span className="highlight-box-inline">crecimiento personal.</span>
              </p>
            </div>

            <div className="taller-description-column">
              <p>
                Durante la sesión se presentó el <span className="highlight-box-inline"> método de resignificación,</span> 
                enfocado en transformar el autosabotaje en <span className="highlight-box-inline">oportunidad</span> 
                a través del cambio de perspectiva. Se pasó de pensamientos como “mi idea no va a funcionar” a miradas
                más constructivas del tipo “mi innovación tiene áreas de oportunidad que puedo trabajar y mejorar”,  
                usando la duda como motor de mejora y no como freno.
              </p>
              <p>
                Además, se exploraron estrategias prácticas de identificación de errores sin caer en la culpa,
                de autenticidad para reconocer logros y liderar desde quiénes somos realmente, y de resiliencia
                para transformar la inseguridad en <span className="highlight-box-inline">confianza</span>. El taller se vivió como un espacio dinámico para  
                formar líderes públicos más conscientes y seguros de sí mismos, guiado por Cristóbal Rodríguez.
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
                Hay momentos donde la <span className="highlight-box">creatividad</span> 
                deja de ser teoría y se vuelve una práctica real.
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
                proceso de Design Thinking revisando sus etapas principales: <span className="highlight-box-inline">Empatizar,</span> 
                <span className="highlight-box-inline">Definir,</span><span className="highlight-box-inline">Idear,</span>
                <span className="highlight-box-inline">Prototipar,</span> y <span className="highlight-box-inline">Testear</span>. Más que una secuencia rígida, se presentó como un mapa flexible que 
                permite avanzar, regresar, explorar, y sobre todo, descubrir distintas rutas para encontrar 
                soluciones más potentes y significativas.
              </p>
            </div>

            <div className="taller-description-column">
              <p>
                Cada equipo trabajó con un caso de movilidad urbana, explorando perfiles de personas, desafíos de transporte
                público, automovilistas y ciudadanía en movimiento. Con estos escenarios, las y los equipos identificaron 
                puntos de dolor, <span className="highlight-box-inline">necesidades atrevidas</span> y disruptivas, alejándose de las soluciones típicas y cuestionando 
                cómo mejorar realmente la forma en la que nos movemos y vivimos la ciudad.
              </p>
              <p>
                Entre dinámicas, perfiles de usuario y lluvias de ideas, los asistentes aprendieron a mirar 
                los problemas desde nuevas perspectivas, a practicar una empatía más profunda con las personas 
                usuarias y a identificar necesidades de fondo antes de proponer respuestas. Así, el taller se convirtió 
                en un espacio práctico y motivador que impulsó a los equipos a transformar sus intuiciones en propuestas
                de diseño con propósito y sentido.
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
        En el HUB de Emprendimiento se llevó a cabo el taller <span className="highlight-box">"Armando tu PITCH"</span>, 
        impartido por Leticia Tellería, donde los estudiantes aprendieron a comunicar sus ideas con claridad, intención e impacto.
      </p>
      <p>
        Durante la sesión, los asistentes aprendieron cómo construir un pitch <span className="highlight-box-inline">claro,</span>
        <span className="highlight-box-inline">breve</span> y <span className="highlight-box-inline">persuasivo</span>, capaz de 
        <span className="highlight-box-inline">comunicar una idea</span>con verdadero impacto. Se exploró qué es un pitch, por qué es tan importante en el mundo del 
        emprendimiento y en contextos sociales, y cómo puede ayudar a presentar iniciativas, atraer aliados o defender una 
        propuesta frente a un comité o cliente.
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
        Además, los estudiantes recibieron <span className="highlight-box-inline">consejos clave</span> sobre comunicación efectiva: uso de verbos de acción,
         historias que generen conexión, lenguaje claro, tono de voz firme, postura abierta, contacto visual y 
         la importancia del silencio estratégico. Así, se trató de un espacio práctico y motivador que impulsó a
          los asistentes a transformar sus ideas en mensajes poderosos.
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
      <img src={rincon1} alt="Rincón de Agentes de Cambio" />
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
        que presentaron proyectos diseñados para generar un <span className="highlight-box-inline">impacto positivo</span>
        en su comunidad. Durante el evento, 
        los asistentes pudieron recorrer cada stand y conocer <span className="highlight-box-inline">propuestas creativas</span>
        enfocadas en temas sociales, 
        ambientales y tecnológicos. Los alumnos <span className="highlight-box-inline">mostraron</span> con orgullo sus ideas innovadoras, explicaron sus propuestas 
        y trabajo en equipo, mientras compartían con jueces y visitantes el objetivo y funcionamiento de sus soluciones.
      </p>
    </div>

    <div className="rincon-description-column">
      <p>
        El público tuvo la oportunidad de <span className="highlight-box-inline">participar</span> activamente <span className="highlight-box-inline">votando</span> por sus proyectos favoritos, mientras que un
        panel de jueces evaluó cada propuesta considerando criterios como <span className="highlight-box-inline">innovación,</span><span className="highlight-box-inline">viabilidad</span>e <span className="highlight-box-inline">impacto</span>.
      </p>
      <p>
        Al finalizar la jornada, se reconoció el esfuerzo de todos los participantes y se anunciaron los tres equipos 
        ganadores que avanzaron a la <span className="highlight-box-inline">gran final</span>. Estos equipos destacaron por la claridad de sus ideas, la calidad de 
        sus presentaciones y el potencial de sus propuestas. Así, los tres ganadores obtuvieron su pase a la final, 
        donde <span className="highlight-box-inline">compitieron</span>nuevamente para demostrar su talento como verdaderos agentes de cambio.
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
        <h2 className="shark-tank-subtitle">
          El momento <span className="highlight-box">de la verdad</span>
        </h2>
      </div>
    </div>

    <div className="taller-description">
      <div className="taller-description-column">
        <p>
          El momento más crucial del evento organizado, producido y realizado por el 
          <span className="highlight-box-inline">Lab del Tec de Monterrey campus Puebla</span>, 
          fue la competencia al estilo Shark Tank. Toda la preparación, el aprendizaje y 
          los nervios de los participantes convergieron en un solo espacio para este <span className="highlight-box-inline">enfrentamiento</span>decisivo.
        </p>
      </div>

      <div className="taller-description-column">
        <p>
          Se abrieron las puertas del Shark Tank para recibir a cinco equipos finalistas: 
          tres de Preparatoria y dos del Sprint de Innovación. Estos jóvenes innovadores se 
          enfrentaron a un panel de <span className="highlight-box-inline">"Tiburones"</span>(jueces e inversores), 
          entre los cuales se distinguía la presencia de nuestro principal patrocinador <span className="highlight-box-inline">AT&T</span>.
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

    {/* Título después de las imágenes */}
    <div className="shark-tank-decisiones">
      <h2 className="shark-tank-subtitle-large">
        Las decisiones fueron <span className="highlight-box">casi imposibles</span>
      </h2>
    </div>
  </div>

{/* Continuación Shark Tank - El momento de la verdad */}
<div className="taller-container">
  <div className="taller-description">
    <div className="taller-description-column">
      <p>
        Cada equipo dispuso de un tiempo total de diez minutos que podía cambiarlo todo. 
        La estructura era estricta: solo tres minutos para presentar su proyecto con un 
        pitch poderoso, seguidos de siete minutos de preguntas directas e incisivas centradas 
        en dos pilares fundamentales: el <span className="highlight-box-inline">impacto social o 
          económico</span> y la <span className="highlight-box-inline">viabilidad práctica</span> de sus propuestas.
      </p>
    </div>

    <div className="taller-description-column">
      <p>
        Una vez concluidas las presentaciones, la tensión se elevó mientras los Tiburones
        deliberaban. Las decisiones finales fueron descritas como "casi imposibles" de tomar, dada
        la calidad de los proyectos. El evento culminó con la clausura y la premiación, celebrando
        que el nivel de la <span className="highlight-box-inline">innovacion publica</span>demostrada por cada equipo representaba el futuro de México.
      </p>
    </div>
  </div>

  {/* Imagen grande horizontal */}
  <div className="shark-tank-image-full">
    <img src={sh_tnk4} alt="Las decisiones fueron casi imposibles" />
  </div>
</div>
</section>
{/* Sección Premiación */}
<section className="evento-section" id="premiacion">
  <div className="taller-container">
    <div className="shark-tank-decisiones">
      <h2 className="shark-tank-subtitle-large">
        El momento <span className="highlight-box">más esperado</span>
      </h2>
    </div>

    {/* Galería de 2 imágenes */}
    <div className="taller-gallery">
      <div className="taller-gallery-image">
        <img src={premiacion1} alt="Clausura" />
      </div>
      <div className="taller-gallery-image">
        <img src={premiacion2} alt="Premiación" />
      </div>
    </div>

    <div className="evento-header premiacion-header">
      <h1 className="evento-title">Premiación</h1>
    </div>

    <div className="taller-description">
      <div className="taller-description-column">
        <p>
          Tras la intensidad del Shark Tank, llegó uno de los momentos más esperados de toda la jornada: la premiación. 
          Después de escuchar cada pitch, evaluar la <span className="highlight-box-inline">claridad de las propuestas</span>, su viabilidad, su capacidad de 
          impacto y la forma en que los equipos defendieron sus ideas frente a los jueces, los sharks se 
          reunieron para <span className="highlight-box-inline">deliberar</span>. Fue un proceso complejo, lleno de comparaciones detalladas, discusiones 
          y revisiones cuidadosas, pues el nivel de los proyectos había puesto la vara extremadamente alta.
        </p>
      </div>

      <div className="taller-description-column">
        <p>
          Mientras los participantes esperaban, el ambiente se llenó de <span className="highlight-box-inline">expectativa.</span>Los equipos conversaban entre sí,
          repasaban mentalmente sus intervenciones y cruzaban miradas de <span className="highlight-box-inline">incertidumbre</span>
          y <span className="highlight-box-inline">orgullo</span> por el trabajo realizado.
          Finalmente, las luces se encendieron, el público tomó asiento y los jueces regresaron al escenario listos para anunciar los resultados.
        </p>
      </div>
    </div>
  </div>
  {/* Imagen horizontal grande de equipos ganadores */}
<div className="taller-container">
  <div className="shark-tank-image-full">
    <img src={premiacion3} alt="Equipos ganadores" />
  </div>

  {/* Un cierre lleno de inspiración */}
  <div className="shark-tank-decisiones">
    <h2 className="shark-tank-subtitle-large">
      Un cierre lleno de <span className="highlight-box">inspiración</span>
    </h2>
  </div>

  {/* Grid: Texto izquierda + 2 imágenes derecha */}
  <div className="premiacion-grid">
    <div className="premiacion-text">
      <p>
        Con un mensaje de <span className="highlight-box-inline">reconocimiento</span>al esfuerzo y al talento demostrado, se dieron a conocer los nombres 
        de los <span className="highlight-box-inline">cinco equipos seleccionados</span> destacaron por la solidez 
        de sus propuestas, su capacidad para comunicar una visión clara y la pertinencia de las soluciones 
        ofrecidas a los desafíos de sus comunidades. Entre aplausos, emociones y rostros llenos, la premiación 
        marcó el cierre y reafirmó el compromiso con el liderazgo, innovación y compromiso social.
      </p>
      <p>
        Así concluyó el Tec InnovAction Lab 2025:<span className="highlight-box-inline">celebrando a jovenes</span>que, con creatividad y determinación, 
        demostraron que tienen todo para convertirse en los próximos <span className="highlight-box-inline">agentes de cambio.</span>
      </p>
    </div>

    <div className="premiacion-images">
      <div className="premiacion-image-item">
        <img src={premiacion4} alt="Premiación momento 1" />
      </div>
      <div className="premiacion-image-item">
        <img src={premiacion5} alt="Premiación momento 2" />
      </div>
    </div>
  </div>

  {/* Título final */}
  <div className="shark-tank-decisiones">
    <h2 className="shark-tank-subtitle-large">
      Los equipos demostraron que la <span className="highlight-box">innovación no</span> tiene edad. 
      Cada propuesta dejó huella y <span className="highlight-box">motivó a toda</span>la comunidad.
    </h2>
  </div>
</div>

</section>



</div>


    
  );
}