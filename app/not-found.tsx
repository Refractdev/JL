import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/app/components/site/Header";
import Footer from "@/app/components/site/Footer";

export default function NotFound() {
  return (
    <>
      <Header alwaysSolid />
      <main className="relative overflow-hidden">
        <div
          className="bloom bloom-blush left-1/2 top-1/4 h-[34rem] w-[34rem] -translate-x-1/2"
          aria-hidden
        />
        <div className="shell-narrow relative z-10 flex min-h-[80svh] flex-col items-center justify-center py-32 text-center">
          <span className="eyebrow">Erro 404</span>
          <h1 className="display mt-7 text-display-xl">
            Página não <em className="not-italic text-bronze-deep">encontrada</em>
          </h1>
          <p className="lede mt-6 max-w-measure-lg text-pretty">
            A página que procuras não existe ou foi movida. Volta ao início ou
            fala connosco no WhatsApp.
          </p>
          <Link href="/" className="btn btn-primary mt-10">
            Voltar ao início
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
