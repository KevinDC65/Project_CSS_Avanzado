# La Arboleda — Proyecto Integrador

Proyecto Integrador del curso **Hojas de Estilo en Cascada Avanzado** (UTP, 2026-2).
Sitio web estático de una sola página que se recorre como una caminata por el campo.
Versión actual: **Fase 1 — Flexbox + Grid** (Semanas 3-4, rumbo a PC1). Parte de la base v0.1 (Semana 1).

> Fuente de verdad del proyecto: `PLAN_LA_ARBOLEDA.txt`. Este README documenta
> lo exigido por la Guía del Proyecto Integrador (ficha, registro de decisiones CSS y evidencias).

---

## 1. Ficha de selección del caso (Guía §3)

| Campo | Respuesta |
|-------|-----------|
| Nombre del caso | **La Arboleda** |
| Tipo de fuente | **Simulado** — supuesto académico declarado (no es un servicio real) |
| Necesidad que comunica la interfaz | Espacios digitales de pausa frente a la sobrestimulación de pantallas |
| Usuario principal | Personas que buscan un respiro visual breve durante el uso de dispositivos |
| Contenido multimedia disponible | Imágenes propias del campo (`.webp`). `video1.mp4` disponible pero no se usa en esta versión (se retiró por problemas de diseño) |
| Supuestos académicos | Se declara explícitamente como caso didáctico; cumple lo permitido en la guía ("simulado si se declara como supuesto académico") |

---

## 2. Registro de decisiones CSS (Guía §5)

| ID | Decisión CSS | Motivo | Evidencia |
|----|--------------|--------|-----------|
| D01 | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | La página debe respetar el ancho real del dispositivo | Vista móvil sin escalado artificial |
| D02 | Contenedor fluido `width: min(1120px, 92%)` | Evitar ancho fijo que genere scroll horizontal | Prueba en 375 px |
| D03 | Imagen flexible `width:100%; max-width:100%; height:auto` | Evitar desbordes del contenido multimedia | Imagen adaptada al contenedor |
| D04 | Media query inicial `@media (max-width:700px)` | Ajustar navegación y bloques en pantalla pequeña | Vista móvil legible (nav en bloque) |
| D05 | **Flexbox** en header/nav/hero (`display:flex`) | Distribuir barra superior, nav y centrar el hero de forma robusta | PLAN §5/§7 (Fase 1, rumbo a PC1) |
| D06 | **Grid layout** en el mosaico `#detalle` (`grid-template-areas` asimétrico) | Composición a mano, no catálogo uniforme, con imágenes grandes y pequeñas | PLAN §6.1 (permitido desde Semana 3 / PC1) |

Decisiones adicionales de esta versión:
- **Variables CSS** (`:root`) para la paleta y tipografía — permitidas desde el día 1 (PLAN §6.6).
- **Tipografía** serif cálida (Fraunces) en títulos + sans limpia (Inter) en cuerpo (PLAN §8.3).
- **Flexbox** (D05) y **Grid** (D06) incorporados en esta Fase 1 porque el PLán indica que la primera entrega evaluada (PC1, Semanas 3-4) ya debe incluir ambos.

### Recursos de impacto visual (Fase 1: Flexbox + Grid + CSS estándar, sin animaciones)
Para reforzar el impacto se usan técnicas de la Fase 1 y recursos estándar/permitidos (PLAN §6):
- **Hero a pantalla completa** con `img22.webp` como fondo fijo (`background-attachment: fixed`) + overlay degradado (PLAN §1/§3). El `video1.mp4` se retiró.
- **Bandas atmosféricas** `#camino` e `#cielo` con `background-attachment: fixed` para sensación de profundidad (CSS estándar, sin `transform`-parallax).
- **Mosaico de 6 imágenes** en `#detalle` con **CSS Grid** asimétrico (`grid-template-areas`), no multicolumn (PLAN §6.1).
- **Viñeta/grano global** sutil vía `body::after` (PLAN §6.7).
- **Scroll-snap** por capítulo (`scroll-snap-type: y proximity`) (PLAN §6.5).
- **Imágenes usadas:** img22 (hero), img11 (camino), img4/img1/img5/img17/img18/img8 (mosaico), img21 (cielo).
- **Sin** `@keyframes` ni `transform: translateY` animado (parallax/animaciones reservados para la Unidad 3). Flexbox y Grid SÍ se usan porque corresponden a esta Fase 1.

---

## 3. Bitácora de evidencias responsive (Guía §6)

La página se revisó en tres anchos. Capturas y notas en `evidencias/`.

| Ancho | Fecha | Resultado | Observación |
|-------|-------|-----------|-------------|
| 375 px | 28/08/2026 | Sin scroll horizontal | Nav Flexbox a ancho completo (decisión D05) |
| 768 px | 28/08/2026 | Correcto | Contenedor fluido centrado |
| 1440 px | 28/08/2026 | Correcto | Contenedor limitado a 1120 px |

**Corrección aplicada (al menos una, requerida por la guía):** en 375 px la navegación
debía seguir legible y sin scroll horizontal; con Flexbox (D05) los enlaces pasan a
`flex: 1 1 auto` y la barra se centra dentro de la media query inicial, ocupando el ancho
completo sin desborde.

---

## 4. Integrantes del equipo

| Integrante | Aporte |
|------------|--------|
| _Por completar_ | _Por completar_ |

> Pendiente: completar nombres y aporte de cada integrante.

---

## 5. Alcance de esta versión (Fase 1 — Flexbox + Grid, rumbo a PC1)

Cumple los requisitos de la **Fase 1** (PLAN §7, Semanas 3-4): layout con Flexbox en
header/nav/hero y **Grid** en el mosaico de "El detalle", manteniendo la estructura
mínima de la Guía §4 (encabezado, nav de 3 enlaces, hero, bloques informativos, evidencia
responsive, footer) y la identidad visual de La Arboleda instalada.

**Fuera de alcance en esta fase** (regla de oro del PLAN §0/§6): animaciones/transiciones
y parallax 3D (Unidad 3), preprocesadores SASS/LESS (Unidad 2) y frameworks CSS
(Bootstrap/Tailwind/Material, Unidad 4).
