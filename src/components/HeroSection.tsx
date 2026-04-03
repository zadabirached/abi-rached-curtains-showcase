import heroImg from "@/assets/hero-curtains.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-end">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Elegant sheer curtains in a sunlit living room"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative container mx-auto px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-xl">
          <p className="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-primary-foreground/80 mb-4">
            Since 1994 · Lebanon
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
            Curtains made with care, fitted with precision
          </h1>
          <p className="font-sans text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-8 max-w-md">
            Three decades of dressing Lebanon's finest homes. Custom curtains designed, sewn, and installed by a family that knows the craft.
          </p>
          <a
            href="#contact"
            className="inline-block font-sans text-sm uppercase tracking-widest border border-primary-foreground/60 text-primary-foreground px-8 py-3 hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
