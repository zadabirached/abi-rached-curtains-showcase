import { useState } from "react";
import { X } from "lucide-react";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { src: p1, alt: "Deep velvet curtains with elegant pleats", label: "Velvet Drapes · Beirut" },
  { src: p2, alt: "Modern bedroom with sheer and blackout layers", label: "Sheer & Blackout · Jounieh" },
  { src: p3, alt: "Classic golden curtains in a formal dining room", label: "Classic Swag · Byblos" },
  { src: p4, alt: "Motorized curtains in a contemporary living room", label: "Motorized · Rabieh" },
  { src: p5, alt: "Ornate traditional curtains in a Lebanese salon", label: "Traditional Salon · Zahle" },
  { src: p6, alt: "Layered curtains in a master bedroom", label: "Layered Drapes · Batroun" },
];

const PortfolioSection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Selected Projects
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-end p-4">
                <span className="font-sans text-xs uppercase tracking-wider text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {p.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={projects[lightbox].src}
            alt={projects[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
