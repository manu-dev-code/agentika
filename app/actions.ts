"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
    name: string
    email: string
    company: string
    role?: string
    employees?: string
    processes: string
    message?: string
}) {
    try {
        const { name, email, company, role, employees, processes, message } = formData

        const { data, error } = await resend.emails.send({
            from: "Agentika <notificaciones@agentika.es>",
            to: [process.env.CONTACT_EMAIL_RECIPIENT || "hola@agentika.es"],
            subject: `Nuevo Lead: ${name} de ${company}`,
            replyTo: email,
            html: `
        <h1>Nueva solicitud de análisis gratuito</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${company}</p>
        <p><strong>Cargo:</strong> ${role || "No especificado"}</p>
        <p><strong>Empleados:</strong> ${employees || "No especificado"}</p>
        <p><strong>Procesos a automatizar:</strong></p>
        <p>${processes}</p>
        <p><strong>Mensaje adicional:</strong></p>
        <p>${message || "Sin mensaje adicional"}</p>
      `,
        })

        if (error) {
            console.error("Error enviando email:", error)
            return { success: false, error: error.message }
        }

        return { success: true, data }
    } catch (error) {
        console.error("Error inesperado:", error)
        return { success: false, error: "Ocurrió un error inesperado al enviar el formulario." }
    }
}
