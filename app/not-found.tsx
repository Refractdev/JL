import Link from "next/link";
import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-8xl font-bold tracking-tight text-primary">
          404
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Página não encontrada
        </p>
        <p className="mt-2 text-muted-foreground">
          A página que procuras não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Voltar ao início
        </Link>
      </main>
      <Footer />
    </>
  );
}
