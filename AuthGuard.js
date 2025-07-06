(function () {
  // Función para detectar si es PC o pantalla grande
  function isNotMobile() {
    const ua = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
    const isSmallScreen =
      window.innerWidth <= 768 && window.innerHeight <= 1024;
    return !(isMobile && isSmallScreen);
  }

  // Función para redirigir a una página en blanco
  function redirectToBlank() {
    window.location.href = "about:blank"; // También puedes poner otra página si quieres despistar aún más
  }

  // Si NO es móvil, redirige a página blanca
  if (isNotMobile()) {
    redirectToBlank();
  }

  // Bloquear combinaciones de teclas típicas
  window.addEventListener("keydown", function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" || e.key === "C" || e.key === "J")) ||
      (e.ctrlKey && (e.key === "U" || e.key === "S" || e.key === "P"))
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  // Bloquear click derecho
  window.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  // Detectar apertura de DevTools
  let threshold = 160;
  setInterval(function () {
    const start = new Date();
    debugger;
    const end = new Date();
    if (end - start > threshold) {
      redirectToBlank();
    }
  }, 500);

  // Bloquear seleccionar texto o arrastrar elementos
  document.addEventListener("selectstart", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());
})();

// Evitar el zoom por "pinch" (pellizcar)
document.addEventListener(
  "touchmove",
  function (event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  },
  { passive: false }
);

// Evitar el zoom por doble click
let lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);

// Evitar doble click con mouse
document.addEventListener(
  "dblclick",
  function (e) {
    e.preventDefault();
  },
  false
);
