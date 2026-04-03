const reasons = [
  {
    title: "30 Years of Craft",
    desc: "We've been doing this since before most curtain shops existed. Our experience shows in every detail.",
  },
  {
    title: "Personal Service",
    desc: "No call centers. You deal directly with the family. We visit your home and work with you one-on-one.",
  },
  {
    title: "In-House Workshop",
    desc: "Everything is made in our own workshop — no outsourcing, no middlemen. We control the quality from start to finish.",
  },
  {
    title: "Honest Pricing",
    desc: "We quote based on what you actually need. No hidden costs, no upselling. The price we give is the price you pay.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Why Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              We do things differently
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed">
              In a market full of quick fixes and imported ready-made panels, we still believe in doing things properly. Every curtain we make is cut, sewn, and installed with the same attention we'd give our own home.
            </p>
          </div>

          <div className="space-y-8">
            {reasons.map((r, i) => (
              <div key={r.title} className="flex gap-5">
                <span className="font-serif text-2xl text-accent shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{r.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
