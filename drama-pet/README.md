# Drama Pet

Proyecto de portafolio frontend: una clinica veterinaria ficticia ubicada en Lima, Peru.

## Descripcion

Drama Pet es una experiencia web completa para una veterinaria moderna dirigida a pet lovers. El proyecto demuestra desarrollo frontend moderno con Angular, UX/UI deliberada, arquitectura organizada y un booking funcional con datos mock.

**Este es un proyecto ficticio.** No existe un negocio real detras de Drama Pet.

## Objetivo

Demostrar capacidad de construir una experiencia frontend completa: no solo una landing page visualmente atractiva, sino una aplicacion con navegacion, formularios, estados, animaciones, SSR y buenas practicas de accesibilidad.

## Problema

Las veterinarias tradicionales suelen tener presencia digital debil o generica. Drama Pet imagina una marca con personalidad: cool, cercana, ligeramente irreverente, pero profesionalmente seria cuando se trata de salud animal.

## Publico

Pet lovers que:
- Tienen perros o gatos
- Consideran a sus mascotas parte importante de su vida
- Valoran una atencion cercana
- Estan acostumbrados a experiencias digitales
- Quieren reservar rapidamente
- Valoran una marca con personalidad

## Funcionalidades

- **Navegacion** completa con navbar responsive y menu fullscreen en mobile
- **Home** con hero editorial, servicios preview interactivos, como funciona, promocion, testimonios y CTA final
- **Servicios** con composicion editorial interactiva (desktop) y cards (mobile)
- **Emergencias** sin booking - accion directa a llamada/WhatsApp
- **Booking** completo en 6 pasos: mascota, servicio, preguntas adaptativas, veterinario, fecha/hora, resumen + confirmacion
- **Mascotas** guardadas localmente (localStorage, SSR-safe)
- **Nuestra manada** con equipo, valores, filosofia e historia
- **FAQ** con acordeones y categorias
- **Contacto** con formulario Reactivo, informacion y mapa placeholder
- **Diseno responsive** mobile-first
- **Animaciones** moderadas y respeto a prefers-reduced-motion
- **Accesibilidad** basica: HTML semantico, labels, aria, focus visible, navegacion por teclado

## Stack

- Angular 22.x
- TypeScript (configuracion estricta)
- Angular Router
- Standalone Components
- Angular Reactive Forms
- Angular Signals
- Angular SSR + hydration
- Tailwind CSS (via @tailwindcss/postcss)
- CSS Custom Properties (design tokens)
- SCSS
- SVG icons inline

### No se usa

- React, Next.js, Vue
- Angular Material, Bootstrap
- Backend, Firebase, Supabase
- Autenticacion, login, dashboard
- Ecommerce, pasarela de pagos
- Librerias UI completas
- Emojis en ninguna parte

## Arquitectura

```
src/app/
  core/
    navbar/
    footer/
    mobile-menu/
  shared/
    button/
    section-heading/
    icon/
  features/
    home/
      hero/
      services-preview/
      how-it-works/
      promo/
      testimonials/
      cta-final/
    services/
      services-page/
    booking/
      booking-page/
      pet-step/
      service-step/
      questions-step/
      vet-step/
      date-step/
      review-step/
      booking-summary/
      booking-success/
      services/
    about/
      team-page/
        team-card/
    faq/
      faq-page/
      accordion/
    contact/
      contact-page/
      contact-form/
  data/
```

## Decisiones UX

- **Booking en 6 pasos** para no abrumar al usuario
- **Preguntas adaptativas** segun el servicio seleccionado
- **Veterinario opcional** para reducir friccion
- **Emergencias sin booking** porque no requieren cita previa
- **Mascotas guardadas localmente** para evitar repetir datos
- **Resumen sticky** en desktop, colapsable en mobile
- **Confirmacion con humor** ("Drama resuelto. Cita reservada.")

## Decisiones Visuales

- **Paleta**: Crema (#F5F1E8) + Negro (#111111) + Verde lima (#C7FF3D) como acento
- **Tipografia**: Bricolage Grotesque (display) + Inter (UI)
- **Composicion**: Editorial, modular, asimetrica, con mucho whitespace
- **Cards**: Radios generosos, composicion variable, sin sombras fuertes
- **Fotografia**: Protagonistas, luminosas, expresiones con personalidad (placeholder temporal)
- **Contraste**: Secciones con fondo negro para ritmo editorial
- **Iconografia**: SVG inline, outline, consistente

## Responsive

Mobile-first con breakpoints:
- Base: mobile
- `md` (768px): tablet
- `lg` (1024px): desktop
- `xl` (1280px): desktop amplio

Mobile: menu fullscreen, cards verticales, CTA contextual.
Desktop: layouts editoriales, grids asimetricos, hover interactions, resumen sticky.

## Accesibilidad

- HTML semantico con landmarks
- Headings jerarquicos
- Navegacion por teclado
- Focus visible
- Labels en formularios
- Errores accesibles
- prefers-reduced-motion
- Areas tactiles adecuadas

## SSR

Angular SSR con hydration. Acceso a localStorage encapsulado en servicio con comprobacion de plataforma.

## Instalacion

```bash
# Instalar dependencias
npm install

# Desarrollo
ng serve

# Build de produccion
ng build

# Preview del build
ng serve --configuration production
```

## Testing

```bash
ng test
```

Testing basico y estrategico enfocado en:
- Validaciones del booking
- Almacenamiento de mascotas
- Estados importantes

## Despliegue

El proyecto esta preparado para desplegarse en Netlify.

```bash
ng build --configuration production
```

La carpeta `dist/drama-pet/browser` contiene los archivos estaticos.

## Screenshots

 Pendientes de agregar despues de la revision visual.

## Licencia

Proyecto de portafolio. Sin licencia comercial.
