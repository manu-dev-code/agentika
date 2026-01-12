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

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()

    const onSelectChange = (nextLocale: "es" | "en") => {
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale })
        })
    }

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Cambiar idioma</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => onSelectChange("es")}>
                    <span className={locale === "es" ? "font-bold text-blue-600" : ""}>Español</span>
                    {locale === "es" && <Check className="ml-2 h-4 w-4 text-blue-600" />}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onSelectChange("en")}>
                    <span className={locale === "en" ? "font-bold text-blue-600" : ""}>English</span>
                    {locale === "en" && <Check className="ml-2 h-4 w-4 text-blue-600" />}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
