import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Database,
  Target,
  MessageCircle,
  BarChart3,
  Calendar,
  Play,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import StatCounter from "@/components/StatCounter";
import CTABanner from "@/components/CTABanner";
import ROICalculator from "@/components/ROICalculator";
import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS, PROCESS_STEPS } from "@/lib/constants";

const problemCards = [
  {
    icon: <Users size={26} className="text-accent" />,
    title: "Unsupported Coordinators",
    description:
      "Donation coordinators navigate emotionally complex family conversations without real-time guidance or support tools, leading to burnout and inconsistent outcomes.",
  },
  {
    icon: <TrendingUp size={26} className="text-accent" />,
    title: "Low Authorization Rates",
    description:
      "Many OPOs struggle with authorization rates below national benchmarks, missing opportunities to fulfill the wishes of registered donors and their families.",
  },
  {
    icon: <Database size={26} className="text-accent" />,
    title: "Lack of Data Insights",
    description:
      "Leadership teams make decisions without access to predictive analytics or real-time performance dashboards that could reveal patterns and optimization strategies.",
  },
];

const outcomes = [
  { value: "32%", label: "Fewer missed opportunities" },
  { value: "4.2x", label: "Return on investment" },
  { value: "89%", label: "Coordinator confidence" },
  { value: "15min", label: "Faster response times" },
];

const stepIcons: Record<string, JSX.Element> = {
  Database: <Database size={20} />,
  Target: <Target size={20} />,
  MessageCircle: <MessageCircle size={20} />,
  BarChart3: <BarChart3 size={20} />,
  TrendingUp: <TrendingUp size={20} />,
};

export default function HomePage() {
  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8763A 0%, transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #2A6F97 0%, transparent 65%)" }}
        />

        <div className="container-site py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-7"
              >
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                  Now accepting early access partners
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold text-white leading-[1.12] mb-7 text-balance"
              >
                Transform Organ Donation Outcomes with{" "}
                <span style={{ color: "#7EC8E3" }}>AI-Powered Intelligence</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl"
              >
                authorizationIQ™ equips OPOs with predictive analytics, real-time conversation support, and performance dashboards to improve authorization rates and support coordinators in their most critical moments.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/demo"
                  className="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(232,118,58,0.4)] text-center"
                >
                  Request a Demo
                </Link>
                <Link
                  to="/how-it-works"
                  className="px-8 py-4 bg-white/10 text-white border border-white/25 font-semibold rounded-xl hover:bg-white/20 transition-all hover:-translate-y-0.5 text-center"
                >
                  See How It Works
                </Link>
              </motion.div>
            </div>

            {/* Right: Suite video */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.25 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)] border border-white/20 relative">
                <video
                  src="/videos/authorizationIQ_Suite.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto block"
                />
                {/* Subtle pill overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white text-xs font-medium">authorizationIQ™ Platform</span>
                </div>
              </div>
              {/* Glow behind the video */}
              <div className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #2A9FD6, transparent 70%)" }} />
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 70H1440V25C1200 60 720 0 0 50V70Z" fill="hsl(33, 35%, 95%)" />
          </svg>
        </div>
      </section>

      {/* ─── PROBLEM STATEMENT ─── */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <SectionTag>The Challenge</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              OPOs Face Critical Challenges Every Day
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Without the right tools, even the most dedicated coordinators are left to navigate impossible situations alone.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-7">
            {problemCards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[14px]">{card.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRODUCT OVERVIEW ─── */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <SectionTag>Our Platform</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              Three Powerful Tools, One Mission
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              An integrated suite built specifically for OPOs — from the first referral to the final outcome.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-7">
            {PRODUCTS.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.12}>
                <ProductCard
                  icon={p.icon}
                  title={p.name}
                  subtitle={p.subtitle}
                  description={p.shortDesc}
                  color={p.color}
                  link={`/product#${p.id}`}
                />
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3} className="text-center mt-10">
            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
            >
              View the full platform <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── STATS BANNER ─── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 50%, #2A6F97 100%)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCounter prefix="+" value={12} suffix="%" label="Avg. Rate Improvement" />
            <StatCounter value={50} suffix="K+" label="Data Points Analyzed" />
            <StatCounter value={98} suffix="%" label="Coordinator Satisfaction" />
            <StatCounter value={24} suffix="/7" label="AI Support Available" />
          </div>
          <FadeIn className="text-center mt-10">
            <p className="text-white/35 text-xs">
              * Statistics are projected outcomes based on platform modeling. Actual results may vary.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── HOW IT WORKS PREVIEW ─── */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <SectionTag>Process</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              How authorizationIQ™ Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              A clear, end-to-end flow — from data integration to continuous learning — designed to fit seamlessly into how your OPO already operates.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-4 mb-12">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="relative bg-white rounded-2xl p-6 shadow-card border border-border text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 h-full">
                  {/* Connector line (desktop) */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-2 w-4 h-0.5 bg-border z-10" />
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                    {stepIcons[step.icon]}
                  </div>
                  <div className="text-xs font-bold text-primary/40 uppercase tracking-widest mb-2">{step.num}</div>
                  <h4 className="text-[13px] font-bold text-foreground mb-2">{step.title}</h4>
                  <p className="text-[12px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              See the full walkthrough <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── CREDIBILITY ─── */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <SectionTag>Built by Experts</SectionTag>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-5 text-balance">
                Created by Organ Donation Professionals
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                authorizationIQ™ was built from the ground up by people who have lived the work — coordinating families through some of the hardest moments of their lives, and wanting desperately to have better tools to help them succeed.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                {[
                  "Deep field experience in organ donation and OPO operations",
                  "Designed with input from coordinators, executives, and hospital partners",
                  "Focused on compassionate outcomes, not just metrics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 size={17} className="text-success flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-light transition-colors"
              >
                Learn our story <ArrowRight size={14} />
              </Link>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="bg-warm-bg rounded-2xl p-8 md:p-10 border border-border relative">
                <div className="text-6xl text-primary/15 font-serif leading-none absolute top-6 left-8 select-none">"</div>
                <div className="pt-8 mb-7">
                  <p className="text-foreground text-[18px] leading-relaxed font-medium italic">
                    Every family deserves a coordinator who feels prepared, supported, and confident. That's what authorizationIQ was built to deliver.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-5 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    BW
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Brent Whetstone</div>
                    <div className="text-xs text-muted-foreground">Founder, Donation Advocates</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── ROI SECTION ─── */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeIn direction="right">
              <SectionTag>Outcomes</SectionTag>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-5 text-balance">
                See the Impact for Your Organization
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                authorizationIQ™ isn't just a tool — it's a measurable force multiplier for OPOs who want to fulfill more donor wishes and support their teams more effectively.
              </p>
              <div className="grid grid-cols-2 gap-5">
                {outcomes.map((o, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 shadow-card border border-border text-center hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                    <div className="text-3xl font-bold text-primary mb-1.5">{o.value}</div>
                    <div className="text-xs text-muted-foreground font-medium">{o.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <ROICalculator />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── DEMO CTA STRIP ─── */}
      <section className="py-14 bg-background">
        <div className="container-site">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-warm-bg rounded-2xl px-8 py-7 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar size={22} className="text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-[15px]">Ready to see it in action?</div>
                  <div className="text-sm text-muted-foreground">Schedule a 30-minute personalized demo — no pressure, just a real conversation.</div>
                </div>
              </div>
              <Link
                to="/demo"
                className="flex-shrink-0 px-7 py-3.5 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(232,118,58,0.25)] text-sm whitespace-nowrap"
              >
                Schedule a Demo →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <CTABanner />
    </div>
  );
}
