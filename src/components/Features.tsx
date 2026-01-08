import { Zap, Palette, Shield, Smartphone, Code, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with lazy loading, minimal CSS, and efficient code architecture."
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Over 200+ design options. Change colors, fonts, layouts without touching code."
  },
  {
    icon: Shield,
    title: "SEO Optimized",
    description: "Built-in schema markup, clean HTML structure, and optimized meta tags."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Responsive design that looks stunning on every device and screen size."
  },
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Clean, well-documented code with hooks and filters for easy customization."
  },
  {
    icon: Layers,
    title: "Block Ready",
    description: "Full Gutenberg support with custom blocks and patterns included."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-muted-foreground">
            Packed with powerful features to create stunning WordPress websites
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
