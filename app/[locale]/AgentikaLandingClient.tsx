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
import { useTranslations } from "next-intl"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function AgentikaLandingClient() {
  const tHeader = useTranslations("Header")
  const tHero = useTranslations("Hero")
  const tHow = useTranslations("HowItWorks")
  const tBenefits = useTranslations("Benefits")
  const tCases = useTranslations("Cases")
  const tSecurity = useTranslations("Security")
  const tPricing = useTranslations("Pricing")
  const tFAQ = useTranslations("FAQ")
  const tFooter = useTranslations("Footer")
  const tCTA = useTranslations("CTA")
  const tModal = useTranslations("Modal")

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalConfig, setModalConfig] = useState({
    title: tModal("default_title"),
    description: tModal("default_desc"),
  })

  const openModal = (title?: string, description?: string) => {
    // If title is passed, use it. If not, reset to default (translated) values.
    // Wait, useState initial value is only set once.
    // I need to ensure modal uses current translations.
    // But modalConfig is state.
    // Better to pass keys or just translation strings.
    // For specific overrides like "Contacta con nosotros", I should pass translated strings.

    // Actually, I can just set state with strings.
    const defaultTitle = tModal("default_title")
    const defaultDesc = tModal("default_desc")

    if (title) {
      setModalConfig({ title, description: description || defaultDesc })
    } else {
      setModalConfig({ title: defaultTitle, description: defaultDesc })
    }
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

  // Helper to map icons
  const howIcons: any = { FileText, Target, Bot, CheckCircle }
  const benefitIcons: any = { Clock, Zap, Shield, Settings, HeadphonesIcon, TrendingUp }
  const caseIcons: any = { Users, Mail, Settings, BarChart3 }
  const securityIcons: any = { Lock, Shield, Award }
  const howColors = ["from-blue-500 to-blue-600", "from-cyan-500 to-cyan-600", "from-blue-600 to-cyan-600", "from-green-500 to-green-600"]
  const benefitColors = ["from-blue-500 to-blue-600", "from-cyan-500 to-cyan-600", "from-green-500 to-green-600", "from-purple-500 to-purple-600", "from-orange-500 to-orange-600", "from-indigo-500 to-indigo-600"]
  const caseColors = ["from-blue-500 to-blue-600", "from-cyan-500 to-cyan-600", "from-purple-500 to-purple-600", "from-green-500 to-green-600"]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between max-w-full">
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
              {tHeader("nav.home")}
            </button>
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {tHeader("nav.how_it_works")}
            </button>
            <button
              onClick={() => scrollToSection("casos")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {tHeader("nav.cases")}
            </button>
            <button
              onClick={() => scrollToSection("precios")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {tHeader("nav.pricing")}
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {tHeader("nav.faq")}
            </button>
            <button
              onClick={() => openModal(tModal("contact_title"), tModal("contact_desc"))}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {tHeader("nav.contact")}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              onClick={() => openModal()}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hidden sm:flex"
            >
              {tHeader("cta")}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 px-4 sm:px-6" aria-labelledby="hero-title">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <header className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 text-xs sm:text-sm">
                  {tHero("badge")}
                </Badge>
                <h1 id="hero-title" className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  {tHero("title_prefix")}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    {tHero("title_highlight")}
                  </span>{" "}
                  {tHero("title_suffix")}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {tHero("description")}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => openModal()}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                >
                  {tHero("cta_primary")}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("casos")}
                  className="text-base sm:text-lg px-6 sm:px-8 border-slate-300 bg-transparent w-full sm:w-auto"
                >
                  {tHero("cta_secondary")}
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{tHero("check_1")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>{tHero("check_2")}</span>
                </div>
              </div>
            </header>

            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl sm:rounded-3xl p-4 sm:p-8 relative overflow-hidden">
                <Image
                  src="/images/hero-agentika.png"
                  alt="Automatización empresarial con agentes de IA"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-xl sm:rounded-2xl max-w-full"
                  priority
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section
        id="como-funciona"
        className="py-12 sm:py-16 px-4 sm:px-6 bg-white"
        aria-labelledby="como-funciona-title"
      >
        <div className="container mx-auto max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 id="como-funciona-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {tHow("title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {tHow("description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {["0", "1", "2", "3"].map((key, index) => {
              const step = tHow.raw(`steps.${key}`) as any;
              const Icon = index === 0 ? FileText : index === 1 ? Target : index === 2 ? Bot : CheckCircle;

              return (
                <Card
                  key={index}
                  className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 group ${index === 0 ? "cursor-pointer hover:ring-2 hover:ring-blue-500/20" : ""
                    }`}
                  onClick={index === 0 ? () => openModal() : undefined}
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${howColors[index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-slate-400 mb-2">PASO {step.step}</div>
                    <CardTitle className={`text-xl text-slate-800 ${index === 0 ? "group-hover:text-blue-600 transition-colors" : ""}`}>
                      {step.title}
                      {index === 0 && (
                        <ArrowRight className="inline-block ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center">{step.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">{tBenefits("title")}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {tBenefits("description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["0", "1", "2", "3", "4", "5"].map((key, index) => {
              const item = tBenefits.raw(`items.${key}`) as any;
              const icons = [Clock, Zap, Shield, Settings, HeadphonesIcon, TrendingUp];
              const Icon = icons[index];

              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefitColors[index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section id="casos" className="py-16 px-4 bg-white" aria-labelledby="casos-title">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 id="casos-title" className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {tCases("title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {tCases("description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["0", "1", "2", "3"].map((key, index) => {
              const item = tCases.raw(`items.${key}`) as any;
              const icons = [Users, Mail, Settings, BarChart3];
              const Icon = icons[index];
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${caseColors[index]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-slate-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 text-center text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              {tSecurity("title")}
            </h2>
            <p className="text-xl text-slate-600">{tSecurity("description")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["0", "1", "2"].map((key, index) => {
              const item = tSecurity.raw(`items.${key}`) as any;
              const icons = [Lock, Shield, Award];
              const Icon = icons[index];
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              )
            })}
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
              {tPricing("title")}
            </h2>
            <p className="text-xl text-slate-600">{tPricing("description")}</p>
          </div>

          <Card className="border-0 shadow-xl max-w-2xl mx-auto">
            <CardHeader className="text-center pb-8">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-slate-800 mb-4">
                {tPricing("card.title")}
              </CardTitle>
              <CardDescription className="text-lg text-slate-600">
                {tPricing("card.description")}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {(tPricing.raw("card.features") as string[]).map((feature, index) => (
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
                  {tPricing("card.cta")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">
                  {tPricing("card.note")}
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
              {tFAQ("title")}
            </h2>
            <p className="text-xl text-slate-600">
              {tFAQ("description")}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4 w-full">
            {["0", "1", "2", "3", "4"].map((key, index) => {
              const item = tFAQ.raw(`items.${key}`) as any;
              return (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-slate-800 hover:text-blue-600">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-2">{item.answer}</AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            {tCTA("title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {tCTA("description")}
          </p>

          <div className="space-y-4">
            <Button
              size="lg"
              onClick={() =>
                openModal(
                  tModal("cta_title"),
                  tModal("cta_desc")
                )
              }
              className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-12 py-4"
            >
              {tCTA("button")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm opacity-75">
              {tCTA("note")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-6" role="contentinfo">
        <div className="container mx-auto max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Agentika</span>
              </div>
              <p className="text-slate-400">{tFooter("subtitle")}</p>
            </div>

            <div className="md:text-right">
              <h4 className="font-semibold mb-4">{tFooter("contact.title")}</h4>
              <div className="space-y-3 text-slate-400 md:items-end md:flex md:flex-col">
                <div className="flex items-center space-x-2 md:flex-row-reverse md:space-x-reverse">
                  <Mail className="w-4 h-4" />
                  <span>hola@agentika.es</span>
                </div>
                <div className="flex items-center space-x-2 md:flex-row-reverse md:space-x-reverse">
                  <MapPin className="w-4 h-4" />
                  <span>{tFooter("contact.address")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Agentika. Todos los derechos reservados.</p>
            <div className="hidden space-x-4 mt-4 md:mt-0">
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
