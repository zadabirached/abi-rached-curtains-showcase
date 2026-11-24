import { useState } from "react";
import { X } from "lucide-react";
import pleatedRoman from "@/assets/komach_pleated_roman.jpg.asset.json";
import sheerWave from "@/assets/komach_sheer_wave.jpg.asset.json";
import coastalRoller from "@/assets/komach_coastal_roller.jpg.asset.json";
import panelTrack from "@/assets/komach_panel_track.jpg.asset.json";
import zebraBlinds from "@/assets/komach_zebra_blinds.jpg.asset.json";
import embroideredPelmet from "@/assets/komach_embroidered_pelmet.jpg.asset.json";
import archedValance from "@/assets/komach_arched_valance.jpg.asset.json";
import classicSwags from "@/assets/komach_classic_swags.jpg.asset.json";
import portiereDrapes from "@/assets/komach_portiere_drapes.jpg.asset.json";

const projects = [
  { src: pleatedRoman.url, alt: "Floor-to-ceiling tailored pinch-pleat drapes paired with a matching Roman blind", label: "Pleated Drapes & Roman Blind" },
  { src: sheerWave.url, alt: "Floor-to-ceiling sheer wave curtains with concealed warm cove lighting", label: "Sheer Wave Curtains" },
  { src: coastalRoller.url, alt: "Architectural motorized blackout roller shade framing a coastal sea view", label: "Motorized Blackout Shade" },
  { src: panelTrack.url, alt: "Sliding sheer panel track curtains paired with woven Roman blinds", label: "Panel Track & Woven Blinds" },
  { src: zebraBlinds.url, alt: "Warm-toned day and night zebra blinds fitted across a corner window", label: "Day & Night Zebra Blinds" },
  { src: embroideredPelmet.url, alt: "Custom velvet-trimmed embroidered pelmet over draped silk curtains", label: "Embroidered Pelmet & Silk Drapes" },
  { src: archedValance.url, alt: "Hand-tailored damask valance with tassel trim fitted to a carved stone arch", label: "Arched Stone Window Drapery" },
  { src: classicSwags.url, alt: "Full-wall classic swags, jabots, and fringed brocade salon drapery", label: "Classic Swag & Tailored Pleats" },
  { src: portiereDrapes.url, alt: "Classical doorway portière drapes with bullion fringe under a gilded cornice", label: "Carved Cornice & Portière" },
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
          <div className="flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={projects[lightbox].src}
              alt={projects[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary-foreground/80">
              {projects[lightbox].label}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
