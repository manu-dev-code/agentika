import AgentikaLandingClient from "./AgentikaLandingClient"

// Añadir metadata específica de la página
export const metadata = {
  title: "Agentika - Automatización Empresarial con IA | Ahorra hasta 95% del Tiempo",
  description:
    "Automatiza procesos repetitivos con agentes de IA personalizados. Análisis gratuito, solo pagas si implementas. Ahorra hasta 95% del tiempo en tareas operativas.",
}

export default function AgentikaLanding() {
  return <AgentikaLandingClient />
}
