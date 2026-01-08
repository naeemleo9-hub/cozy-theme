import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to build something amazing?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Download the starter theme for free or get the pro version for unlimited possibilities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="h-14 px-8 text-base font-semibold group bg-background text-foreground hover:bg-background/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free
            </Button>
            <Button 
              size="lg"
              className="h-14 px-8 text-base font-semibold group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Get Pro Version
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-primary-foreground/60">
            No credit card required • Free forever • Upgrade anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
