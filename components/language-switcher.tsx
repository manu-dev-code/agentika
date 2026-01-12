"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/navigation"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe, Check } from "lucide-react"
import { useTransition } from "react"

const FlagES = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" className="h-4 w-6 rounded-sm shadow-sm inline-block mr-2" aria-hidden="true">
        <rect width="750" height="500" fill="#c60b1e" />
        <rect width="750" height="250" y="125" fill="#ffc400" />
    </svg>
)

const FlagEN = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="h-4 w-6 rounded-sm shadow-sm inline-block mr-2" aria-hidden="true">
        <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
    </svg>
)

export function LanguageSwitcher() {
    const locale = useLocale() as "es" | "en"
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    const onSelectChange = (nextLocale: "es" | "en") => {
        if (nextLocale === locale) return
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale })
        })
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="h-9 w-14 px-0 border-slate-200 bg-white hover:bg-slate-50 text-slate-700 transition-all flex items-center justify-center gap-1"
                    title={locale === "es" ? "Cambiar idioma (Español)" : "Change language (English)"}
                >
                    {locale === "es" ? <FlagES /> : <FlagEN />}
                    <Globe className="h-3.5 w-3.5 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 p-1">
                <DropdownMenuItem
                    onClick={() => onSelectChange("es")}
                    className={`cursor-pointer flex items-center p-2 rounded-md transition-colors ${locale === "es" ? "bg-blue-50 text-blue-700" : "hover:bg-slate-100"}`}
                >
                    <FlagES />
                    <span className="flex-1 text-sm font-medium">Español</span>
                    {locale === "es" && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => onSelectChange("en")}
                    className={`cursor-pointer flex items-center p-2 rounded-md transition-colors ${locale === "en" ? "bg-blue-50 text-blue-700" : "hover:bg-slate-100"}`}
                >
                    <FlagEN />
                    <span className="flex-1 text-sm font-medium">English</span>
                    {locale === "en" && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
