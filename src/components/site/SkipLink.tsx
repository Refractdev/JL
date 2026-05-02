export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] 
                 focus:bg-foreground focus:text-background focus:px-6 focus:py-3 
                 focus:rounded-full focus:font-medium focus:shadow-lg 
                 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      Saltar para o conteúdo principal
    </a>
  );
}
