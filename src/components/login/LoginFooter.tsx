import Link from "next/link";

export default function LoginFooter() {
  return (
    <footer className="text-center mt-4">
      <p className="text-gray-500 text-sm">
        ¿No tienes cuenta?{" "}
        <Link href="/registro" className="text-primary hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </footer>
  );
}
