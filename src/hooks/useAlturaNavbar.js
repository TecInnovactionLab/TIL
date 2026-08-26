import { useEffect } from "react";

/**
 * Publica la altura real del navbar en la variable CSS --navbar-h.
 *
 * El navbar es `position: fixed`, así que no ocupa espacio en el flujo: el
 * contenido de abajo necesita un padding superior equivalente. Ese padding
 * estaba escrito a mano (10rem) y se desfasa en cuanto el menú envuelve en
 * varias filas, cosa que depende del ancho y de cuántos enlaces tenga.
 * Midiéndolo con un ResizeObserver, el CSS siempre usa el valor correcto.
 *
 * @param {string} selector - selector del navbar de la página.
 */
export default function useAlturaNavbar(selector = ".navbar") {
  useEffect(() => {
    const navbar = document.querySelector(selector);
    if (!navbar) return;

    const aplicar = () => {
      const alto = navbar.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--navbar-h", `${alto}px`);
    };

    aplicar();

    const observer = new ResizeObserver(aplicar);
    observer.observe(navbar);
    window.addEventListener("resize", aplicar);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", aplicar);
      document.documentElement.style.removeProperty("--navbar-h");
    };
  }, [selector]);
}
