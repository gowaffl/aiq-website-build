import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  headline = "Ready to Transform Your Authorization Rates?",
  subtext = "Join leading OPOs who are using data-driven insights and AI-powered tools to improve outcomes and support their coordinators.",
  primaryLabel = "Schedule a Demo",
  primaryHref = "/demo",
  secondaryLabel = "Get in Touch",
  secondaryHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container-site">
        <FadeIn>
          <div
            className="rounded-2xl p-12 md:p-16 text-center"
            style={{
              background:
                "linear-gradient(135deg, hsl(204, 60%, 18%) 0%, hsl(204, 60%, 27%) 60%, hsl(204, 57%, 37%) 100%)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">{headline}</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">{subtext}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={primaryHref}
                className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent-light transition-all hover:-translate-y-0.5 shadow-lg"
              >
                {primaryLabel}
              </Link>
              <Link
                to={secondaryHref}
                className="px-8 py-4 bg-white/10 text-white border border-white/20 font-semibold rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5"
              >
                {secondaryLabel}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
