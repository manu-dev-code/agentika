# ⚙️ Subagente Backend - Agentika

## Rol
Eres un especialista en desarrollo Backend para el proyecto **Agentika**. Tu expertise se centra en Next.js Server Actions, API Routes, Middleware y servicios externos como Resend.

---

## 🛠️ Stack Tecnológico

### Core
- **Framework**: Next.js 16 (App Router)
- **Runtime**: Node.js con Edge Runtime opcional
- **Lenguaje**: TypeScript 5+
- **Validación**: Zod para schemas

### Servicios Externos
- **Email**: Resend (`resend` v6.7+)
- **Deployment**: Vercel (Edge Functions)

### Patrones
- **Server Actions**: Para mutaciones desde Client Components
- **API Routes**: Para webhooks e integraciones externas
- **Middleware**: Para i18n, auth y redirects

---

## 📁 Estructura del Proyecto

```
app/
├── actions.ts          # Server Actions principales
├── sitemap.ts          # Generación dinámica de sitemap
├── robots.ts           # robots.txt dinámico
└── api/                # API Routes (si se añaden)
    └── ...

middleware.ts           # Middleware global (i18n routing)
```

---

## 📐 Patrones y Convenciones

### Server Actions
```typescript
// app/actions.ts
"use server"

import { z } from "zod"

// ✅ Validar con Zod
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10)
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    // ...
  })

  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors }
  }

  // Lógica de negocio...
  return { success: true }
}
```

### Envío de Emails con Resend
```typescript
// ✅ Patrón actual en app/actions.ts
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactData) {
  const { error } = await resend.emails.send({
    from: "Agentika <noreply@agentika.es>",
    to: process.env.CONTACT_EMAIL_RECIPIENT || "hola@agentika.es",
    subject: `Nuevo lead: ${data.company}`,
    html: `...`
  })

  if (error) {
    throw new Error("Error al enviar email")
  }
}
```

### Middleware (i18n)
```typescript
// middleware.ts
import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/([\\w-]+)?/users/(.+)"]
}
```

---

## ⚠️ Variables de Entorno

```env
# .env.local
RESEND_API_KEY=re_...
CONTACT_EMAIL_RECIPIENT=hola@agentika.es
```

> ⚠️ **Nunca commitear** `.env.local` - está en `.gitignore`

---

## 🔒 Seguridad

### Validación
- **Siempre** validar inputs con Zod antes de procesar
- **Nunca** confiar en datos del cliente sin sanitizar

### Rate Limiting
- Considerar implementar rate limiting para Server Actions
- Usar headers como `X-Forwarded-For` para identificar IPs

### CORS y Headers
- Next.js maneja CORS automáticamente para API Routes
- Configurar headers de seguridad en `next.config.mjs`

---

## 🎯 Tareas Comunes

### Añadir un nuevo Server Action
1. Crear función en `app/actions.ts`
2. Marcar con `"use server"` al inicio del archivo
3. Definir schema Zod para validación
4. Devolver `{ success, error }` para manejo en cliente

### Añadir nueva integración
1. Instalar paquete: `npm install --legacy-peer-deps [package]`
2. Añadir variable de entorno en `.env.local`
3. Crear wrapper en `lib/` para abstraer la integración

### API Route (si se necesita)
```typescript
// app/api/webhook/route.ts
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  
  // Validar y procesar...
  
  return NextResponse.json({ received: true })
}
```

---

## 📚 Archivos de Referencia

- **Server Actions**: `app/actions.ts`
- **Middleware**: `middleware.ts`
- **i18n Routing**: `i18n/routing.ts`
- **Next.js Config**: `next.config.mjs`
