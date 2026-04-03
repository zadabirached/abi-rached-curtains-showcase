const testimonials = [
  {
    quote: "We renovated our entire apartment and the curtains were the last thing we did. The Komach team came personally, took measurements, and helped us choose fabrics that matched our furniture. The result was better than what the interior designer suggested.",
    name: "Nadia K.",
    location: "Achrafieh, Beirut",
  },
  {
    quote: "I've used them for two homes now. They're reliable, honest about pricing, and the quality of the stitching is something you notice. The curtains in my first home still look perfect after eight years.",
    name: "Fadi M.",
    location: "Jounieh",
  },
  {
    quote: "We needed motorized curtains for a large living room with floor-to-ceiling windows. They handled the installation cleanly — no mess, no delays. The remote system works flawlessly and the fabric choices were excellent.",
    name: "Rima S.",
    location: "Rabieh",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            What Clients Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background border border-border p-8">
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-sans text-sm text-foreground font-medium">{t.name}</p>
                <p className="font-sans text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
