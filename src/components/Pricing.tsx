import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Personal",
    price: 49,
    description: "Perfect for personal blogs and portfolios",
    features: [
      "Single site license",
      "All theme features",
      "1 year of updates",
      "Email support",
      "Documentation access"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: 99,
    description: "Best for freelancers and agencies",
    features: [
      "Unlimited site licenses",
      "All theme features",
      "Lifetime updates",
      "Priority support",
      "Premium plugins bundle",
      "Remove footer credit",
      "Early access to features"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large teams and organizations",
    features: [
      "Everything in Professional",
      "White-label license",
      "Custom development hours",
      "Dedicated support manager",
      "SLA guarantee",
      "Training sessions"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-muted/30 scroll-mt-16">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.popular
                  ? "bg-primary text-primary-foreground scale-105 shadow-2xl"
                  : "bg-card border hover:border-primary/50 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-5xl font-bold ${plan.popular ? "" : "text-foreground"}`}>
                  ${plan.price}
                </span>
                <span className={`${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  /one-time
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? "text-primary-foreground" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-12 font-semibold ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : ""
                }`}
                variant={plan.popular ? "secondary" : "default"}
              >
                Get {plan.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            💳 Secure payment via Stripe. 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
