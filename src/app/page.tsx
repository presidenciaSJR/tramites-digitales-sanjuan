import Header from "@/components/Header";
import Banner from "@/components/inicio/Banner"
import Buscador from "@/components/inicio/Buscador";
import Beneficios from "@/components/inicio/Beneficios";
import Tutoriales from "@/components/inicio/Tutoriales";
import ServiciosGrid from "@/components/inicio/Secciones"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <Banner />
      <Buscador />
      <ServiciosGrid />
      <Beneficios />
      <Tutoriales />


    </main>
  );
}
