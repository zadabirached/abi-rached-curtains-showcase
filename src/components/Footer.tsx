const Footer = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-primary-foreground">
              Komach
            </p>
            <p className="font-sans text-xs text-primary-foreground/50 mt-1">
              Custom curtains since 1994 · Wadi Chahrour, Lebanon
            </p>
          </div>
          <div className="flex items-center gap-8">
            <a href="#home" className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Home</a>
            <a href="#services" className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Services</a>
            <a href="#portfolio" className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Portfolio</a>
            <a href="#contact" className="font-sans text-xs uppercase tracking-wider text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
          <p className="font-sans text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Abi Rached Curtains. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
