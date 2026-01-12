# Guía de Mantenimiento y Desarrollo - Agentika

Este documento detalla la estructura técnica, dependencias y configuraciones críticas de Agentika para asegurar que el proyecto se mantenga "AI-Ready" y optimizado para SEO/Internacionalización.

## 🚀 Tecnologías Core (Stack 2026)
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19 + TailwindCSS + Shadcn/UI
- **i18n**: `next-intl` (Soporte nativo para ES/EN)
- **Deployment**: Vercel

## 📦 Gestión de Dependencias
Debido a conflictos técnicos menores entre `react-day-picker` y `date-fns` v4, es **obligatorio** usar:

```bash
npm install --legacy-peer-deps
```

*Nota: Se ha incluido un archivo `.npmrc` con `legacy-peer-deps=true` para que Vercel y otros entornos realicen la instalación correctamente de forma automática.*

## 🌐 Internacionalización (i18n)
El proyecto utiliza una estructura de rutas por locale: `app/[locale]/...`

- **Traducciones**: Se encuentran en la carpeta `/messages/` (`es.json` y `en.json`).
- **Nuevos textos**: Para añadir contenido, agrégalo a ambos JSON para mantener la paridad.
- **Selector**: Componente `LanguageSwitcher` con `modal={false}` para evitar saltos de layout tras la hidratación.

## 🔍 SEO & Visibilidad IA (Stack 2026)
Agentika está optimizada para ser indexada por motores de búsqueda tradicionales y citada por modelos de lenguaje (LLMs).

### 1. Visibilidad IA (`llms.txt`)
Ubicado en `/public/llms.txt`. Es un resumen en Markdown que los crawlers de IA (Claude, GPT, Perplexity) leen para entender el servicio sin lidiar con el HTML. **Actualízalo si cambias el núcleo de los servicios.**

### 2. Sitemap Dinámico (`app/sitemap.ts`)
Genera automáticamente las URLs para todos los idiomas y define las relaciones `hreflang`. No uses sitemaps estáticos en `public/`.

### 3. Robots.txt Dinámico (`app/robots.ts`)
Configurado para permitir el rastreo de todas las páginas relevantes y bloquear rutas privadas o de API.

### 4. Datos Estructurados (Schema.org)
Implementado vía JSON-LD en el `RootLayout`. Provee metadatos ricos sobre:
- **Organización** (Agentika)
- **Servicios** (Automatización IA)
- **Ofertas** (Análisis gratuito)

## 📧 Integraciones con Terceros
- **Resend**: Utilizado para el envío de correos desde el formulario de contacto (`app/actions.ts`).
  - Requiere variable de entorno: `RESEND_API_KEY`.
  - Configurado para enviar leads al mail de la variable de entorno `CONTACT_EMAIL_RECIPIENT o en su defecto a `hola@agentika.es`.

## 🛠️ Notas de Desarrollo Críticas
1. **Hidratación**: En `layout.tsx`, la etiqueta `<html>` tiene `suppressHydrationWarning` para evitar errores con el sistema de temas (dark/light mode).
2. **Footer**: El año es dinámico (`new Date().getFullYear()`). Los iconos sociales están ocultos por CSS (`hidden`).
3. **Build**: Siempre verifica cambios con `npm run build` antes de realizar un push para asegurar que no hay errores de tipado o rutas.

---
© 2026 Agentika - Documentación Técnica Interna.
