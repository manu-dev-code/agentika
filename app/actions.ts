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
      from: "Agentika <noreply@agentika.es>",
      to: [process.env.CONTACT_EMAIL_RECIPIENT || "hola@agentika.es"],
      subject: `Nuevo Lead: ${name} de ${company}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: -0.025em;">Agentika Leads</h1>
            <p style="color: rgba(255,255,255,0.9); margin-top: 8px; font-size: 16px;">Nueva solicitud de análisis gratuito</p>
          </div>
          <div style="padding: 30px; background-color: white;">
            <h2 style="color: #111827; font-size: 18px; margin-bottom: 20px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">📋 Datos del Solicitante</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #6b7280; width: 150px;"><strong>Nombre:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Empresa:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Cargo:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${role || "<em>No especificado</em>"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #6b7280;"><strong>Tamaño:</strong></td>
                <td style="padding: 8px 0; color: #111827;">${employees || "<em>No especificado</em>"} empleados</td>
              </tr>
            </table>

            <h2 style="color: #111827; font-size: 18px; margin: 30px 0 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">🤖 Necesidades de Automatización</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; color: #334155; line-height: 1.6;">
              ${processes.replace(/\n/g, "<br>")}
            </div>

            ${message
          ? `
              <h2 style="color: #111827; font-size: 18px; margin: 30px 0 15px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">💬 Mensaje Adicional</h2>
              <p style="color: #475569; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
            `
          : ""
        }
          </div>
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} Agentika AI - Sistema de Gestión de Leads</p>
          </div>
        </div>
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
