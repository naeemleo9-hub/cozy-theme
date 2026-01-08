import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Freelance Designer",
    avatar: "SC",
    content: "This theme transformed my portfolio. The customization options are incredible, and my site loads in under 1 second now.",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Tech Blogger",
    avatar: "MJ",
    content: "Finally, a WordPress theme that doesn't slow down my site. My traffic increased 40% after switching. The SEO features are top-notch.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Agency Owner",
    avatar: "ER",
    content: "We use this theme for all our client projects now. The support team is responsive, and the code quality is exceptional.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Loved by creators
          </h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of happy users building amazing websites
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
