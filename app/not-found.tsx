import Link from "next/link";
import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center pt-24">
        <h1 className="font-serif text-7xl md:text-8xl tracking-tight text-primary">
          404
        </h1>
        <p className="mt-4 text-xl text-foreground">Página não encontrada</p>
        <p className="mt-2 text-muted-foreground max-w-md">
          A página que procuras não existe ou foi movida.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Voltar ao início
        </Link>
      </main>
      <Footer />
    </>
  );
}
