import { motion } from "framer-motion";
import { Lock, Shield, UserCheck } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABanner from "@/components/CTABanner";

const steps = [
  {
    num: "01",
    title: "Data Integration",
    desc: "authorizationIQ™ securely connects with your existing OPO systems and data infrastructure through HIPAA-compliant APIs. No rip-and-replace — we work with what you have.",
  },
  {
    num: "02",
    title: "Predictive Analysis",
    desc: "aIQ Predict processes 50+ case variables — demographic, clinical, historical, and contextual — to generate a real-time authorization likelihood score and approach strategy.",
  },
  {
    num: "03",
    title: "Coordinator Support",
    desc: "aIQ Navigator provides live guidance during family conversations. As the coordinator engages the family, the AI surfaces evidence-based prompts, cultural insights, and talking points.",
  },
  {
    num: "04",
    title: "Performance Insights",
    desc: "Every conversation and outcome is captured and aggregated into aIQ Insights. Leadership gets a real-time view of team performance, authorization trends, and improvement opportunities.",
  },
  {
    num: "05",
    title: "Continuous Learning",
    desc: "The platform learns from every case — improving its predictive models and conversation guidance over time. Your OPO gets smarter every single day.",
  },
];

const scenarios = [
  {
    time: "7:15 AM",
    icon: "📋",
    title: "New Referral Received",
    desc: "Sarah receives a new referral. aIQ Predict immediately analyzes 50+ variables and displays a 72% authorization likelihood score with a recommended approach strategy.",
  },
  {
    time: "8:30 AM",
    icon: "🎯",
    title: "Approach Plan Review",
    desc: "Sarah reviews her personalized approach plan, which includes cultural considerations for the family's background, optimal timing guidance, and key themes to emphasize.",
  },
  {
    time: "10:00 AM",
    icon: "💬",
    title: "Family Conversation",
    desc: "During the family meeting, aIQ Navigator provides real-time support — surfacing empathetic talking points, helping address hesitation, and coaching Sarah through emotional moments.",
  },
  {
    time: "11:45 AM",
    icon: "✅",
    title: "Authorization Received",
    desc: "The family authorizes. aIQ Insights immediately updates the dashboard, capturing the outcome and adding the case to the performance trend data visible to OPO leadership.",
  },
  {
    time: "End of Day",
    icon: "📊",
    title: "Post-Conversation Analysis",
    desc: "Sarah reviews her post-conversation debrief from aIQ Navigator. She gets feedback on her approach, highlights what worked well, and areas to strengthen for future cases.",
  },
];

const securityCards = [
  {
    icon: <Shield size={24} className="text-primary" />,
    title: "HIPAA Compliant",
    desc: "Full HIPAA compliance with BAA available for all OPO partners.",
  },
  {
    icon: <Lock size={24} className="text-primary" />,
    title: "End-to-End Encryption",
    desc: "All data is encrypted in transit and at rest using AES-256 standards.",
  },
  {
    icon: <UserCheck size={24} className="text-primary" />,
    title: "Role-Based Access",
    desc: "Granular permissions ensure each team member only sees what they need.",
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
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <SectionTag variant="primary">
              <span className="text-white/80">Process</span>
            </SectionTag>
            <h1 className="text-4xl md:text-6xl font-bold text-white mt-5 mb-6 text-balance">
              How authorizationIQ™ Works
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              From the first referral to continuous improvement — see how the platform supports your team at every step.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <SectionTag>The Process</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              Five Steps to Better Outcomes
            </h2>
          </FadeIn>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-border" />

            <div className="flex flex-col gap-10">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="relative flex gap-8 md:gap-12 pl-20 md:pl-28">
                    {/* Number circle */}
                    <div className="absolute left-0 w-16 h-16 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-card z-10 relative">
                        {step.num}
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-card border border-border flex-1 hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
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

      {/* Use Case Scenario */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="text-center mb-12">
            <SectionTag>Real-World Example</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              A Day in the Life with authorizationIQ™
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow Sarah, a donation coordinator, through a full day supported by authorizationIQ™.
            </p>
          </FadeIn>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-card border border-border overflow-hidden">
            {scenarios.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`p-6 md:p-8 ${i < scenarios.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-warm-bg rounded-xl flex items-center justify-center text-xl">{s.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">{s.time}</span>
                        <h4 className="font-semibold text-foreground text-sm">{s.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
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
            <SectionTag>Security & Privacy</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              Enterprise-Grade Data Security
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
              We take data security seriously — because your families, your donors, and your coordinators deserve nothing less. authorizationIQ™ is built to meet the highest standards in healthcare data privacy.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {securityCards.map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-card border border-border text-center hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">{c.icon}</div>
                  <h3 className="font-bold text-foreground mb-2 text-sm">{c.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
