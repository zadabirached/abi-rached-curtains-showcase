import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const message = form.message.trim();
    if (!name || !message) return;
    if (name.length > 100 || form.email.length > 255 || message.length > 1000) return;

    toast({
      title: "Thank you",
      description: "We'll get back to you shortly.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Request a free consultation
            </h2>
            <p className="font-sans text-base text-muted-foreground leading-relaxed mb-8">
              Tell us about your project — the rooms, the style you're after, and any preferences you have. We'll arrange a home visit at a time that suits you.
            </p>
            <div className="space-y-4 font-sans text-sm text-muted-foreground">
              <p>
                <span className="text-foreground font-medium">Phone:</span>{" "}
                +961 3 123 456
              </p>
              <p>
                <span className="text-foreground font-medium">Email:</span>{" "}
                info@komach.com
              </p>
              <p>
                <span className="text-foreground font-medium">Location:</span>{" "}
                Wadi Chahrour, Mount Lebanon
              </p>
              <p>
                <span className="text-foreground font-medium">Hours:</span>{" "}
                Mon–Sat, 9:00 AM – 6:00 PM
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Name
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Phone
              </label>
              <input
                type="tel"
                maxLength={20}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-sans text-xs uppercase tracking-wider text-muted-foreground mb-1.5 block">
                Tell us about your project
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full font-sans text-sm uppercase tracking-widest bg-primary text-primary-foreground py-3.5 hover:bg-foreground transition-colors duration-300"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
