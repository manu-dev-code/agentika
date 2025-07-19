"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Send, CheckCircle } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function ContactModal({
  isOpen,
  onClose,
  title = "Solicita tu análisis gratuito",
  description = "Cuéntanos sobre tu empresa y te ayudaremos a identificar oportunidades de automatización",
}: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    processes: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío del formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Cerrar modal después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false)
      onClose()
      setFormData({
        name: "",
        email: "",
        company: "",
        role: "",
        employees: "",
        processes: "",
        message: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">¡Solicitud enviada!</h3>
            <p className="text-slate-600 mb-4">
              Hemos recibido tu información. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
            </p>
            <p className="text-sm text-slate-500">Esta ventana se cerrará automáticamente...</p>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-800">{title}</DialogTitle>
          <DialogDescription className="text-slate-600">{description}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email corporativo *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="tu@empresa.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Empresa *</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                placeholder="Nombre de tu empresa"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Tu cargo</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={(e) => handleChange("role", e.target.value)}
                placeholder="CEO, Director, Gerente..."
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="employees">Tamaño de la empresa</Label>
            <Select value={formData.employees} onValueChange={(value) => handleChange("employees", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona el número de empleados" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 empleados</SelectItem>
                <SelectItem value="11-50">11-50 empleados</SelectItem>
                <SelectItem value="51-200">51-200 empleados</SelectItem>
                <SelectItem value="201-500">201-500 empleados</SelectItem>
                <SelectItem value="500+">Más de 500 empleados</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="processes">¿Qué procesos te gustaría automatizar? *</Label>
            <Textarea
              id="processes"
              value={formData.processes}
              onChange={(e) => handleChange("processes", e.target.value)}
              placeholder="Describe las tareas repetitivas que más tiempo te consumen: seguimiento de clientes, envío de emails, creación de informes, etc."
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Información adicional</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Cuéntanos más sobre tu empresa, herramientas que usas, objetivos específicos..."
              rows={3}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Solicitar análisis gratuito
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="sm:w-auto bg-transparent">
              Cancelar
            </Button>
          </div>

          <p className="text-xs text-slate-500 text-center">
            Al enviar este formulario, aceptas que nos pongamos en contacto contigo para ofrecerte nuestros servicios.
            No compartimos tu información con terceros.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
