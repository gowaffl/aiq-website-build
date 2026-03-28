import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Target, MessageCircle, BarChart3, Users } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import AppButton from "@/components/ui/AppButton";
import VideoPlayer from "@/components/ui/VideoPlayer";
import { PRODUCTS } from "@/lib/constants";

const iconMap: Record<string, JSX.Element> = {
  Target: <Target size={26} />,
  MessageCircle: <MessageCircle size={26} />,
  BarChart3: <BarChart3 size={26} />,
};

const colorVariants: Record<string, { bg: string; text: string; badge: string; audienceBg: string }> = {
  primary: {
    bg: "bg-primary/10",
    text: "text-primary",
    badge: "bg-primary/8 text-primary border-primary/20",
    audienceBg: "bg-primary/5 border-primary/15 text-primary",
  },
  accent: {
    bg: "bg-accent/10",
    text: "text-accent",
    badge: "bg-accent/8 text-accent border-accent/20",
    audienceBg: "bg-accent/5 border-accent/15 text-accent",
  },
  success: {
    bg: "bg-success/10",
    text: "text-success",
    badge: "bg-success/8 text-success border-success/20",
    audienceBg: "bg-success/5 border-success/15 text-success",
  },
};

export default function ProductPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, #E8763A, transparent 70%)" }} />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full"
            style={{ background: "radial-gradient(circle, #2A9FD6, transparent 70%)" }} />
        </div>
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Platform Overview
            </span>
            <h1 className="text-4xl md:text-[3.25rem] font-bold text-white mb-6 leading-tight text-balance">
              The authorizationIQ™ Platform
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Three integrated tools working together to support every stakeholder in the organ donation ecosystem — from frontline coordinators to OPO leadership.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 70H1440V25C1200 60 720 0 0 50V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Product Sections */}
      {PRODUCTS.map((product, i) => {
        const isReversed = i % 2 === 1;
        const cv = colorVariants[product.colorKey];
        const bg = isReversed ? "bg-warm-bg" : "bg-background";

        return (
          <section key={product.id} id={product.id} className={`section-padding ${bg}`}>
            <div className="container-site">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? "" : ""}`}>

                {/* Text column */}
                <FadeIn
                  direction={isReversed ? "left" : "right"}
                  className={isReversed ? "lg:order-2" : ""}
                >
                  {/* Pill badge */}
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full border ${cv.badge} mb-5`}>
                    <span className={cv.text}>{iconMap[product.icon]}</span>
                    {product.subtitle}
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">{product.name}</h2>

                  <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">{product.longDesc}</p>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-3.5 mb-8">
                    {product.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2
                          size={17}
                          className={`${cv.text} flex-shrink-0 mt-0.5`}
                        />
                        <span className="text-foreground text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Audience badge */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold ${cv.audienceBg}`}>
                    <Users size={13} />
                    Designed for: {product.audience}
                  </div>
                </FadeIn>

                {/* Video column */}
                <FadeIn
                  direction={isReversed ? "right" : "left"}
                  delay={0.15}
                  className={isReversed ? "lg:order-1" : ""}
                >
                  <div
                    className="rounded-2xl overflow-hidden shadow-card-hover border-2"
                    style={{ borderColor: `${product.color}30` }}
                  >
                    <VideoPlayer
                      src={product.video}
                      label={product.name}
                      labelColor={product.color}
                      accentColor={product.color}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* Suite Video */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="text-center mb-10">
            <SectionTag>Full Suite</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              See the Platform Together
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Watch how aIQ Predict, Navigator, and Insights work as one integrated system — seamlessly supporting your team at every step.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border max-w-4xl mx-auto">
              <VideoPlayer
                src="/videos/authorizationIQ_Suite.mp4"
                label="authorizationIQ™ Platform"
                accentColor="#2A9FD6"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-background">
        <div className="container-site text-center max-w-2xl">
          <FadeIn>
            <div
              className="rounded-2xl p-12 md:p-16"
              style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 60%, #2A6F97 100%)" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                See the Full Platform in Action
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Schedule a personalized demo and discover how authorizationIQ™ can transform your OPO's outcomes.
              </p>
              <Link to="/demo">
                <AppButton variant="accent" size="lg">
                  Request Your Demo <ArrowRight size={18} />
                </AppButton>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
