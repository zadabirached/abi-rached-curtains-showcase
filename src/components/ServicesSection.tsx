import { Ruler, Sun, Moon, Zap, Palette, Wrench } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Curtains",
    desc: "Tailored from fabric selection to final stitch. We work with you to match your space, your style, and your light.",
  },
  {
    icon: Sun,
    title: "Sheer Curtains",
    desc: "Soft, flowing sheers that filter light beautifully. Ideal for living rooms and bedrooms that need warmth without heaviness.",
  },
  {
    icon: Moon,
    title: "Blackout Curtains",
    desc: "Full light blocking for bedrooms, media rooms, or nurseries. Lined and finished for a clean, weighted drape.",
  },
  {
    icon: Zap,
    title: "Motorized Curtains",
    desc: "Smooth, silent motorized tracks for modern homes. Operated by remote or integrated with your smart home system.",
  },
  {
    icon: Ruler,
    title: "Measuring & Fitting",
    desc: "We visit your home, measure every window precisely, and account for ceiling height, recess depth, and clearance.",
  },
  {
    icon: Wrench,
    title: "Installation",
    desc: "Our team handles full installation — tracks, brackets, and hanging — leaving your space clean and your curtains perfect.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background p-8 border border-border hover:border-accent transition-colors duration-300"
            >
              <s.icon size={24} className="text-warm-stone mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-foreground mb-3">{s.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
