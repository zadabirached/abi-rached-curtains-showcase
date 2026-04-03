const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
            A family business, built on trust
          </h2>
          <div className="w-12 h-px bg-accent mx-auto mb-8" />
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Abi Rached Curtains started in the early 1990s as a small workshop in Lebanon. What began as one man's dedication to fabric and finish has grown into a trusted name across the country. For over 30 years, we've worked with homeowners, architects, and interior designers — always hands-on, always attentive.
          </p>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            We still do things the way they should be done: we visit your home, take exact measurements, discuss your preferences in person, and make sure every panel hangs exactly right. Our workshop handles everything — cutting, sewing, finishing, and installation.
          </p>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
            Thousands of homes across Lebanon and abroad carry our work. Each one is different, and that's the point. We don't do one-size-fits-all. We do one-client-at-a-time.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto text-center">
          {[
            { number: "30+", label: "Years of Experience" },
            { number: "3,000+", label: "Homes Completed" },
            { number: "100%", label: "Custom Work" },
            { number: "1", label: "Family, One Standard" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-2xl md:text-3xl text-foreground">{stat.number}</p>
              <p className="font-sans text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
