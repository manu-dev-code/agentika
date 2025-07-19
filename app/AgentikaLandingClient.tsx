"use client"

import { useState } from "react"
import { ContactModal } from "@/components/contact-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Bot,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MessageSquare,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Settings,
  HeadphonesIcon,
  Lock,
  Award,
  Phone,
  MapPin,
  Send,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AgentikaLandingClient() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalConfig, setModalConfig] = useState({
    title: "Solicita tu análisis gratuito",
    description: "Cuéntanos sobre tu empresa y te ayudaremos a identificar oportunidades de automatización",
  })

  const openModal = (title?: string, description?: string) => {
    if (title) setModalConfig({ title, description: description || modalConfig.description })
    setIsModalOpen(true)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Agentika</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Casos
            </button>
            <button
              onClick={() => scrollToSection("precios")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Precios
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => openModal("Contacta con nosotros", "¿Tienes alguna pregunta? Nos encantaría ayudarte")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          <Button
            onClick={() => openModal()}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          >
            Solicita un análisis gratuito
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4" aria-labelledby="hero-title">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <header className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                  🚀 Automatización empresarial con IA
                </Badge>
                <h1 id="hero-title" className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Hasta un{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    95% menos tiempo
                  </span>{" "}
                  en realizar tareas repetitivas
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Analizamos tus procesos y tareas, y te proponemos agentes de IA hechos a medida para automatizar tu
                  negocio
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => openModal()}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg px-8"
                >
                  Empieza gratis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("casos")}
                  className="text-lg px-8 border-slate-300 bg-transparent"
                >
                  Ver casos de éxito
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Análisis 100% gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Solo pagas si implementas</span>
                </div>
              </div>
            </header>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-8 relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Ilustración de agentes de inteligencia artificial colaborando con profesionales para automatizar procesos empresariales"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como-funciona" className="py-16 px-4 bg-white" aria-labelledby="como-funciona-title">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 id="como-funciona-title" className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Cómo funciona nuestro proceso
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Un proceso simple y transparente, diseñado para maximizar tus resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Rellena el formulario",
                description: "Nos cuentas qué tareas repetitivas consumen más tiempo en tu empresa",
                icon: FileText,
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "02",
                title: "Análisis manual",
                description: "Nuestro equipo analiza tu caso específico de forma personalizada",
                icon: Target,
                color: "from-cyan-500 to-cyan-600",
              },
              {
                step: "03",
                title: "Propuesta a medida",
                description: "Te presentamos agentes de IA diseñados específicamente para tus procesos",
                icon: Bot,
                color: "from-blue-600 to-cyan-600",
              },
              {
                step: "04",
                title: "Implementación",
                description: "Solo pagas si decides implementar alguna de nuestras soluciones",
                icon: CheckCircle,
                color: "from-green-500 to-green-600",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-sm font-bold text-slate-400 mb-2">PASO {item.step}</div>
                  <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">¿Por qué elegir Agentika?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Beneficios reales que transformarán la forma en que trabajas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Ahorro de hasta el 95% del tiempo",
                description: "Libera a tu equipo de tareas repetitivas para que se enfoque en lo que realmente importa",
                icon: Clock,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Procesos automáticos 24/7",
                description: "Tus agentes trabajan sin descanso, incluso cuando tu equipo no está disponible",
                icon: Zap,
                color: "from-cyan-500 to-cyan-600",
              },
              {
                title: "Cero errores humanos",
                description: "Elimina los errores manuales y garantiza la consistencia en todos tus procesos",
                icon: Shield,
                color: "from-green-500 to-green-600",
              },
              {
                title: "No necesitas saber de tecnología",
                description: "Nosotros nos encargamos de todo el aspecto técnico, tú solo disfrutas los resultados",
                icon: Settings,
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Apoyo humano en todo momento",
                description: "Nuestro equipo te acompaña durante todo el proceso de implementación",
                icon: HeadphonesIcon,
                color: "from-orange-500 to-orange-600",
              },
              {
                title: "Escalabilidad garantizada",
                description: "Tus agentes crecen contigo, adaptándose a las necesidades de tu empresa",
                icon: TrendingUp,
                color: "from-indigo-500 to-indigo-600",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-800">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section id="casos" className="py-16 px-4 bg-white" aria-labelledby="casos-title">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 id="casos-title" className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Casos de uso populares
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Descubre cómo otras empresas están automatizando sus procesos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Seguimiento automático de leads",
                description: "Nurturing personalizado y seguimiento constante de prospectos",
                icon: Users,
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Envío de emails personalizados",
                description: "Comunicación automatizada adaptada a cada cliente",
                icon: Mail,
                color: "from-cyan-500 to-cyan-600",
              },
              {
                title: "Integración entre herramientas",
                description: "Conecta tu CRM, ERP y otras plataformas sin esfuerzo",
                icon: Settings,
                color: "from-purple-500 to-purple-600",
              },
              {
                title: "Creación automática de informes",
                description: "Reportes detallados generados automáticamente",
                icon: BarChart3,
                color: "from-green-500 to-green-600",
              },
            ].map((caso, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${caso.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <caso.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-800">{caso.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center text-sm">{caso.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prueba social */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Empresas que confían en nosotros</h2>
            <p className="text-xl text-slate-600 mb-8">Más de 150 procesos automatizados con éxito</p>
          </div>

          {/* Logos ficticios */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=60&width=120&query=company logo ${i}`}
                  alt={`Logo empresa ${i}`}
                  width={120}
                  height={60}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "María González",
                role: "Directora de Operaciones",
                company: "TechSolutions",
                content:
                  "Agentika nos ayudó a automatizar nuestro proceso de seguimiento de clientes. Ahora ahorramos 15 horas semanales que dedicamos a estrategia.",
                rating: 5,
              },
              {
                name: "Carlos Ruiz",
                role: "CEO",
                company: "InnovateCorp",
                content:
                  "El análisis gratuito nos convenció inmediatamente. La implementación fue perfecta y los resultados superaron nuestras expectativas.",
                rating: 5,
              },
              {
                name: "Ana Martín",
                role: "Gerente de Marketing",
                company: "GrowthLab",
                content:
                  "Nuestras campañas de email marketing ahora se ejecutan solas. La personalización automática ha mejorado nuestras conversiones un 40%.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic">"{testimonial.content}"</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">
                        {testimonial.role} en {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">Seguridad y transparencia</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Protección de datos",
                description: "Cumplimos con las mejores prácticas de seguridad",
                icon: Lock,
              },
              {
                title: "Sin permanencias",
                description: "Puedes desactivar cualquier agente cuando lo desees",
                icon: Shield,
              },
              {
                title: "Soporte personalizado",
                description: "Atención humana especializada en todo momento",
                icon: Award,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precios */}
      <section
        id="precios"
        className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50"
        aria-labelledby="precios-title"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 id="precios-title" className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Precios transparentes
            </h2>
            <p className="text-xl text-slate-600">Sin sorpresas, sin letra pequeña</p>
          </div>

          <Card className="border-0 shadow-xl max-w-2xl mx-auto">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800 mb-4">Análisis totalmente gratuito</CardTitle>
              <CardDescription className="text-lg text-slate-600">
                Solo pagas si implementas un agente hecho para ti
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {[
                  "Análisis completo de tus procesos - GRATIS",
                  "Propuesta personalizada de agentes - GRATIS",
                  "Consultoría inicial sin compromiso - GRATIS",
                  "Solo pagas si decides implementar",
                  "Cada solución es única, adaptada a tus necesidades",
                  "Soporte continuo incluido",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Button
                  size="lg"
                  onClick={() => openModal()}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-lg"
                >
                  Solicitar análisis gratuito
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  * Agenda una llamada para conocer tu presupuesto personalizado
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-white" aria-labelledby="faq-title">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 id="faq-title" className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Preguntas frecuentes
            </h2>
            <p className="text-xl text-slate-600">Resolvemos tus dudas más comunes</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "¿Qué es un agente de IA?",
                answer:
                  "Un agente de IA es un programa inteligente que puede realizar tareas específicas de forma autónoma. En Agentika, creamos agentes personalizados que se integran con tus herramientas existentes para automatizar procesos repetitivos como envío de emails, seguimiento de leads, generación de informes, etc.",
              },
              {
                question: "¿Qué tipo de tareas se pueden automatizar?",
                answer:
                  "Podemos automatizar prácticamente cualquier tarea repetitiva: seguimiento de clientes, envío de emails personalizados, creación de informes, integración entre sistemas, procesamiento de datos, gestión de inventarios, y mucho más. Durante el análisis gratuito identificamos las mejores oportunidades en tu caso específico.",
              },
              {
                question: "¿Cuánto tarda el análisis?",
                answer:
                  "El análisis inicial toma entre 3-5 días hábiles. Primero completás un formulario detallado sobre tus procesos, luego nuestro equipo analiza tu caso manualmente y te presenta una propuesta personalizada con los agentes recomendados y sus beneficios estimados.",
              },
              {
                question: "¿Y si no quiero pagar nada?",
                answer:
                  "¡Perfecto! El análisis es completamente gratuito y sin compromiso. Recibirás un informe detallado con recomendaciones que puedes implementar por tu cuenta si lo deseas. Solo cobramos si decides que implementemos alguno de los agentes propuestos.",
              },
              {
                question: "¿Puedo desactivar un agente cuando quiera?",
                answer:
                  "Absolutamente. No hay permanencias ni contratos a largo plazo. Puedes pausar o desactivar cualquier agente en cualquier momento. Nuestro objetivo es que obtengas valor real, no retenerte por obligación.",
              },
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-slate-800 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pt-2">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Solicita tu análisis gratuito y descubre cuánto puedes ahorrar
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Miles de horas recuperadas, cero errores, máxima eficiencia. Todo empieza con una conversación.
          </p>

          <div className="space-y-4">
            <Button
              size="lg"
              onClick={() =>
                openModal(
                  "¡Automatiza tu empresa hoy!",
                  "Descubre cuánto tiempo y dinero puedes ahorrar con nuestros agentes de IA personalizados",
                )
              }
              className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-12 py-4"
            >
              Quiero automatizar tareas en mi empresa
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm opacity-75">
              ⚡ Respuesta en menos de 24 horas • 🎯 Análisis 100% personalizado • 💰 Sin costo inicial
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-900 text-white py-16 px-4" role="contentinfo">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Agentika</span>
              </div>
              <p className="text-slate-400">Automatización empresarial con agentes de IA personalizados</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <div className="space-y-2 text-slate-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  Sobre nosotros
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Casos de éxito
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Carreras
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-slate-400">
                <Link href="#" className="block hover:text-white transition-colors">
                  Términos de servicio
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Política de privacidad
                </Link>
                <Link href="#" className="block hover:text-white transition-colors">
                  Cookies
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hola@agentika.es</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Elche, España</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2025 Agentika. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageSquare className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalConfig.title}
        description={modalConfig.description}
      />
    </main>
  )
}
