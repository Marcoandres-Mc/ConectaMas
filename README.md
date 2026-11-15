# ConectaMás · Landing Page

> **Encuentra a tu gente. Vive tu hobby.**

Landing page de **ConectaMás**, una startup formada por estudiantes de la Facultad de Ingeniería de la Universidad Peruana de Ciencias Aplicadas (UPC). Este repositorio contiene el avance de implementación (work-in-progress) de la landing, desarrollado con **HTML, CSS y JavaScript** (sin frameworks CSS), siguiendo los wireframes, mock-ups y la guía de estilo definidos en el informe del Trabajo Final.

- **Curso:** 1ASI0385 · IHC y Tecnologías Móviles (NRC 6342) · Ciclo 202620
- **Profesor:** Kevin Edgar Salazar Ruiz
- **Prototipo en Figma:** [ConectaMás – Landing](https://www.figma.com/proto/ThbWMgOJghoNz2h0exYhJR/ConectaMas?node-id=59-3494&p=f&t=JvWqI2x1Ubn82ww7-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1)

## Sobre el proyecto

ConectaMás facilita el encuentro entre personas con intereses y pasatiempos afines y las conecta con negocios, emprendedores y expertos independientes que ofrecen actividades, productos y servicios relacionados con esos hobbies.

| | |
|---|---|
| **Misión** | Conectar a personas con intereses afines y a negocios especializados a través de una plataforma digital segmentada por hobbies, facilitando el descubrimiento de actividades, el aprendizaje de nuevas habilidades y la creación de comunidades sostenibles. |
| **Visión** | Ser la red social líder en Latinoamérica para la conexión de personas, expertos y negocios en torno a sus pasatiempos, impulsando el bienestar social, el emprendimiento local y comunidades activas e interconectadas. |

**Problema que resuelve:** a muchas personas les cuesta conocer a otras que comparten sus pasatiempos, y los negocios y expertos de ocio no cuentan con un canal que los acerque a un público realmente interesado. Las redes generalistas no segmentan por hobbies ni conectan la oferta local con quienes quieren practicar o aprender.

## Segmentos objetivo

1. **Personas interesadas en socializar y desarrollar hobbies** — jóvenes y adultos de 18 a 45 años que quieren conocer gente afín, ampliar su círculo social o iniciarse en nuevas actividades (deportes, arte, gastronomía, tecnología, entre otras).
2. **Negocios y emprendedores locales relacionados a hobbies** — academias, talleres, estudios, tiendas especializadas y emprendimientos que buscan convertir su alcance en ventas y conocer a su público.
3. **Expertos e instructores independientes** — instructores, coaches, artistas o especialistas que dictan clases o talleres y buscan un canal directo para conseguir alumnos sin intermediarios.

## Principales características de la solución

- **Segmentación por hobbies:** los usuarios registran sus aficiones y reciben sugerencias de personas y comunidades afines.
- **Mapa de actividades en tiempo real:** eventos, negocios y expertos cercanos, con pines por tipo (evento, negocio, experto, punto de interés).
- **Comunidades por hobby:** grupos activos cerca del usuario, con opción de unirse y chatear.
- **Módulo para negocios y expertos:** publicación de talleres, clases, eventos y productos a un público segmentado por interés, con panel de visitas y reservas.
- **Confianza y seguridad:** perfiles verificados, reseñas reales y ubicación opcional (el usuario decide qué comparte).
- **Planes:** Explorador (gratis), Negocio (S/ 29 por mes) y Experto (comisión por clase). *Precios referenciales.*

## Alcance de este avance (work-in-progress)

Secciones implementadas en `public/index.html`, según los mock-ups del informe:

- [x] Navbar con ítem activo según scroll y menú hamburguesa en pantallas pequeñas
- [x] Hero con propuesta de valor, CTA y mockup de la app
- [x] Explora por hobby (chips interactivos) y tarjetas de beneficios
- [x] Cómo funciona y mapa en tiempo real (pines interactivos)
- [x] Comunidades por hobby
- [x] Para negocios y expertos, y planes
- [x] Testimonios y preguntas frecuentes (acordeón accesible)
- [x] Nuestro equipo y formulario de Contáctanos (con validación)
- [x] Modal «Crear cuenta» (con validación) y CTA final
- [x] Footer
- [ ] Pantallas complementarias: Explorar mapa y Panel de negocios *(siguiente iteración)*
- [ ] Fotografías reales y textos alternativos definitivos *(siguiente iteración)*

## Guía de estilo aplicada

- **Tipografía:** Poppins (Regular, SemiBold, Bold) desde Google Fonts, con respaldo de fuentes del sistema.
- **Paleta:** Azul Conecta `#0B4DA2` · Azul Marino `#0A2540` · Amarillo Energía `#F5B800` · Verde Comunidad `#1E9E6A` (variante oscura `#157A52`) · Rojo Ubicación `#E63946` · Gris Claro `#F5F7FA` · Gris Texto `#4A5568`.
- **Espaciado:** escala de 4 px; radios de 8 px (botones e inputs) y 12 px (cards); sombras suaves.
- **Responsive:** Mobile 320–767 px · Tablet 768–1023 px · Desktop ≥ 1024 px (menú hamburguesa y cuadrículas a 1 columna en pantallas medianas y pequeñas).
- **Accesibilidad:** contraste AA, foco visible, etiquetas visibles en formularios, `aria-*` en acordeón y menú, y respeto de `prefers-reduced-motion`.

## Tecnologías

HTML5 · CSS3 · JavaScript (ES6) · [Google Fonts](https://fonts.google.com/) · [Font Awesome](https://fontawesome.com/). Sin CSS frameworks.

## Estructura del proyecto

```
conectamas-landing/
├── README.md
└── public/
    ├── index.html
    ├── favicon.ico
    └── assets/
        ├── styles/
        │   └── styles.css
        ├── images/
        │   ├── logo.png
        │   └── logo-symbol.png
        └── scripts/
            └── main.js
```

## Cómo ejecutarlo

1. Clona el repositorio:
   ```bash
   git clone https://github.com/<organizacion>/conectamas-landing.git
   ```
2. Abre `public/index.html` en el navegador (o, en WebStorm, clic derecho sobre el archivo → *Open in Browser*).

## Flujo de trabajo (GitFlow)

| Rama | Propósito |
|---|---|
| `main` | Versión estable / entregable |
| `develop` | Integración del trabajo del equipo |
| `feature/<nombre>` | Nuevas funcionalidades, creadas desde `develop` |

Ejemplos de ramas feature: `feature/hero-section`, `feature/communities-plans`, `feature/team-contact-form`.

## Autores

Equipo **ConectaMás** · UPC · Ingeniería de Software / Ingeniería de Sistemas de Información

| Integrante | Código |
|---|---|
| Herrera Albites, Marcoandres | U202518934 |
| Torres Honores Pimentel, Gino | U202315369 |
| Quiroz Sucno, Ayrton Jhonny | U20231B927 |
| Saenz Espinoza, Denis Anderson | U20241G092 |
| Quispe Almonacid, Andre Sebastian | U201815005 |
| De la Cruz Torre, Jeffrey Derick | U202418952 |

---
*Proyecto académico · Lima, 2026.*
