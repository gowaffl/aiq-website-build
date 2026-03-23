import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  MessageCircle,
  BarChart2,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Database,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import StatCounter from "@/components/StatCounter";
import CTABanner from "@/components/CTABanner";
import ROICalculator from "@/components/ROICalculator";

const problemCards = [
  {
    icon: <Users size={28} className="text-accent" />,
    title: "Unsupported Coordinators",
    description:
      "Donation coordinators navigate emotionally complex family conversations without real-time guidance or support tools, leading to burnout and inconsistent outcomes.",
  },
  {
    icon: <TrendingUp size={28} className="text-accent" />,
    title: "Low Authorization Rates",
    description:
      "Many OPOs struggle with authorization rates below national benchmarks, missing opportunities to fulfill the wishes of registered donors and their families.",
  },
  {
    icon: <Database size={28} className="text-accent" />,
    title: "Lack of Data Insights",
    description:
      "Leadership teams make decisions without access to predictive analytics or real-time performance dashboards that could reveal patterns and optimization strategies.",
  },
];

const products = [
  {
    icon: <Target size={32} />,
    color: "primary",
    title: "aIQ Predict",
    desc: "Predictive analytics that analyze historical data, demographic factors, and case variables to forecast authorization likelihood and recommend optimal approach strategies.",
    href: "/product#predict",
  },
  {
    icon: <MessageCircle size={32} />,
    color: "accent",
    title: "aIQ Navigator",
    desc: "Real-time AI conversation support that guides donation coordinators through family discussions with evidence-based prompts, cultural sensitivity, and emotional intelligence.",
    href: "/product#navigator",
  },
  {
    icon: <BarChart2 size={32} />,
    color: "success",
    title: "aIQ Insights",
    desc: "Comprehensive performance dashboards that give leadership real-time visibility into authorization metrics, team performance, and outcome trends.",
    href: "/product#insights",
  },
];

const outcomes = [
  { value: "32%", label: "Fewer missed opportunities" },
  { value: "4.2x", label: "Return on investment" },
  { value: "89%", label: "Coordinator confidence" },
  { value: "15min", label: "Faster response times" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #E8763A 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #2A6F97 0%, transparent 70%)" }} />

        <div className="container-site py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Now accepting early access partners
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6 text-balance"
              >
                Transform Organ Donation Outcomes with AI-Powered Intelligence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl"
              >
                authorizationIQ™ equips OPOs with predictive analytics, real-time conversation support, and performance dashboards to improve authorization rates and support coordinators in their most critical moments.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/demo"
                  className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent-light transition-all hover:-translate-y-0.5 shadow-lg text-center"
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

            {/* Right: stat card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { prefix: "+", value: "12%", label: "Authorization Rate" },
                    { value: "24/7", label: "Coordinator Support" },
                    { prefix: "", value: "50K+", label: "Data Points Analyzed" },
                    { value: "100%", label: "HIPAA Compliant" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                      <div className="text-3xl font-bold text-white mb-1">{stat.prefix}{stat.value}</div>
                      <div className="text-xs text-white/55 font-medium uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/15">
                  <div className="flex items-center gap-2 text-sm text-white/60">
                    <ShieldCheck size={14} className="text-green-400" />
                    <span>HIPAA compliant &amp; enterprise-ready platform</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="hsl(33, 35%, 95%)" />
          </svg>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <SectionTag>The Challenge</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              OPOs Face Critical Challenges Every Day
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {problemCards.map((card, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div
                  className={`group relative bg-white rounded-2xl p-8 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 h-full overflow-hidden ${
                    p.color === "primary"
                      ? "hover:border-primary/30"
                      : p.color === "accent"
                      ? "hover:border-accent/30"
                      : "hover:border-success/30"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 ${
                      p.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : p.color === "accent"
                        ? "bg-accent/10 text-accent"
                        : "bg-success/10 text-success"
                    }`}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">{p.desc}</p>
                  <Link
                    to={p.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 ${
                      p.color === "primary"
                        ? "text-primary"
                        : p.color === "accent"
                        ? "text-accent"
                        : "text-success"
                    }`}
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            <StatCounter prefix="+" value={12} suffix="%" label="Avg. Rate Improvement" />
            <StatCounter value={50} suffix="K+" label="Data Points Analyzed" />
            <StatCounter value={98} suffix="%" label="Coordinator Satisfaction" />
            <StatCounter value={24} suffix="/7" label="AI Support Available" />
          </div>
          <FadeIn className="text-center mt-10">
            <p className="text-white/40 text-xs">
              * Statistics are projected outcomes based on platform modeling. Actual results may vary.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Credibility */}
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
              <ul className="flex flex-col gap-4">
                {[
                  "Deep field experience in organ donation and OPO operations",
                  "Designed with input from coordinators, executives, and hospital partners",
                  "Focused on compassionate outcomes, not just metrics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 size={18} className="text-success flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="bg-warm-bg rounded-2xl p-8 border border-border">
                <div className="mb-6">
                  <div className="text-4xl text-primary/20 font-serif leading-none mb-4">"</div>
                  <p className="text-foreground text-lg leading-relaxed font-medium italic">
                    Every family deserves a coordinator who feels prepared, supported, and confident. That's what authorizationIQ was built to deliver.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-4 border-t border-border">
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

      {/* ROI Section */}
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
                  <div key={i} className="bg-white rounded-xl p-5 shadow-card border border-border text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{o.value}</div>
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

      {/* Final CTA */}
      <CTABanner />
    </div>
  );
}
