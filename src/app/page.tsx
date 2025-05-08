import Banner from "@/components/inicio/Banner"
import Buscador from "@/components/inicio/Buscador";
import Beneficios from "@/components/inicio/Beneficios";
import Tutoriales from "@/components/inicio/Tutoriales";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Banner />
      <Buscador />
      <Beneficios />
      <Tutoriales />


    </main>
  );
}
