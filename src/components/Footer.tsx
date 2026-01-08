import { Github, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    Product: ["Features", "Pricing", "Demos", "Changelog"],
    Resources: ["Documentation", "Tutorials", "Blog", "Support"],
    Company: ["About", "Contact", "Careers", "Legal"]
  };

  return (
    <footer id="docs" className="py-16 bg-muted/30 border-t scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold text-foreground mb-4">starter theme</div>
            <p className="text-muted-foreground max-w-sm mb-6">
              A minimalist, blazing-fast WordPress theme crafted for modern creators.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-card border hover:bg-muted transition-colors">
                <Twitter className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-card border hover:bg-muted transition-colors">
                <Github className="w-5 h-5 text-muted-foreground" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-card border hover:bg-muted transition-colors">
                <Youtube className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 starter theme. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
