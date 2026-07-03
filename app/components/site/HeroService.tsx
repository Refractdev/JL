interface HeroServiceProps {
  title: string
  subtitle: string
  description: string
  backgroundClass?: string
}

export default function HeroService({
  title,
  subtitle,
  description,
  backgroundClass,
}: HeroServiceProps) {
  return (
    <section
      className={`relative min-h-[50vh] flex items-center justify-center overflow-hidden ${
        backgroundClass || "bg-gradient-to-br from-primary/10 via-background to-amber-50/50"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />

      <div className="relative z-10 container-tight text-center py-20">
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
          {subtitle}
        </span>
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-4 max-w-3xl mx-auto">
          {title}
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
