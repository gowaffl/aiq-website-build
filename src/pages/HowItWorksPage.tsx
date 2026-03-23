import { motion } from "framer-motion";
import { Lock, Shield, UserCheck, Globe, Brain, MessageCircle, BarChart3, Zap } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    step: 1,
    title: "Data Integration",
    icon: <Globe size={22} />,
    desc: "authorizationIQ™ securely connects with your existing OPO systems to analyze historical authorization data, case outcomes, and demographic patterns. No disruption to current workflows — we work with what you already have.",
  },
  {
    step: 2,
    title: "Predictive Analysis",
    icon: <Brain size={22} />,
    desc: "aIQ Predict processes 50+ variables per referral case — including demographics, timing, hospital context, and historical patterns — to generate an authorization likelihood score and recommended approach strategy.",
  },
  {
    step: 3,
    title: "Coordinator Support",
    icon: <MessageCircle size={22} />,
    desc: "When a coordinator engages with a family, aIQ Navigator provides real-time guidance: culturally sensitive talking points, emotional cues, de-escalation strategies, and evidence-based approach recommendations tailored to that family.",
  },
  {
    step: 4,
    title: "Performance Insights",
    icon: <BarChart3 size={22} />,
    desc: "aIQ Insights aggregates outcomes across all cases, providing leadership with real-time dashboards, trend analysis, and actionable metrics to continuously improve team performance and identify optimization opportunities.",
  },
  {
    step: 5,
    title: "Continuous Learning",
    icon: <Zap size={22} />,
    desc: "The platform learns from every interaction, refining predictions and recommendations over time. The more your team uses authorizationIQ™, the smarter and more effective it becomes for your specific OPO context.",
  },
];

const useCaseTimeline = [
  {
    time: "7:15 AM",
    emoji: "📋",
    title: "Referral Received",
    text: "Sarah, a donation coordinator, receives a referral notification. Before she even arrives at the hospital, aIQ Predict has already analyzed the case: family demographics, hospital context, and cultural considerations. Her phone shows an authorization likelihood score of 72% with a recommended approach strategy.",
  },
  {
    time: "8:30 AM",
    emoji: "🎯",
    title: "Approach Plan Review",
    text: "At the hospital, Sarah reviews the detailed approach plan. aIQ Navigator has prepared culturally appropriate talking points and flagged that this family's background typically responds best to conversations led by a medical professional alongside the coordinator.",
  },
  {
    time: "10:00 AM",
    emoji: "💬",
    title: "Family Conversation",
    text: "During the family conversation, aIQ Navigator provides real-time support. When the family expresses concerns about the donation process, the system surfaces specific, evidence-based responses that address their worries with empathy and clarity — in the moment, discreetly.",
  },
  {
    time: "11:45 AM",
    emoji: "✅",
    title: "Authorization Received",
    text: "The family provides authorization. Sarah logs the outcome, and aIQ Insights immediately updates the team dashboard. Her OPO director can see the approach strategy that worked, contributing to a broader pattern of improved outcomes visible to leadership in real time.",
  },
  {
    time: "End of Day",
    emoji: "📊",
    title: "Post-Conversation Learning",
    text: "Sarah reviews her post-conversation debrief from aIQ Navigator, identifying what worked well and areas to strengthen. She feels more confident, better prepared for tomorrow's cases, and supported in her role in a way she hasn't experienced before.",
  },
];

const securityCards = [
  {
    icon: <Shield size={22} className="text-primary" />,
    title: "HIPAA Compliant",
    desc: "Full HIPAA compliance with a Business Associate Agreement (BAA) available for all OPO partners. Built to meet the strictest healthcare data standards.",
  },
  {
    icon: <Lock size={22} className="text-primary" />,
    title: "End-to-End Encryption",
    desc: "All data is encrypted in transit and at rest using AES-256 standards. Your data is protected at every point in the workflow.",
  },
  {
    icon: <UserCheck size={22} className="text-primary" />,
    title: "Role-Based Access",
    desc: "Granular, configurable permissions ensure each team member — coordinator, director, partner — only sees what they're authorized to access.",
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-8 pointer-events-none"
          style={{ background: "radial-gradient(circle, #2A9FD6, transparent 70%)" }} />
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
              Platform Process
            </span>
            <h1 className="text-4xl md:text-[3.25rem] font-bold text-white mb-6 text-balance leading-tight">
              How authorizationIQ™ Works
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              A clear, step-by-step look at how data flows through the platform and supports coordinators in their daily work.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 70H1440V25C1200 60 720 0 0 50V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <SectionTag>The Process</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              The authorizationIQ™ Process
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Five integrated steps that work together — from data integration to continuous learning.
            </p>
          </FadeIn>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connector */}
            <div className="absolute left-[27px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent pointer-events-none" />

            <div className="flex flex-col gap-8">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-6 items-start">
                    {/* Step circle */}
                    <div className="relative flex-shrink-0">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-card z-10 relative"
                      >
                        {step.icon}
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary/40 uppercase tracking-widest">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Timeline */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="text-center mb-12">
            <SectionTag>Real-World Example</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              A Day in the Life with authorizationIQ™
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Follow Sarah, a donation coordinator, through one case — from referral notification to post-conversation learning.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card border border-border overflow-hidden">
            {useCaseTimeline.map((entry, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`p-6 md:p-8 ${i < useCaseTimeline.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-warm-bg rounded-xl flex items-center justify-center text-xl">
                      {entry.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {entry.time}
                        </span>
                        <span className="font-semibold text-foreground text-sm">{entry.title}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{entry.text}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-4xl">
          <FadeIn className="text-center mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Lock size={28} className="text-primary" />
            </div>
            <SectionTag>Security &amp; Privacy</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              Data Security &amp; Privacy
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We understand that patient data is sacred. authorizationIQ™ is built from the ground up with healthcare-grade security, HIPAA compliance, and privacy-first architecture. Your data never leaves your control.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {securityCards.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-7 shadow-card border border-border text-center hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {c.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Ready to See It in Action?"
        subtext="Schedule a demo to see how authorizationIQ™ can work for your organization."
        primaryLabel="Request Demo"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </div>
  );
}
