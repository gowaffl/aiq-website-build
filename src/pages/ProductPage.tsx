import { Link } from "react-router-dom";
import { Target, MessageCircle, BarChart2, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABanner from "@/components/CTABanner";

const products = [
  {
    id: "predict",
    icon: <Target size={28} />,
    badge: "Predictive Analytics Engine",
    badgeColor: "primary",
    title: "aIQ Predict",
    color: "primary",
    description:
      "aIQ Predict uses advanced machine learning to analyze hundreds of data points per case — surfacing the insights coordinators need to approach each family with confidence and strategy. Understand probability, optimize timing, and walk in prepared.",
    features: [
      "Analyze 50+ variables per case to predict authorization probability",
      "Identify optimal approach timing and strategy recommendations",
      "Surface demographic and cultural factors that influence outcomes",
      "Provide risk scores that help coordinators prepare more effectively",
      "Generate data-driven approach plans tailored to each case",
    ],
    audience: "OPO Executives & Clinical Directors",
    video: "/videos/aIQ-Predict.mp4",
    reverse: false,
  },
  {
    id: "navigator",
    icon: <MessageCircle size={28} />,
    badge: "AI Conversation Support",
    badgeColor: "accent",
    title: "aIQ Navigator",
    color: "accent",
    description:
      "aIQ Navigator is a real-time AI assistant that stands beside coordinators during the most critical conversations of their day. Guided by evidence-based communication science, it surfaces the right words at the right time — so coordinators feel supported, not alone.",
    features: [
      "Real-time prompts and talking points during family conversations",
      "Cultural sensitivity cues based on family background and context",
      "Emotional intelligence coaching for high-stress moments",
      "Objection-handling guidance grounded in research",
      "Post-conversation debrief and learning analysis",
    ],
    audience: "Donation Coordinators",
    video: "/videos/aIQ-Navigator.mp4",
    reverse: true,
  },
  {
    id: "insights",
    icon: <BarChart2 size={28} />,
    badge: "Performance Dashboards",
    badgeColor: "success",
    title: "aIQ Insights",
    color: "success",
    description:
      "aIQ Insights transforms your operational data into a strategic asset. Leadership teams gain real-time visibility into authorization trends, team performance, and outcome patterns — so every decision is backed by data, not guesswork.",
    features: [
      "Real-time authorization rate tracking and benchmarking",
      "Team-level performance analytics by coordinator and region",
      "Trend analysis to identify what's working across your OPO",
      "Custom reports for hospital partners and board presentations",
      "Predictive alerts when performance patterns shift",
    ],
    audience: "OPO Leadership & Hospital Partners",
    video: "/videos/aIQ-Insights.mp4",
    reverse: false,
  },
];

const colorMap: Record<string, { badge: string; check: string; audience: string }> = {
  primary: {
    badge: "bg-primary/10 text-primary border-primary/20",
    check: "text-primary",
    audience: "bg-primary/5 border-primary/20 text-primary",
  },
  accent: {
    badge: "bg-accent/10 text-accent border-accent/20",
    check: "text-accent",
    audience: "bg-accent/5 border-accent/20 text-accent",
  },
  success: {
    badge: "bg-success/10 text-success border-success/20",
    check: "text-success",
    audience: "bg-success/5 border-success/20 text-success",
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, #E8763A, transparent 70%)" }} />
        </div>
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Platform Overview
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              The authorizationIQ™ Platform
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Three integrated tools. One mission: equip every OPO with the intelligence and support needed to save more lives.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Product Sections */}
      {products.map((product, idx) => {
        const colors = colorMap[product.color];
        const bg = idx % 2 === 1 ? "bg-warm-bg" : "bg-background";
        return (
          <section key={product.id} id={product.id} className={`section-padding ${bg}`}>
            <div className="container-site">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${product.reverse ? "lg:flex-row-reverse" : ""}`}>
                {/* Text */}
                <FadeIn direction={product.reverse ? "left" : "right"} className={product.reverse ? "lg:order-2" : ""}>
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full border ${colors.badge} mb-5`}>
                    {product.icon}
                    {product.badge}
                  </span>
                  <h2 className="text-4xl font-bold text-foreground mb-5">{product.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>
                  <ul className="flex flex-col gap-3 mb-8">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                        <CheckCircle2 size={17} className={`${colors.check} flex-shrink-0 mt-0.5`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-semibold ${colors.audience}`}>
                    Designed for: {product.audience}
                  </div>
                </FadeIn>

                {/* Video */}
                <FadeIn direction={product.reverse ? "right" : "left"} delay={0.15} className={product.reverse ? "lg:order-1" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border bg-primary-dark">
                    <video
                      src={product.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* Suite Overview Video */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="text-center mb-10">
            <SectionTag>Full Suite</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">See the Platform Together</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Watch how aIQ Predict, Navigator, and Insights work as one integrated system.</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border max-w-4xl mx-auto">
              <video
                src="/videos/authorizationIQ_Suite.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner headline="See the Full Platform in Action" subtext="Schedule a personalized demo and see how authorizationIQ™ can transform outcomes for your OPO." />
    </div>
  );
}
