import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              New Release — Version 3.0
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Starter theme
              <span className="block text-primary">starter theme</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              A minimalist, blazing-fast WordPress theme crafted for modern creators. 
              Built with performance and elegance in mind.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 text-base font-semibold group">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base font-semibold group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">4.9★</div>
                <div className="text-sm text-muted-foreground">User Rating</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-3xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
          
          {/* Right - Theme Preview */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl opacity-50" />
            <div className="relative bg-card rounded-2xl shadow-2xl border overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground">
                    starter-theme-demo.starter-theme.dev
                  </div>
                </div>
              </div>
              
              {/* Preview content */}
              <div className="aspect-[4/3] bg-gradient-to-br from-background to-muted p-8">
                <div className="h-full rounded-lg bg-card shadow-sm border p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-8 w-32 bg-primary/20 rounded" />
                    <div className="flex gap-2">
                      <div className="h-4 w-16 bg-muted rounded" />
                      <div className="h-4 w-16 bg-muted rounded" />
                      <div className="h-4 w-16 bg-muted rounded" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="col-span-2 space-y-3">
                      <div className="h-6 w-3/4 bg-foreground/10 rounded" />
                      <div className="h-4 w-full bg-muted rounded" />
                      <div className="h-4 w-5/6 bg-muted rounded" />
                      <div className="h-10 w-32 bg-primary rounded mt-4" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -right-4 top-1/4 bg-card rounded-lg shadow-lg border p-3 animate-float">
              <div className="text-2xl">⚡</div>
              <div className="text-xs font-medium mt-1">99/100</div>
              <div className="text-xs text-muted-foreground">Speed</div>
            </div>
            
            <div className="absolute -left-4 bottom-1/4 bg-card rounded-lg shadow-lg border p-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl">🎨</div>
              <div className="text-xs font-medium mt-1">Customizable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
