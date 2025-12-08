import { useState } from 'react';
import til from './assets/til.png';
import './App.css';
import { Link } from "react-router-dom";


export default function TecInnovationLab() {
  return (
    <div className="tec-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
            <img src={til} alt="TEC Innovation Lab Logo" className="logo-img"/>
          </div>
          <ul className="nav-menu">
            <li><a href="#inauguracion">¿Qué es TIL?</a></li>
            <li><a href="#panel">¿Como funciona?</a></li>
            <li><a href="#talleres">Numeralia</a></li>
            <li><a href="#mesas">Nuestros Proyectos</a></li>
            <li><a href="#shark-tank">Contacto</a></li>
            <li><a href="#premiacion">Créditos</a></li>
            <li><Link to="/edicion-2025">Edición 2025</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-title">
            Innova, <br />Crea y
            Transforma <br />el
            Futuro
          </p>
          {/* <p className="hero-description">
            Realizamos <span className="highlight">un web, brand identity y content creation</span> que pretendió<br />
            ser marco, uso diario<br />
            y el legado del evento.
          </p> */}
        </div>
      </section>

      {/* Main Image Section */}
      <section className="main-image-section">
        <div className="main-image">
          <div className="image-content">
            <div className="brand-display">
                <img src={til} alt="TIL" className="logo-imagen"/>          
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="about-title">
          ¿Qué es el <span className="highlight-red">Tec Innovaction Lab</span>?
        </h2>
        
        <div className="about-content">
          <p className="about-text">
            El Tec Innovaction Lab es un laboratorio ciudadano del Tecnológico de Monterrey orientado a fortalecer la participación juvenil en la vida 
            pública. A través de herramientas de innovación pública, metodologías ágiles y un enfoque contextualizado en las realidades locales, el 
            Programa invita a los jóvenes a <span className="underline-red">involucrarse en la universidad</span> para que se conviertan en agentes activos de transformación social.
          </p>
          
          <p className="about-text">
            El laboratorio surge ante la limitada participación de las y los jóvenes en procesos de toma de decisiones y en el desempeño local sostenible. 
            En su primera edición en Puebla, el Tec Innovaction Lab se enfocó en fomentar la colaboración entre <span className="underline-red">juventud, gobierno, industria y ciudadanía</span> donde las ideas estudiantes 
            pueden traducirse en acciones concretas con impacto comunitario.
          </p>
        </div>
      </section>
    </div>
  );
}