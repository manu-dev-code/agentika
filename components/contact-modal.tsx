"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Send, CheckCircle, Sparkles, X } from "lucide-react"
import { sendContactEmail } from "@/app/actions"
import { toast } from "sonner"
import { useTranslations } from "next-intl"


interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export function ContactModal({
  isOpen,
  onClose,
  title, // Optional override, otherwise uses default from translations
  description, // Optional override
}: ContactModalProps) {
  const t = useTranslations("ContactModal")
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

  // Defaults if not provided
  const displayTitle = title || t("header_title")
  const displayDescription = description || t("header_description")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
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
      } else {
        setIsSubmitting(false)
        toast.error(t("errors.send_error") + result.error)
      }
    } catch (error) {
      setIsSubmitting(false)
      toast.error(t("errors.unexpected_error"))
      console.error(error)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md border-none bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(37,99,235,0.15)] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 animate-gradient-x" />
          <div className="text-center py-12 px-2 relative">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30 scale-110">
              <CheckCircle className="w-12 h-12 text-white animate-in zoom-in duration-500" />
            </div>
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-3">
              {t("success_title")}
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              {t.rich("success_message", {
                bold: (chunks) => <span className="font-semibold text-blue-600">{chunks}</span>
              })}
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t("preparing_analysis")}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl max-h-[96vh] overflow-hidden border-none bg-white/95 backdrop-blur-2xl shadow-[0_40px_100px_rgba(37,99,235,0.2)] p-0 flex flex-col rounded-3xl">
        {/* Header - Impactant & High Energy */}
        <div className="bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#0891b2] p-8 text-white relative overflow-hidden shrink-0 border-b border-white/10">
          <div className="relative z-10 flex items-start gap-4">
            <div className="bg-white/15 p-3.5 rounded-2xl backdrop-blur-md border border-white/20 shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <Sparkles className="w-7 h-7 text-cyan-200 animate-pulse" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-black tracking-tight leading-tight mb-1.5 text-white">
                {displayTitle}
              </DialogTitle>
              <DialogDescription className="text-blue-50/90 text-sm leading-relaxed max-w-sm font-medium">
                {t.rich("header_description", {
                  highlight: (chunks) => <span className="text-cyan-200 font-extrabold underline decoration-cyan-400/30 underline-offset-4">{chunks}</span>
                })}
              </DialogDescription>
            </div>
          </div>

          {/* Decorative light effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-[50px]" />
        </div>

        <div className="p-8 overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-900 font-bold text-[11px] uppercase tracking-widest ml-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" /> {t("form.name.label")}
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder={t("form.name.placeholder")}
                  required
                  className="bg-slate-50/50 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-11 text-sm px-4 rounded-2xl transition-all shadow-sm focus:bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-900 font-bold text-[11px] uppercase tracking-widest ml-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" /> {t("form.email.label")}
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder={t("form.email.placeholder")}
                  required
                  className="bg-slate-50/50 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-11 text-sm px-4 rounded-2xl transition-all shadow-sm focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="company" className="text-slate-900 font-bold text-[11px] uppercase tracking-widest ml-1 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" /> {t("form.company.label")}
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleChange("company", e.target.value)}
                  placeholder={t("form.company.placeholder")}
                  required
                  className="bg-slate-50/50 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-11 text-sm px-4 rounded-2xl transition-all shadow-sm focus:bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role" className="text-slate-900 font-bold text-[11px] uppercase tracking-widest ml-1 flex items-center gap-2 opacity-70">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> {t("form.role.label")}
                </Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  placeholder={t("form.role.placeholder")}
                  className="bg-slate-50/50 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-11 text-sm px-4 rounded-2xl transition-all shadow-sm focus:bg-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employees" className="text-slate-900 font-bold text-[11px] uppercase tracking-widest ml-1 flex items-center gap-2 opacity-70">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" /> {t("form.employees.label")}
              </Label>
              <Select value={formData.employees} onValueChange={(value) => handleChange("employees", value)}>
                <SelectTrigger className="bg-slate-50/50 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 h-11 text-sm px-4 rounded-2xl transition-all shadow-sm focus:bg-white">
                  <SelectValue placeholder={t("form.employees.placeholder")} />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100 shadow-2xl p-1">
                  <SelectItem value="1-10" className="rounded-xl">{t("form.employees.options.1-10")}</SelectItem>
                  <SelectItem value="11-50" className="rounded-xl">{t("form.employees.options.11-50")}</SelectItem>
                  <SelectItem value="51-200" className="rounded-xl">{t("form.employees.options.51-200")}</SelectItem>
                  <SelectItem value="201-500" className="rounded-xl">{t("form.employees.options.201-500")}</SelectItem>
                  <SelectItem value="500+" className="rounded-xl">{t("form.employees.options.500+")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="processes" className="text-slate-900 font-bold text-[11px] uppercase tracking-widest ml-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" /> {t("form.processes.label")}
              </Label>
              <Textarea
                id="processes"
                value={formData.processes}
                onChange={(e) => handleChange("processes", e.target.value)}
                placeholder={t("form.processes.placeholder")}
                rows={2}
                required
                className="bg-slate-50/50 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-sm px-4 py-3 rounded-2xl transition-all shadow-sm focus:bg-white resize-none min-h-[80px]"
              />
            </div>

            <div className="flex gap-4 pt-3">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-[3] h-14 text-base font-black bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 hover:shadow-[0_10px_40px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all rounded-2xl text-white tracking-widest"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    {t("form.submit.processing")}
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Send className="w-5 h-5 shadow-sm" />
                    {t("form.submit.send")}
                  </div>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-[1] h-14 text-sm font-bold border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-2xl transition-all"
              >
                {t("form.close")}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
