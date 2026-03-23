import { Link } from "react-router-dom";
import { ArrowRight, Heart, Target, Eye, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import AppButton from "@/components/ui/AppButton";
import { CONTACT_INFO } from "@/lib/constants";

const values = [
  { icon: <Heart size={20} className="text-accent" />, label: "Compassion First" },
  { icon: <Target size={20} className="text-primary" />, label: "Data-Driven" },
  { icon: <Eye size={20} className="text-success" />, label: "Field-Tested" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 opacity-8 pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8763A, transparent 70%)" }} />
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-[3.25rem] font-bold text-white mb-6 text-balance leading-tight">
              About authorizationIQ™
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Built by organ donation professionals who understand the weight of every conversation and the value of every authorization.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {values.map((v, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium">
                  {v.icon} {v.label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 70H1440V25C1200 60 720 0 0 50V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission / Story / Vision */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Heart size={22} className="text-accent" />,
                  title: "Our Mission",
                  color: "bg-accent/10",
                },
                {
                  icon: <Target size={22} className="text-primary" />,
                  title: "Our Story",
                  color: "bg-primary/10",
                },
                {
                  icon: <Eye size={22} className="text-success" />,
                  title: "Our Vision",
                  color: "bg-success/10",
                },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="grid md:grid-cols-1 gap-12">
              <FadeIn>
                <div className="grid md:grid-cols-3 gap-10">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Heart size={18} className="text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      authorizationIQ™ exists because we believe every organ donor's gift should be honored, every family should feel heard, and every coordinator should feel supported in their most critical moments.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                      We're on a mission to close the gap between registered donors and successful authorizations — not through pressure or quotas, but through better preparation, better support, and better insights.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Target size={18} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-foreground">Our Story</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      authorizationIQ™ was born from years of frontline experience in organ donation. Our founder, Brent Whetstone, worked directly with OPOs, coordinators, and hospital partners — witnessing firsthand both the incredible dedication of donation professionals and the systemic gaps that hold them back.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                      He saw coordinators walking into their most important conversations without data-driven support. He saw leadership making decisions without real-time visibility. authorizationIQ™ is the result: a platform built with deep field expertise, designed with compassion, powered by AI.
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-success/10 flex items-center justify-center">
                        <Eye size={18} className="text-success" />
                      </div>
                      <h3 className="font-bold text-foreground">Our Vision</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We envision a future where every OPO in the country has access to the data, tools, and AI support they need to maximize donation outcomes — where no coordinator feels alone in a family conversation, and where leadership has the visibility to continuously improve.
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                      We're starting with authorization rates, but our vision extends to transforming the entire organ donation ecosystem through compassionate, data-driven technology.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <SectionTag>Why authorizationIQ™</SectionTag>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-5 text-balance">
                Not Another Generic Platform
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-7">
                authorizationIQ™ isn't built by technologists who learned about organ donation from a brief. It's built by professionals who've spent years in the field — navigating the same emotionally complex conversations, the same data gaps, and the same leadership challenges you face today.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We understand that every authorization represents a family in their most difficult moment, and a coordinator who deserves every advantage we can give them. That understanding shapes every feature we build.
              </p>
              <ul className="flex flex-col gap-3.5">
                {[
                  "Deep field experience in organ donation and OPO operations",
                  "Designed with input from coordinators, executives, and hospital partners",
                  "Focused on compassionate outcomes, not just metrics",
                  "Built specifically for the organ donation ecosystem — not adapted from generic healthcare tools",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 size={17} className="text-success flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-border relative overflow-hidden">
                <div className="text-6xl text-primary/12 font-serif absolute top-5 left-7 select-none leading-none">"</div>
                <div className="pt-8 mb-7">
                  <p className="text-foreground text-[18px] leading-relaxed font-medium italic">
                    Every family deserves a coordinator who feels prepared, supported, and confident. That's what authorizationIQ™ was built to deliver.
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-5 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    BW
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{CONTACT_INFO.name}</div>
                    <div className="text-xs text-muted-foreground">{CONTACT_INFO.title}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-2xl text-center">
          <FadeIn>
            <SectionTag>Founder</SectionTag>
            <h2 className="text-3xl font-bold text-foreground mt-4 mb-10">Meet the Founder</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white rounded-2xl p-10 shadow-card border border-border">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl mx-auto mb-5">
                BW
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{CONTACT_INFO.name}</h3>
              <p className="text-sm text-muted-foreground font-medium mb-6">
                Founder &amp; CEO, Donation Advocates / authorizationIQ™
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Brent Whetstone has spent his career at the intersection of organ donation, family advocacy, and clinical operations. With deep field experience across multiple OPO environments, he has personally supported hundreds of families through the donation process.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                He has seen firsthand how the right tools, guidance, and data can transform outcomes — and how their absence can hold even the most dedicated coordinators back. authorizationIQ™ is the platform Brent wished existed when he was in the field.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-7">
                His vision is simple: technology should amplify human compassion — giving coordinators more confidence, families more support, and OPOs more visibility into what's working and why.
              </p>
              <div className="pt-5 border-t border-border flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
                <a
                  href={`tel:+1${CONTACT_INFO.phone.replace(/\D/g, "")}`}
                  className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-warm-bg">
        <div className="container-site">
          <FadeIn>
            <div
              className="rounded-2xl p-12 md:p-16 text-center"
              style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 60%, #2A6F97 100%)" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Partner With authorizationIQ™
              </h2>
              <p className="text-white/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                We're looking for forward-thinking OPOs to join our early access program and help shape the future of organ donation outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo">
                  <AppButton variant="accent" size="lg">
                    Request a Demo <ArrowRight size={16} />
                  </AppButton>
                </Link>
                <Link to="/contact">
                  <AppButton variant="white" size="lg">
                    Contact Us
                  </AppButton>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
