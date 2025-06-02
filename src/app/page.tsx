import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Bienvenido a la página de inicio de Mi Sitio Web.",
};

export default function Home() {
  return (
    <main>
      <h1>Bienvenido a Mi Sitio Web</h1>
      <p>Contenido de la página de inicio.</p>
    </main>
  );
}
