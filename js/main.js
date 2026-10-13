/* =========================================================================
   cactus® · web · v7 · interacciones
   Las animaciones van siempre (como en juliamarro.com); se apagan con ?motion=0.
   ========================================================================= */
(function () {
  "use strict";

  /* ---------- contacto ---------- */
  var CONFIG = {
    whatsapp: "5491163596278",   // +54 9 11 6359-6278
    email: "estudio.c4ctus@gmail.com"
  };

  /* ---------- proyectos: lo que se abre al tocar un trabajo ----------
     slides: { src, w, h, alt } para imágenes o { video, poster, w, h, alt } para videos (arrancan con sonido, a la mitad de volumen).
     g = la parte del proyecto (video, reel, manual, redes…): arma los botones que van abajo del texto.
     tall: true = pieza larga que se recorre bajando (tw = ancho máximo en px). loop: true = video que se repite solo. */
  var PROJECTS = {
    cactus: {
      kind: "identidad propia · manual y video",
      title: "cactus®",
      meta: [["cliente", "cactus®"], ["servicios", "logotipo, reducciones, trama, manual de marca, video"], ["año", "2026"]],
      text: [
        "Nuestra propia marca. El logotipo combina letras en Poppins Bold con una A dibujada a mano en forma de estrella, y tiene dos reducciones para formatos chicos: el monograma CA y la A estrella.",
        "Tres colores (verde, negro y blanco), la Aston Script para los remates y una trama con la A repetida en filas a 20°.",
        "El video cuenta el manual en medio minuto. Arranca con un teléfono que suena: es tu marca preguntando por nosotros."
      ],
      slides: [
        { video: "assets/trabajos/cactus/cactus-video.mp4", poster: "assets/trabajos/cactus/cactus-video.jpg", w: 1920, h: 1080, g: "video", alt: "Video de marca de cactus®, versión horizontal: suena un teléfono, aparece Nos llaman? ah sí, es tu marca preguntando por cactus, y sigue el manual de marca: logotipo, grilla, monograma, tipografías, colores, trama y aplicaciones" },
        { video: "assets/trabajos/cactus/cactus-reel.mp4", poster: "assets/trabajos/cactus/cactus-reel.jpg", w: 1080, h: 1920, g: "reel", alt: "Video de marca de cactus®, versión reel vertical, con el mismo recorrido" },
        { src: "assets/trabajos/cactus/manual-01.webp", w: 1800, h: 1272, g: "manual", alt: "Tapa del manual de marca de cactus®: el logotipo en negro sobre verde, edición 2026" },
        { src: "assets/trabajos/cactus/manual-02.webp", w: 1800, h: 1272, g: "manual", alt: "Índice del manual: catorce secciones, de la marca a contacto" },
        { src: "assets/trabajos/cactus/manual-03.webp", w: 1800, h: 1272, g: "manual", alt: "La marca: Nos llaman? ah sí, es tu marca preguntando por cactus, con el teléfono plegable y la lista de servicios" },
        { src: "assets/trabajos/cactus/manual-04.webp", w: 1800, h: 1272, g: "manual", alt: "Logotipo de cactus® en negro sobre blanco: letras en Poppins Bold y una A dibujada a mano en forma de estrella" },
        { src: "assets/trabajos/cactus/manual-05.webp", w: 1800, h: 1272, g: "manual", alt: "Grilla de construcción del logotipo: ascendente, altura x, eje, línea base y el módulo verde" },
        { src: "assets/trabajos/cactus/manual-06.webp", w: 1800, h: 1272, g: "manual", alt: "Reducciones: el monograma CA y la A estrella" },
        { src: "assets/trabajos/cactus/manual-07.webp", w: 1800, h: 1272, g: "manual", alt: "Área de resguardo de un módulo por lado y tamaños mínimos del logotipo y las reducciones" },
        { src: "assets/trabajos/cactus/manual-08.webp", w: 1800, h: 1272, g: "manual", alt: "Versiones de color: cuatro combinaciones de negro, blanco y verde" },
        { src: "assets/trabajos/cactus/manual-09.webp", w: 1800, h: 1272, g: "manual", alt: "Usos incorrectos del logotipo: no deformar, no rotar, no cambiar colores, no agregar efectos, no usar sin contraste, no separar las letras" },
        { src: "assets/trabajos/cactus/manual-10.webp", w: 1800, h: 1272, g: "manual", alt: "Paleta de color: blanco #F6F6F6, negro #191919 y verde #7BE600" },
        { src: "assets/trabajos/cactus/manual-11.webp", w: 1800, h: 1272, g: "manual", alt: "Tipografía principal: Poppins, con sus pesos Bold, Regular y Light Italic" },
        { src: "assets/trabajos/cactus/manual-12.webp", w: 1800, h: 1272, g: "manual", alt: "Tipografía secundaria: Aston Script, en negro sobre verde" },
        { src: "assets/trabajos/cactus/manual-13.webp", w: 1800, h: 1272, g: "manual", alt: "Combinación tipográfica: Poppins y Aston Script, juntas o por separado" },
        { src: "assets/trabajos/cactus/manual-14.webp", w: 1800, h: 1272, g: "manual", alt: "Trama: la A estrella repetida en filas a 20 grados, en negro sobre verde y en verde sobre negro" },
        { src: "assets/trabajos/cactus/manual-15.webp", w: 1800, h: 1272, g: "manual", alt: "Aplicaciones: dos afiches Nos llaman?, sobre blanco y sobre negro, con el teléfono verde" },
        { src: "assets/trabajos/cactus/manual-16.webp", w: 1800, h: 1272, g: "manual", alt: "Aplicaciones: cuatro historias verticales para redes, dos de Nos llaman? y dos con los servicios" },
        { src: "assets/trabajos/cactus/manual-17.webp", w: 1800, h: 1272, g: "manual", alt: "Contacto: el logotipo en blanco sobre negro, el mail estudio.c4ctus@gmail.com y no te quedes afuera" },
        { src: "assets/img/logo-papel-negro.webp", w: 1440, h: 810, g: "piezas", alt: "Logotipo de cactus® en blanco sobre papel negro" },
        { src: "assets/img/cactus-papel-verde.webp", w: 900, h: 1126, g: "piezas", alt: "Logotipo de cactus® impreso sobre papel verde" },
        { src: "assets/img/trama-verde.webp", w: 900, h: 900, g: "piezas", alt: "Trama de la A estrella a 20 grados sobre verde" },
        { src: "assets/img/afiche-blanco.webp", w: 900, h: 1126, g: "piezas", alt: "Afiche Nos llaman? sobre blanco, con el teléfono verde" },
        { src: "assets/img/afiche-negro.webp", w: 900, h: 1126, g: "piezas", alt: "Afiche Nos llaman? sobre negro" },
        { src: "assets/img/poster-frases-verde.webp", w: 900, h: 1126, g: "piezas", alt: "Afiche verde: probando frases para testear distintas gráficas" },
        { src: "assets/img/poster-colores-negro.webp", w: 900, h: 1126, g: "piezas", alt: "Afiche negro: probando todos los colores juntos" },
        { src: "assets/img/poster-frases-negro.webp", w: 900, h: 1126, g: "piezas", alt: "Afiche negro: probando frases, versión negra" }
      ]
    },
    julia: {
      kind: "arte de disco · tipografía · web",
      title: "Julia Marro",
      meta: [["cliente", "Julia Marro"], ["servicios", "arte de disco, tipografía, diseño web"], ["sitio", "<a href=\"https://juliamarro.com\" target=\"_blank\" rel=\"noopener\">juliamarro.com</a>"], ["año", "2026"]],
      text: [
        "A Julia Marro, productora y artista de Buenos Aires, le hicimos todo lo de su disco Boston a BSAS: la tapa, el collage, la contratapa y una tipografía pensada para ella. También su web, juliamarro.com.",
        "La web es su portfolio y su disco en una sola página. El bloque del disco es la tapa hecha sitio: los autos pasan por atrás del cartel, la foto se destapa a color con el mouse y los temas, escritos con su tipografía, suenan con un clic."
      ],
      slides: [
        { video: "assets/trabajos/julia/julia-web-y-disco.mp4", poster: "assets/trabajos/julia/julia-web-y-disco-poster.jpg", w: 1440, h: 810, g: "video", alt: "Video: recorrido por juliamarro.com y el arte del disco Boston a BSAS, con carteles que cuentan cómo se hizo" },
        { src: "assets/trabajos/julia/web-inicio.webp", w: 1920, h: 1080, g: "web", alt: "Inicio de juliamarro.com: Julia Marro tocando el bajo en blanco y negro, con su nombre en grande" },
        { src: "assets/trabajos/julia/web-cartel.webp", w: 1920, h: 1080, g: "web", alt: "El bloque del disco en el sitio: un Fitito pasa por atrás del cartel y el grafiti Boston a BSAS se prende en verde" },
        { src: "assets/trabajos/julia/web-lupa.webp", w: 1920, h: 1080, g: "web", alt: "El mouse sobre la foto del cartel destapa el collage a color adentro de un círculo" },
        { src: "assets/trabajos/julia/web-temas.webp", w: 1920, h: 1080, g: "web", alt: "La lista de temas con los títulos escritos a mano; Dance abierto, con su onda y sus créditos" },
        { src: "assets/trabajos/julia/web-movil.webp", w: 2000, h: 1402, g: "web", alt: "El sitio en el celular: el inicio, el cartel del disco y la lista completa de temas" },
        { src: "assets/trabajos/julia/disco-tapa.webp", w: 2000, h: 2000, g: "disco", alt: "Tapa de Boston a BSAS: un cartel verde de Buenos Aires con un collage en blanco y negro adentro y el título en grafiti" },
        { src: "assets/trabajos/julia/disco-collage.webp", w: 2000, h: 2000, g: "disco", alt: "El collage a color: gente, carteles, un kiosco de diarios y una bandera argentina bajo un arco, con edificios de Boston al fondo" },
        { src: "assets/trabajos/julia/disco-contratapa.webp", w: 2000, h: 2000, g: "disco", alt: "Contratapa: los nueve temas escritos a mano sobre una vista de Buenos Aires" },
        { src: "assets/trabajos/julia/disco-cd.webp", w: 1724, h: 1152, g: "disco", alt: "El CD: la caja cerrada con la tapa y la caja abierta con la contratapa y el disco" }
      ]
    },
    topados: {
      kind: "restyling de marca",
      title: "Topados",
      meta: [["marca", "Topados, alfajores"], ["servicios", "restyling, manual de marca, reel"], ["año", "2026"]],
      text: [
        "Restyling de marca para Topados, alfajores. El imagotipo nuevo lleva un escudo con una T y se usa completo, solo el logotipo o solo el isotipo.",
        "El manual define Georgia y Public Sans como tipografías, dos tramas y una combinación de colores para cada variedad: son seis, del dulce de leche con chocolate negro al Chocolate Intenso Black.",
        "El reel muestra el logotipo que cambia de letra hasta llegar al nuevo, la paleta, la trama y el packaging."
      ],
      slides: [
        { video: "assets/trabajos/topados/topados-reel.mp4", poster: "assets/trabajos/topados/topados-reel.jpg", w: 1080, h: 1920, g: "reel", alt: "Reel del restyling de marca de Topados: el logotipo cambia de tipografía hasta llegar al nuevo, aparece el escudo, la paleta por variedad, la trama y los alfajores con su packaging" },
        { src: "assets/trabajos/topados/manual-01.webp", w: 1800, h: 1272, g: "manual", alt: "Tapa del manual de marca de Topados: el imagotipo en crema sobre marrón" },
        { src: "assets/trabajos/topados/manual-02.webp", w: 1800, h: 1272, g: "manual", alt: "Trama de Topados a página completa, en marrón sobre crema" },
        { src: "assets/trabajos/topados/manual-03.webp", w: 1800, h: 1272, g: "manual", alt: "Índice del manual: signo marcario, tipografía, paleta cromática, elementos gráficos y aplicación de marca" },
        { src: "assets/trabajos/topados/manual-04.webp", w: 1800, h: 1272, g: "manual", alt: "Carátula de sección: Signo marcario" },
        { src: "assets/trabajos/topados/manual-05.webp", w: 1800, h: 1272, g: "manual", alt: "Imagotipo de Topados: un escudo con una T sostenido por dos armadillos, con corona y una planta arriba, sobre el logotipo" },
        { src: "assets/trabajos/topados/manual-06.webp", w: 1800, h: 1272, g: "manual", alt: "Área de reserva del imagotipo, marcada con el motivo de la trama" },
        { src: "assets/trabajos/topados/manual-07.webp", w: 1800, h: 1272, g: "manual", alt: "Variables de uso: imagotipo, logotipo e isotipo en crema sobre marrón" },
        { src: "assets/trabajos/topados/manual-08.webp", w: 1800, h: 1272, g: "manual", alt: "Versiones en positivo y en negativo del imagotipo" },
        { src: "assets/trabajos/topados/manual-09.webp", w: 1800, h: 1272, g: "manual", alt: "Usos incorrectos: no deformar, no torcer, no combinar los colores, no utilizar efectos" },
        { src: "assets/trabajos/topados/manual-10.webp", w: 1800, h: 1272, g: "manual", alt: "Carátula de sección: Tipografía" },
        { src: "assets/trabajos/topados/manual-11.webp", w: 1800, h: 1272, g: "manual", alt: "Fuente principal: Georgia" },
        { src: "assets/trabajos/topados/manual-12.webp", w: 1800, h: 1272, g: "manual", alt: "Fuente secundaria: Public Sans" },
        { src: "assets/trabajos/topados/manual-13.webp", w: 1800, h: 1272, g: "manual", alt: "Carátula de sección: Paleta cromática" },
        { src: "assets/trabajos/topados/manual-14.webp", w: 1800, h: 1272, g: "manual", alt: "Paleta de colores: cuatro colores principales y nueve secundarios, con sus valores" },
        { src: "assets/trabajos/topados/manual-15.webp", w: 1800, h: 1272, g: "manual", alt: "Combinaciones de colores: una para cada variedad de alfajor, de la 01 a la 06" },
        { src: "assets/trabajos/topados/manual-16.webp", w: 1800, h: 1272, g: "manual", alt: "Aplicaciones de color: el imagotipo en las seis combinaciones" },
        { src: "assets/trabajos/topados/manual-17.webp", w: 1800, h: 1272, g: "manual", alt: "Carátula de sección: Elementos gráficos" },
        { src: "assets/trabajos/topados/manual-18.webp", w: 1800, h: 1272, g: "manual", alt: "Tramas: la principal en outline y la secundaria en relleno" },
        { src: "assets/trabajos/topados/manual-19.webp", w: 1800, h: 1272, g: "manual", alt: "Carátula de sección: Aplicaciones de marca" },
        { src: "assets/trabajos/topados/manual-20.webp", w: 1800, h: 1272, g: "manual", alt: "Aplicación en packaging, sabores clásicos: alfajor de dulce de leche y chocolate negro con papel plateado" },
        { src: "assets/trabajos/topados/manual-21.webp", w: 1800, h: 1272, g: "manual", alt: "Aplicación en packaging, sabores clásicos: el mismo alfajor con papel dorado" },
        { src: "assets/trabajos/topados/manual-22.webp", w: 1800, h: 1272, g: "manual", alt: "Aplicación en packaging, sabores premium: Chocolate Intenso Black, con la trama en la faja" }
      ]
    },
    udent: {
      kind: "naming · identidad de marca",
      title: "U.Dent",
      meta: [["cliente", "estudio dental"], ["servicios", "naming, logotipo, isotipo, tramas, papelería, manual de marca, video"], ["año", "2026"]],
      text: [
        "Naming e identidad para un estudio dental. El nombre nace de Ulfe.Dentista, el apellido y el oficio unidos por un punto, y se acorta a U.Dent.",
        "Ese punto ata toda la marca: dibuja el isotipo, una U de dieciséis puntos; une lo liviano con lo pesado en cada línea de texto, Poppins antes y Helvetica después, como en Estudio.Dental; y arma las tramas. Todo en crema, marrón y aqua."
      ],
      slides: [
        { video: "assets/trabajos/udent/udent-video.mp4", poster: "assets/trabajos/udent/udent-video-poster.jpg", w: 1920, h: 1080, g: "video", alt: "Video de marca de U.Dent en 15 segundos: el punto de Ulfe.Dentista queda quieto mientras el nombre se acorta a U.Dent, se multiplica en la U de puntos, ata Juan.Ulfe, Estudio.Dental y poppins.helvetica, se vuelve los tres colores, las tramas y las tarjetas" },
        { video: "assets/trabajos/udent/udent-reel.mp4", poster: "assets/trabajos/udent/udent-reel-poster.jpg", w: 1080, h: 1920, g: "reel", alt: "El mismo video de marca de U.Dent en formato vertical para reel" },
        { src: "assets/trabajos/udent/manual-01.webp", w: 2000, h: 1413, g: "manual", alt: "Tapa del manual de marca de U.Dent: logotipo en marrón e isotipo de puntos en aqua sobre crema" },
        { src: "assets/trabajos/udent/manual-02.webp", w: 2000, h: 1413, g: "manual", alt: "Índice del manual de U.Dent, con cada sección escrita liviano.pesado" },
        { src: "assets/trabajos/udent/manual-03.webp", w: 2000, h: 1413, g: "manual", alt: "El nombre: Ulfe.Dentista, apellido y oficio unidos por un punto, se acorta a U.Dent" },
        { src: "assets/trabajos/udent/manual-04.webp", w: 2000, h: 1413, g: "manual", alt: "Logotipo de U.Dent a página entera: la U en Poppins ExtraLight, el punto y Dent en Helvetica Regular" },
        { src: "assets/trabajos/udent/manual-05.webp", w: 2000, h: 1413, g: "manual", alt: "Isotipo de U.Dent: una U dibujada con dieciséis puntos de tres tamaños, en crema sobre aqua" },
        { src: "assets/trabajos/udent/manual-06.webp", w: 2000, h: 1413, g: "manual", alt: "El punto de U.Dent en grande y los cuatro lugares donde aparece: el nombre, el isotipo, cada línea de texto y las tramas" },
        { src: "assets/trabajos/udent/manual-07.webp", w: 2000, h: 1413, g: "manual", alt: "El sistema liviano.pesado con las líneas de la marca: Ulfe.Dentista, Juan.Ulfe, Estudio.Dental, Uruguay.al 1011" },
        { src: "assets/trabajos/udent/manual-08.webp", w: 2000, h: 1413, g: "manual", alt: "Tipografías de U.Dent: Poppins ExtraLight y Helvetica Regular, con la línea poppins.helvetica" },
        { src: "assets/trabajos/udent/manual-09.webp", w: 2000, h: 1413, g: "manual", alt: "Colores de U.Dent: crema ECEBE2, marrón 352717 y aqua 73998F, y los tres cuadrados encajados" },
        { src: "assets/trabajos/udent/manual-10.webp", w: 2000, h: 1413, g: "manual", alt: "Logotipo e isotipo de U.Dent sobre papel crema, aqua y marrón" },
        { src: "assets/trabajos/udent/manual-11.webp", w: 2000, h: 1413, g: "manual", alt: "Las seis tramas de U.Dent, hechas con filas de puntos y con la U de puntos repetida" },
        { src: "assets/trabajos/udent/manual-12.webp", w: 2000, h: 1413, g: "manual", alt: "Tarjeta de U.Dent en papel crema, con datos de ejemplo" },
        { src: "assets/trabajos/udent/manual-13.webp", w: 2000, h: 1413, g: "manual", alt: "Tarjetas de U.Dent en aqua y en marrón, con datos de ejemplo" },
        { src: "assets/trabajos/udent/manual-14.webp", w: 2000, h: 1413, g: "manual", alt: "Propuesta de área de resguardo y tamaños mínimos del logotipo y el isotipo de U.Dent" },
        { src: "assets/trabajos/udent/manual-15.webp", w: 2000, h: 1413, g: "manual", alt: "Propuesta de usos incorrectos del logotipo de U.Dent" },
        { src: "assets/trabajos/udent/manual-16.webp", w: 2000, h: 1413, g: "manual", alt: "Trama de U.Dent a página entera: la U de puntos en crema y aqua sobre marrón" }
      ]
    },
    talloverde: {
      kind: "web · redes · newsletter",
      title: "Tallo Verde",
      meta: [["cliente", "Tallo Verde"], ["servicios", "diseño web, redes, newsletters"], ["sitio", "<a href=\"https://talloverde.com\" target=\"_blank\" rel=\"noopener\">talloverde.com</a>"], ["año", "2026"]],
      text: [
        "La web, las redes y los newsletters de Tallo Verde, una huerta orgánica que vende por internet. Todo sale de los mismos parámetros: dos colores (crema y verde), títulos en Poppins Bold con Georgia Bold Italic y una ilustración para cada categoría de la tienda.",
        "En talloverde.com esas ilustraciones ordenan la compra: promociones, frutas, hortalizas, almacén, granja, aromáticas y mermeladas. Después vuelven en los posteos, en las historias y en los newsletters que anunciaron la web nueva."
      ],
      slides: [
        { video: "assets/trabajos/talloverde/talloverde-video.mp4", poster: "assets/trabajos/talloverde/talloverde-video-poster.jpg", w: 1920, h: 1080, g: "video", alt: "Video del caso Tallo Verde: la guía de marca, la web talloverde.com, los posteos e historias y los newsletters" },
        { video: "assets/trabajos/talloverde/talloverde-web.mp4", poster: "assets/trabajos/talloverde/talloverde-web-poster.jpg", w: 1920, h: 1080, g: "web", loop: true, alt: "Recorrido por talloverde.com: el inicio, las categorías con sus ilustraciones, la página de frutas y el pie" },
        { video: "assets/trabajos/talloverde/talloverde-redes.mp4", poster: "assets/trabajos/talloverde/talloverde-redes-poster.jpg", w: 1280, h: 720, g: "redes", loop: true, alt: "Los posteos de Tallo Verde en un muro que se mueve: las placas del feed en cinco columnas" },
        { src: "assets/trabajos/talloverde/redes-grilla.webp", w: 1622, h: 2000, g: "redes", alt: "Nueve posteos de Tallo Verde en grilla de tres por tres" },
        { src: "assets/trabajos/talloverde/redes-historias.webp", w: 1920, h: 679, g: "redes", alt: "Cinco historias de Tallo Verde: armá tu semana, agarrá el que necesites, llegó la primavera, quiz rápido y dato curioso" },
        { src: "assets/trabajos/talloverde/redes-nueva-web.webp", w: 1218, h: 1522, g: "redes", alt: "Posteo «Nueva web, ¡nos renovamos!» con las ilustraciones de los productos saliendo de una ventana de navegador" },
        { src: "assets/trabajos/talloverde/redes-hay-brocoli.webp", w: 1218, h: 1522, g: "redes", alt: "Posteo «Hay brócoli»: un papel con la silueta de un brócoli recortada sobre una foto de brócolis" },
        { src: "assets/trabajos/talloverde/redes-frutos-secos.webp", w: 1218, h: 1522, g: "redes", alt: "Posteo sobre frutos secos: un anillo de frutos secos con el dato «20%» en el centro" },
        { src: "assets/trabajos/talloverde/redes-ticket.webp", w: 1218, h: 1522, g: "redes", alt: "Posteo «conseguilos en Tallo Verde»: un ticket de compra apoyado sobre una canasta de frutas y verduras" },
        { src: "assets/trabajos/talloverde/newsletter-general.webp", w: 1212, h: 3858, g: "newsletter", tall: true, tw: 640, alt: "Newsletter general de Tallo Verde: De la huerta a tu casa, cómo funciona y los productos" },
        { src: "assets/trabajos/talloverde/newsletter-lanzamiento.webp", w: 1212, h: 4131, g: "newsletter", tall: true, tw: 640, alt: "Newsletter de lanzamiento de la web nueva de Tallo Verde: comprar online es así de simple" },
        { src: "assets/trabajos/talloverde/newsletter-lanzamiento-vol2.webp", w: 1212, h: 3322, g: "newsletter", tall: true, tw: 640, alt: "Segundo newsletter de lanzamiento de Tallo Verde: elegí, armá y recibí" }
      ]
    },
    scott: {
      kind: "stop motion",
      title: "Scott Pilgrim",
      meta: [["de", "Atus y Kmi"], ["técnica", "stop motion"]],
      text: [
        "Un stop motion que hicimos con Cami sobre escenas de Scott Pilgrim.",
        "Cada cuadro lleva dibujo y texto encima de la imagen: palabras que aparecen de a una, garabatos sobre la banda y un corazón entre el público."
      ],
      slides: [
        { video: "assets/trabajos/stopmotion/scott-pilgrim.mp4", poster: "assets/trabajos/stopmotion/scott-pilgrim.jpg", w: 1920, h: 1080, alt: "Stop motion sobre cuadros de Scott Pilgrim con trama de imprenta, dibujados y escritos encima: la banda en el escenario, Scott y Ramona entre el público, palabras como that guy on bass, oh yeah y hello again friend of a friend, y la firma de Atus Kmi al final" }
      ]
    },
    julian: {
      kind: "stop motion",
      title: "Julián Álvarez",
      meta: [["de", "Atus y Kmi"], ["técnica", "stop motion"]],
      text: [
        "Un stop motion que hicimos con Cami sobre un gol de Julián Álvarez.",
        "Cada cuadro lleva dibujo encima de la imagen: \"La Araña\" escrito sobre la cancha, una telaraña alrededor de la jugada, el remate y el festejo."
      ],
      slides: [
        { video: "assets/trabajos/stopmotion/julian-alvarez.mp4", poster: "assets/trabajos/stopmotion/julian-alvarez.jpg", w: 1280, h: 720, alt: "Stop motion sobre cuadros de un partido de la selección argentina con trama de imprenta, dibujados encima: La Araña escrito sobre la cancha, una telaraña, la corrida con la pelota, el arco, el festejo y la firma Atus Kmi" }
      ]
    },
    puertas: {
      kind: "stop motion",
      title: "Puertas",
      meta: [["de", "Atus y Kmi"], ["técnica", "stop motion"], ["lugar", "Barcelona"]],
      text: [
        "En un viaje a Barcelona nos llamaron la atención las puertas: cada una tiene su propia trama de grafitis, stickers y pintura, y no hay dos iguales.",
        "Con Cami las fuimos fotografiando y con esas fotos armamos este stop motion: una puerta por cuadro, una atrás de la otra, hasta cerrar con nuestra firma."
      ],
      slides: [
        { video: "assets/trabajos/stopmotion/puertas.mp4", poster: "assets/trabajos/stopmotion/puertas.jpg", w: 608, h: 1080, alt: "Stop motion con fotos de puertas de Barcelona cubiertas de grafitis y stickers, una por cuadro, que termina con la firma de Atus Kmi dentro de una puerta dibujada en blanco y negro" }
      ]
    }
  };

  window.__cactusReady = true;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var pad = function (n) { return String(n).padStart(2, "0"); };
  var root = document.documentElement;
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  var motion = root.classList.contains("motion");
  var lenis = null;
  var waUrl = function (text) { return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text); };
  var VOLUMEN = 0.5; // volumen con el que arranca cada video del visor (0 a 1)
  function playQuiet(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }

  /* sin viudas: une las dos últimas palabras con un espacio que no corta,
     así nunca queda una palabra sola en la última línea */
  function noWidow(el) {
    if (!el || (el.textContent.trim().match(/\s+/g) || []).length < 2) return; // con menos de 3 palabras no hace falta
    var nodes = [], tw = document.createTreeWalker(el, NodeFilter.SHOW_TEXT), n, word = false;
    while ((n = tw.nextNode())) nodes.push(n);
    for (var k = nodes.length - 1; k >= 0; k--) {
      var v = nodes[k].nodeValue;
      for (var i = v.length - 1; i >= 0; i--) {
        if (!/\s/.test(v.charAt(i))) { word = true; continue; }
        if (word) { nodes[k].nodeValue = v.slice(0, i) + " " + v.slice(i + 1); return; }
      }
    }
  }
  var WIDOWS = ".somos__lead, .somos__body, .sec-lead, .srv__desc, .warn__body, .srv-cta__sel, .works__hint";
  $$(WIDOWS).forEach(noWidow);
  // con sonido; si el navegador no lo deja, arranca en silencio (se activa desde los controles)
  function playLoud(v) {
    var p = v.play();
    if (p && p.catch) p.catch(function (err) { if (err && err.name === "NotAllowedError") { v.muted = true; playQuiet(v); } });
  }

  /* ---------- contacto ---------- */
  var year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
  $$("[data-wa]").forEach(function (a) { a.href = waUrl("Hola cactus! Quiero hacer una consulta."); });
  var mailLink = $("[data-mail]");
  if (mailLink) mailLink.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Consulta desde la web");

  var copyBtn = $("#copy-mail");
  if (copyBtn) copyBtn.addEventListener("click", function () {
    var done = function () {
      copyBtn.classList.add("is-copied"); copyBtn.textContent = "¡copiado!";
      clearTimeout(copyBtn._t);
      copyBtn._t = setTimeout(function () { copyBtn.classList.remove("is-copied"); copyBtn.textContent = "copiar"; }, 1800);
    };
    var fallback = function () {
      var ta = document.createElement("textarea");
      ta.value = CONFIG.email; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (e) {}
      ta.remove(); done();
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(CONFIG.email).then(done, fallback);
    else fallback();
  });

  /* ---------- servicios: elegís uno o varios y consultás todo junto ---------- */
  var askBtn = $("#ask-btn"), askN = $("[data-ask-n]"), askSel = $("#ask-sel");
  var askIdle = askSel ? askSel.textContent : "";
  var srvs = $$(".srv");
  function updateAsk(bump) {
    var sel = srvs.filter(function (b) { return b.getAttribute("aria-pressed") === "true"; }).map(function (b) { return b.dataset.srv; });
    askBtn.href = waUrl(sel.length ? "Hola cactus! Quiero consultar por: " + sel.join(", ") + "." : "Hola cactus! Quiero hacer una consulta.");
    askN.hidden = !sel.length;
    askN.textContent = sel.length;
    if (askSel) { askSel.innerHTML = sel.length ? "Elegiste: <b>" + sel.join(", ") + "</b>." : askIdle; noWidow(askSel); }
    // un golpecito al botón cada vez que cambia la selección, para que se note
    if (bump && window.gsap && motion) gsap.fromTo(askBtn, { scale: 1.06 }, { scale: 1, duration: 0.6, ease: "back.out(3)", overwrite: true });
  }
  srvs.forEach(function (b) {
    b.addEventListener("click", function () {
      b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
      updateAsk(true);
    });
  });
  updateAsk(false);

  /* servicios: en el celu el cartel de "atención" asoma del costado y se abre (o se cierra) al tocarlo */
  var warn = $(".srv-head .warn"), smallMQ = window.matchMedia("(max-width: 760px)");
  if (warn) {
    var openWarn = function (open) {
      warn.classList.toggle("is-open", open);
      if (smallMQ.matches) warn.setAttribute("aria-expanded", open ? "true" : "false");
    };
    var setWarn = function () {
      if (smallMQ.matches) {
        warn.setAttribute("role", "button"); warn.setAttribute("tabindex", "0");
        warn.setAttribute("aria-expanded", warn.classList.contains("is-open") ? "true" : "false");
      } else {
        ["role", "tabindex", "aria-expanded"].forEach(function (a) { warn.removeAttribute(a); });
        warn.classList.remove("is-open");
      }
    };
    warn.addEventListener("click", function (e) {
      if (!smallMQ.matches) return;
      e.stopPropagation();
      openWarn(!warn.classList.contains("is-open"));
    });
    warn.addEventListener("keydown", function (e) {
      if (smallMQ.matches && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openWarn(!warn.classList.contains("is-open")); }
    });
    document.addEventListener("click", function () { if (warn.classList.contains("is-open")) openWarn(false); });
    setWarn();
    if (smallMQ.addEventListener) smallMQ.addEventListener("change", setWarn); else smallMQ.addListener(setWarn);
  }

  /* ---------- header (siempre negro): se vuelve sólido apenas bajás ---------- */
  var hdr = $("#hdr"), pvOpen = false;
  if ("IntersectionObserver" in window) {
    var mark = document.createElement("div");
    mark.setAttribute("aria-hidden", "true");
    mark.style.cssText = "position:absolute;top:0;left:0;width:1px;height:10px;pointer-events:none";
    document.body.prepend(mark);
    new IntersectionObserver(function (en) { hdr.classList.toggle("is-solid", !en[0].isIntersecting); }).observe(mark);

    // el video de la mesa de trabajos: se carga recién cerca de la pantalla y se pausa cuando no se ve
    if (motion) {
      var vidIO = new IntersectionObserver(function (en) {
        en.forEach(function (e) {
          var v = e.target;
          v._inView = e.isIntersecting;
          if (e.isIntersecting && !pvOpen) {
            if (!v.getAttribute("src")) v.src = v.dataset.src;
            playQuiet(v);
          } else if (!v.paused) v.pause();
        });
      }, { rootMargin: "20% 0px 20% 0px" });
      $$(".piece video").forEach(function (v) { vidIO.observe(v); });
    }

    // el teléfono suena solo mientras la banda está en pantalla
    $$(".band--call").forEach(function (b) {
      new IntersectionObserver(function (en) { b.classList.toggle("is-off", !en[0].isIntersecting); }).observe(b);
    });

    /* aparecer al scrollear: los que entran juntos salen escalonados */
    if (motion) {
      var rvIO = new IntersectionObserver(function (entries) {
        var k = 0;
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          en.target.style.transitionDelay = (k++ * 0.07) + "s";
          en.target.classList.add("in");
          rvIO.unobserve(en.target);
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      $$(".rv").forEach(function (el) { rvIO.observe(el); });
    }
  } else {
    $$(".rv").forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- anclas ---------- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      var el = id && id.length > 1 ? document.getElementById(id.slice(1)) : null;
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: id === "#inicio" ? 0 : -40, duration: 1.4, easing: function (t) { return 1 - Math.pow(1 - t, 4); } });
      else el.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- proyecto abierto: imágenes + panel de texto ---------- */
  var pv = $("#pv"), pvSlides = $("#pv-slides"), pvCount = $("#pv-count"), pvGroups = $("#pv-groups"), pvAt = 0, pvList = [], pvLast = null;
  // las imágenes y los videos se bajan recién cuando les toca (la que se ve y las dos de al lado)
  function pvLoad(k) {
    var m = $("[data-src]", pvList[(k + pvList.length) % pvList.length]);
    if (m) { m.src = m.dataset.src; m.removeAttribute("data-src"); }
  }
  function pvGo(i) {
    if (!pvList.length) return;
    pvAt = (i + pvList.length) % pvList.length;
    pvLoad(pvAt); pvLoad(pvAt + 1); pvLoad(pvAt - 1);
    pvList.forEach(function (s, k) {
      s.classList.toggle("on", k === pvAt);
      // los videos: el que queda a la vista arranca, los demás se pausan
      var v = $("video", s);
      if (v) { if (k === pvAt) playLoud(v); else if (!v.paused) v.pause(); }
    });
    var cur = pvList[pvAt];
    pvCount.textContent = pad(pvAt + 1) + " / " + pad(pvList.length) + (cur._g ? " · " + cur._g : "");
    var single = pvList.length < 2;
    $$(".pv__nav").forEach(function (b) { b.hidden = single; });
    pvCount.hidden = single;
    // la parte del proyecto en la que estás queda marcada
    $$(".pv__group", pvGroups).forEach(function (b) { b.classList.toggle("on", b.textContent === cur._g); });
    // las piezas largas (una web entera, un newsletter) se recorren bajando adentro del visor
    cur.scrollTop = 0;
    pv.classList.toggle("is-tall", cur.classList.contains("pv__slide--tall"));
  }
  function pvOpenProject(id, slide) {
    var p = PROJECTS[id];
    if (!p) return;
    pvLast = document.activeElement;
    pvSlides.innerHTML = "";
    pvGroups.innerHTML = "";
    var lastG = null, nG = 0;
    pvList = p.slides.map(function (s, k) {
      var f = document.createElement("figure");
      f.className = "pv__slide" + (s.tall ? " pv__slide--tall" : "");
      f._g = s.g || "";
      if (s.html) { f.innerHTML = s.html; f.setAttribute("role", "img"); f.setAttribute("aria-label", s.alt || ""); }
      else if (s.video) {
        var v = document.createElement("video");
        v.controls = true; v.playsInline = true; v.preload = "none";
        v.volume = VOLUMEN; // arrancan siempre a la mitad: nadie se lleva un susto si tiene el volumen alto
        if (s.loop) v.loop = true;
        if (s.w) { v.width = s.w; v.height = s.h; }
        if (s.poster) v.poster = s.poster;
        v.dataset.src = s.video;
        v.setAttribute("aria-label", s.alt || "");
        f.appendChild(v);
      }
      else {
        var img = document.createElement("img");
        if (s.w) { img.width = s.w; img.height = s.h; }
        img.dataset.src = s.src; img.alt = s.alt || ""; img.draggable = false;
        if (s.tall) {
          img.style.maxWidth = (s.tw || 760) + "px";
          f.addEventListener("scroll", function () { if (f.scrollTop > 8) pv.classList.remove("is-tall"); }, { passive: true });
        }
        f.appendChild(img);
      }
      // un botón por cada parte (video, manual, redes…), que salta a su primera imagen
      if (s.g && s.g !== lastG) {
        var b = document.createElement("button");
        b.type = "button"; b.className = "pv__group"; b.textContent = s.g;
        b.addEventListener("click", function () { pvGo(k); });
        pvGroups.appendChild(b);
        nG++;
      }
      lastG = s.g || null;
      pvSlides.appendChild(f);
      return f;
    });
    pvGroups.hidden = nG < 2;
    $("#pv-kind").textContent = p.kind;
    $("#pv-title").textContent = p.title;
    $("#pv-meta").innerHTML = p.meta.map(function (m) { return "<div><dt>" + m[0] + "</dt><dd>" + m[1] + "</dd></div>"; }).join("");
    $("#pv-text").innerHTML = p.text.map(function (t) { return "<p>" + t + "</p>"; }).join("");
    noWidow($("#pv-title")); $$("#pv-text p").forEach(noWidow);
    pv.hidden = false; pvOpen = true;
    $$(".piece video").forEach(function (v) { if (!v.paused) v.pause(); });
    document.body.classList.add("no-scroll");
    if (lenis) lenis.stop();
    pvGo(slide || 0);
    if (hasGSAP && motion) {
      gsap.fromTo(pv, { opacity: 0 }, { opacity: 1, duration: 0.35 });
      gsap.fromTo(".pv__panel > *", { x: 28, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, stagger: 0.05, ease: "expo.out", delay: 0.05 });
      gsap.fromTo(pvSlides, { scale: 0.96 }, { scale: 1, duration: 0.8, ease: "expo.out" });
    }
    $("#pv-x").focus();
  }
  function pvClose() {
    if (!pvOpen) return;
    pvOpen = false; pv.hidden = true; pv.classList.remove("is-tall");
    $$("video", pvSlides).forEach(function (v) { v.pause(); });
    if (motion) $$(".piece video").forEach(function (v) { if (v._inView && v.getAttribute("src")) playQuiet(v); });
    document.body.classList.remove("no-scroll");
    if (lenis) lenis.start();
    if (pvLast) pvLast.focus({ preventScroll: true });
  }
  $("#pv-x").addEventListener("click", pvClose);
  $$("[data-pv]").forEach(function (b) { b.addEventListener("click", function () { pvGo(pvAt + Number(b.dataset.pv)); }); });
  // tocar la imagen pasa a la siguiente (en los videos, el toque es para sus controles)
  pvSlides.addEventListener("click", function (e) { if (e.target.closest("video")) return; pvGo(pvAt + 1); });
  document.addEventListener("keydown", function (e) {
    if (!pvOpen) return;
    if (e.key === "Escape") pvClose();
    if (e.target && e.target.tagName === "VIDEO") return; // las flechas adelantan o atrasan el video
    if (e.key === "ArrowRight") pvGo(pvAt + 1);
    if (e.key === "ArrowLeft") pvGo(pvAt - 1);
  });
  var tsx = null;
  $("#pv-stage").addEventListener("touchstart", function (e) { tsx = e.target.closest("video") ? null : e.touches[0].clientX; }, { passive: true });
  $("#pv-stage").addEventListener("touchend", function (e) {
    if (tsx == null) return;
    var dx = e.changedTouches[0].clientX - tsx; tsx = null;
    if (Math.abs(dx) > 50) pvGo(pvAt + (dx < 0 ? 1 : -1));
  });

  var pieces = $$(".piece");
  // en pantallas táctiles la ayuda explica que se mantienen apretados para moverlos
  var hint = $(".works__hint");
  if (hint && window.matchMedia("(hover: none) and (pointer: coarse)").matches) { hint.textContent = "mantenelos apretados para moverlos o tocalos para ver el proyecto"; noWidow(hint); }
  pieces.forEach(function (p) {
    p.setAttribute("tabindex", "0");
    p.setAttribute("role", "button");
    p.setAttribute("aria-label", "Ver el proyecto: " + $(".piece__tag", p).textContent.replace(/\s+/g, " ").trim());
    var open = function () { pvOpenProject(p.dataset.project, Number(p.dataset.slide) || 0); };
    p.addEventListener("click", function () { if (!p._dragged) open(); });
    p.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });

  /* =======================================================================
     Movimiento (GSAP + ScrollTrigger + Lenis)
     ======================================================================= */
  if (!hasGSAP) { root.classList.remove("js"); var rb = $("#works-reset"); if (rb) rb.hidden = true; return; }
  gsap.registerPlugin(ScrollTrigger);
  dragPieces(); // arrastrar anda siempre que haya GSAP
  reorganize();

  if (!motion) { gsap.set(".hero__tag .w, .hl", { opacity: 1 }); return; }

  if (window.Lenis) {
    lenis = new window.Lenis({ duration: 1.15, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  var fontsReady = Promise.race([
    document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
    new Promise(function (r) { setTimeout(r, 1500); })
  ]);
  fontsReady.then(function () {
    [heroIntro, parallax, servicesFade, floatPieces].forEach(function (fn) {
      try { fn(); } catch (e) { if (window.console) console.error("[cactus]", fn.name, e); }
    });
    gsap.set(".hero__tag .w", { opacity: 1 }); // el logo aparece solo cuando arranca su animación
    ScrollTrigger.refresh();
  });
  // el recálculo de cuando termina de cargar todo espera a que termine la animación del logo (así no la corta)
  var introDone = false, refreshLater = false;
  window.addEventListener("load", function () { if (introDone) ScrollTrigger.refresh(); else refreshLater = true; });

  /* inicio: la única animación es la de cactus, letra por letra. "no te quedes afuera" queda quieto */
  // arranca cuando las letras ya están decodificadas (así no se traba el primer cuadro)
  function heroIntro() {
    var box = $(".hero__logo"), imgs = $$(".hero__logo .hl");
    var decoded = Promise.all(imgs.map(function (im) { return im.decode ? im.decode().catch(function () {}) : Promise.resolve(); }));
    setTimeout(function () { gsap.set(imgs, { opacity: 1 }); }, 3500); // por las dudas: el logo nunca queda escondido
    Promise.race([decoded, new Promise(function (r) { setTimeout(r, 1500); })]).then(function () {
      var tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hl:not(.hl--r)", { y: function () { return box.offsetHeight * 1.15; }, duration: 1.3, stagger: 0.07 }, 0.1)
        .from(".hl--r", { scale: 0, transformOrigin: "50% 50%", duration: 0.7, ease: "back.out(2.4)" }, 0.95); // el ® crece desde su centro
      gsap.set(imgs, { opacity: 1 });
      tl.eventCallback("onComplete", function () {
        gsap.set(imgs, { clearProps: "transform" });
        introDone = true;
        if (refreshLater) ScrollTrigger.refresh();
      });
    });
  }

  /* la trama se desliza adentro de su banda */
  function parallax() {
    $$(".plx").forEach(function (f) {
      var el = $(".band__bg", f) || $("img, svg", f), amt = Math.min(9.6, parseFloat(f.dataset.plx) || 8);
      gsap.fromTo(el, { yPercent: -amt }, { yPercent: amt, ease: "none", scrollTrigger: { trigger: f, start: "top bottom", end: "bottom top", scrub: true } });
    });
  }

  /* servicios: el fondo se funde de negro a blanco al llegar y vuelve a negro al irse */
  function servicesFade() {
    var srv = $("#servicios");
    var inST = { trigger: srv, start: "top 62%", end: "top 18%", scrub: true };
    var outST = { trigger: "#trabajos", start: "top 80%", end: "top 45%", scrub: true };
    gsap.fromTo(root, { "--page": "#191919" }, { "--page": "#F6F6F6", ease: "power1.inOut", scrollTrigger: inST });
    gsap.fromTo(srv, { "--s-fg": "#F6F6F6" }, { "--s-fg": "#191919", ease: "power3.inOut", scrollTrigger: inST });
    gsap.fromTo(root, { "--page": "#F6F6F6" }, { "--page": "#191919", ease: "power2.inOut", immediateRender: false, scrollTrigger: outST });
    gsap.fromTo(srv, { "--s-fg": "#191919" }, { "--s-fg": "#F6F6F6", ease: "power3.inOut", immediateRender: false, scrollTrigger: outST });
  }

  /* trabajos: caen sobre la mesa y flotan a distintas velocidades con el scroll */
  function floatPieces() {
    var board = $("#board"), small = window.innerWidth < 901;
    pieces.forEach(function (p) {
      var fl = $(".piece__float", p), img = $(".piece__frame img, .piece__frame video", p);
      var px = (parseFloat(p.dataset.float) || 60) * (small ? 0.35 : 1);
      gsap.fromTo(fl, { y: px }, { y: -px, ease: "none", scrollTrigger: { trigger: board, start: "top bottom", end: "bottom top", scrub: true } });
      if (p.hasAttribute("data-flat")) return; // piezas que no se pueden recortar (una tarjeta, una página): la imagen queda quieta en su marco
      gsap.set(img, { scale: 1.07 });
      gsap.fromTo(img, { yPercent: -3 }, { yPercent: 3, ease: "none", scrollTrigger: { trigger: p, start: "top bottom", end: "bottom top", scrub: true } });
    });
    gsap.from($$(".piece__tilt"), {
      y: -60, scale: 1.1, opacity: 0,
      rotation: function (i) { return (i % 2 ? 1 : -1) * (6 + (i * 3) % 6); },
      duration: 1.1, stagger: 0.08, ease: "power3.out",
      scrollTrigger: { trigger: board, start: "top 80%" }
    });
  }

  /* trabajos: se arrastran con el mouse o con el dedo (con inercia y un poco de giro).
     Con el dedo, si arrancás de costado movés la pieza; si arrancás para arriba o abajo, scrollea la página */
  /* trabajos: "reorganizar" vuelve a poner cada pieza en su lugar, de a una y con un sacudón
     (si no se había movido ninguna, igual se sacuden, así se nota que el botón respondió) */
  // la primera vez que movés una pieza, el botón da un saltito para que lo veas
  var resetHinted = false;
  function hintReset() {
    var b = $("#works-reset");
    if (resetHinted || !b || !motion) return;
    resetHinted = true;
    gsap.fromTo(b, { scale: 1 }, { scale: 1.14, duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1, delay: 0.3 });
  }
  function reorganize() {
    var btn = $("#works-reset");
    if (!btn) return;
    btn.addEventListener("click", function () {
      pieces.forEach(function (p, i) {
        var tilt = $(".piece__tilt", p), d = i * 0.05;
        gsap.killTweensOf(p); gsap.killTweensOf(tilt);
        p.style.zIndex = "";
        if (!motion) { gsap.set(p, { x: 0, y: 0 }); gsap.set(tilt, { rotation: 0, scale: 1 }); return; }
        gsap.to(p, { x: 0, y: 0, duration: 0.9, ease: "power3.inOut", delay: d });
        gsap.timeline({ delay: d })
          .to(tilt, { rotation: i % 2 ? 7 : -7, scale: 1.05, duration: 0.28, ease: "power2.out" })
          .to(tilt, { rotation: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.45)" });
      });
    });
  }

  function dragPieces() {
    var board = $("#board"), topZ = 10;
    pieces.forEach(function (p) {
      var tilt = $(".piece__tilt", p);
      // mientras una pieza está agarrada con el dedo, la página no scrollea
      p.addEventListener("touchmove", function (te) { if (p._holding) te.preventDefault(); }, { passive: false });
      p.addEventListener("contextmenu", function (ce) { if (p._holding || ce.pointerType === "touch") ce.preventDefault(); });
      p.addEventListener("pointerdown", function (e) {
        var touch = e.pointerType !== "mouse";
        if (!touch && e.button !== 0) return;
        if (!touch) e.preventDefault();
        var x0 = gsap.getProperty(p, "x"), y0 = gsap.getProperty(p, "y");
        var sx = e.clientX, sy = e.clientY, lx = sx, lt = performance.now(), vx = 0, vy = 0, ly = sy, moved = false, hold = null;
        var br = board.getBoundingClientRect(), pr = p.getBoundingClientRect();
        var baseL = pr.left - x0, baseT = pr.top - y0, w = pr.width, h = pr.height;
        var clampX = gsap.utils.clamp(br.left - baseL - w * 0.35, br.right - baseL - w * 0.65);
        var clampY = gsap.utils.clamp(br.top - baseT - h * 0.25, br.bottom - baseT - h * 0.75);
        try { p.setPointerCapture(e.pointerId); } catch (err) {}
        // agarra la pieza: desde acá se mueve con el dedo o el mouse
        function grab(x, y) {
          moved = true; p._holding = true;
          gsap.killTweensOf(p);
          x0 = gsap.getProperty(p, "x"); y0 = gsap.getProperty(p, "y"); sx = x; sy = y;
          p.style.zIndex = ++topZ;
          p.classList.add("is-drag");
          gsap.to(tilt, { scale: touch ? 1.08 : 1.04, duration: 0.3, ease: "back.out(2)" });
        }
        // con el dedo: si la dejás apretada un ratito, se levanta y se mueve para cualquier lado
        if (touch) hold = setTimeout(function () {
          hold = null;
          if (moved) return;
          grab(lx, ly);
          if (navigator.vibrate) navigator.vibrate(12);
        }, 260);
        function move(ev) {
          if (!moved) {
            var mx = ev.clientX - sx, my = ev.clientY - sy;
            if (touch) {
              if (Math.abs(mx) > 10 || Math.abs(my) > 10) { clearTimeout(hold); hold = null; }
              if (Math.abs(my) > 10 && Math.abs(my) > Math.abs(mx)) { up(); return; } // deslizó rápido para arriba o abajo: scrollea
              if (Math.abs(mx) < 10) { lx = ev.clientX; ly = ev.clientY; return; }
            } else if (Math.hypot(mx, my) <= 5) return;
            grab(ev.clientX, ev.clientY); // de costado (o con el mouse) se agarra al toque
          }
          var dx = ev.clientX - sx, dy = ev.clientY - sy;
          gsap.set(p, { x: clampX(x0 + dx), y: clampY(y0 + dy) });
          var now = performance.now(), dt = Math.max(8, now - lt);
          vx = (ev.clientX - lx) / dt; vy = (ev.clientY - ly) / dt; lx = ev.clientX; ly = ev.clientY; lt = now;
          gsap.to(tilt, { rotation: gsap.utils.clamp(-12, 12, vx * 8), duration: 0.35, ease: "power2.out", overwrite: "auto" });
        }
        function up() {
          clearTimeout(hold); hold = null; p._holding = false;
          p.removeEventListener("pointermove", move);
          p.removeEventListener("pointerup", up);
          p.removeEventListener("pointercancel", up);
          if (!moved) return; // fue un clic: abre el proyecto
          p.classList.remove("is-drag");
          p._dragged = true;
          setTimeout(function () { p._dragged = false; }, 0);
          gsap.to(p, { x: clampX(gsap.getProperty(p, "x") + vx * 160), y: clampY(gsap.getProperty(p, "y") + vy * 160), duration: 1, ease: "power3.out" });
          gsap.to(tilt, { rotation: 0, scale: 1, duration: 1.1, ease: "elastic.out(1, 0.5)" });
          hintReset();
        }
        p.addEventListener("pointermove", move);
        p.addEventListener("pointerup", up);
        p.addEventListener("pointercancel", up);
      });
    });
  }
})();
