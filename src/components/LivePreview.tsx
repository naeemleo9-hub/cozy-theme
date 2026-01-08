import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Monitor, Tablet, Smartphone, ExternalLink } from "lucide-react";

const demos = [
  { id: 1, name: "Blog", image: "blog" },
  { id: 2, name: "Portfolio", image: "portfolio" },
  { id: 3, name: "Business", image: "business" },
  { id: 4, name: "Magazine", image: "magazine" },
];

const LivePreview = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  const deviceWidths = {
    desktop: "100%",
    tablet: "768px",
    mobile: "375px"
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Live Theme Previews
          </h2>
          <p className="text-xl text-muted-foreground">
            Explore our beautiful demo sites. Click to see them in action.
          </p>
        </div>

        {/* Demo selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {demos.map((demo, index) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeDemo === index
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {demo.name}
            </button>
          ))}
        </div>

        {/* Device selector */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { type: "desktop" as const, icon: Monitor },
            { type: "tablet" as const, icon: Tablet },
            { type: "mobile" as const, icon: Smartphone }
          ].map(({ type, icon: Icon }) => (
            <button
              key={type}
              onClick={() => setDevice(type)}
              className={`p-3 rounded-lg transition-all ${
                device === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
        </div>

        {/* Preview frame */}
        <div className="flex justify-center">
          <div 
            className="transition-all duration-500 ease-out"
            style={{ width: deviceWidths[device], maxWidth: "100%" }}
          >
            <div className="bg-card rounded-2xl shadow-2xl border overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/50 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground text-center">
                    {demos[activeDemo].name.toLowerCase()}.starter-theme-demo.starter-theme.dev
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>

              {/* Preview content */}
              <div className="aspect-[16/10] bg-gradient-to-br from-muted to-background p-6 md:p-10">
                <div className="h-full bg-card rounded-xl shadow-sm border overflow-hidden">
                  {/* Simulated website content based on demo type */}
                  <div className="h-full p-4 md:p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 border-b">
                      <div className="h-6 w-24 bg-primary/30 rounded" />
                      <div className="flex gap-3">
                        <div className="h-3 w-12 bg-muted-foreground/20 rounded hidden sm:block" />
                        <div className="h-3 w-12 bg-muted-foreground/20 rounded hidden sm:block" />
                        <div className="h-3 w-12 bg-muted-foreground/20 rounded hidden sm:block" />
                        <div className="h-6 w-16 bg-primary rounded" />
                      </div>
                    </div>
                    
                    {/* Content varies by demo */}
                    {activeDemo === 0 && (
                      <div className="grid md:grid-cols-3 gap-4 pt-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="space-y-2">
                            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
                            <div className="h-4 w-3/4 bg-foreground/10 rounded" />
                            <div className="h-3 w-full bg-muted rounded" />
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {activeDemo === 1 && (
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                          <div key={i} className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
                        ))}
                      </div>
                    )}
                    
                    {activeDemo === 2 && (
                      <div className="flex flex-col md:flex-row gap-6 pt-2">
                        <div className="flex-1 space-y-3">
                          <div className="h-8 w-3/4 bg-foreground/10 rounded" />
                          <div className="h-4 w-full bg-muted rounded" />
                          <div className="h-4 w-5/6 bg-muted rounded" />
                          <div className="h-10 w-32 bg-primary rounded mt-4" />
                        </div>
                        <div className="flex-1 aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
                      </div>
                    )}
                    
                    {activeDemo === 3 && (
                      <div className="space-y-4 pt-2">
                        <div className="aspect-[3/1] bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="space-y-2">
                              <div className="aspect-[4/3] bg-muted rounded-lg" />
                              <div className="h-3 w-3/4 bg-foreground/10 rounded" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" className="h-12">
            <ExternalLink className="mr-2 h-4 w-4" />
            View Full Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LivePreview;
