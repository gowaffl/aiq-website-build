import FadeIn from "@/components/FadeIn";
import SectionTag from "@/components/SectionTag";
import CTABanner from "@/components/CTABanner";
import { Heart, Target, Eye } from "lucide-react";

const pillars = [
  {
    icon: <Heart size={24} className="text-accent" />,
    title: "Our Mission",
    desc: "To honor every donor's gift, support every grieving family, and empower every coordinator with the tools they need to do their life-saving work with confidence and compassion.",
  },
  {
    icon: <Target size={24} className="text-primary" />,
    title: "Our Story",
    desc: "authorizationIQ™ was born from firsthand experience. Brent Whetstone spent years on the front lines of organ donation, seeing coordinators struggle without the support they needed. He set out to build the tool he wished he'd had.",
  },
  {
    icon: <Eye size={24} className="text-success" />,
    title: "Our Vision",
    desc: "A future where every OPO in the country has access to data-driven, AI-powered tools — where no coordinator walks into a family meeting unprepared, and no donor's wish goes unfulfilled because of process gaps.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
              About authorizationIQ™
            </h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto leading-relaxed">
              Built by organ donation professionals who know the work, the weight, and the mission.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Mission / Story / Vision */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <FadeIn className="text-center mb-14">
            <SectionTag>Who We Are</SectionTag>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
              Driven by Purpose. Powered by Data.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="bg-white rounded-2xl p-8 shadow-card border border-border h-full hover:shadow-card-hover hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-5">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Expanded prose */}
          <FadeIn>
            <div className="max-w-3xl mx-auto prose prose-gray text-muted-foreground leading-relaxed space-y-5">
              <p>
                The organ donation field is filled with some of the most dedicated, compassionate professionals in all of healthcare. Donation coordinators bear enormous emotional weight — approaching families at the worst moments of their lives and asking them to find meaning and generosity in the midst of profound grief.
              </p>
              <p>
                Yet these remarkable professionals often enter those conversations without the data, the support, or the tools they need to give every family the best possible experience. Low authorization rates aren't a reflection of coordinator skill or dedication — they're often a symptom of structural gaps in preparation, guidance, and follow-through.
              </p>
              <p>
                authorizationIQ™ exists to close those gaps. We're building the intelligence layer that sits alongside every coordinator, every leader, and every OPO — so that the mission of donation can be fulfilled more completely, more compassionately, and more consistently.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-warm-bg">
        <div className="container-site">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <SectionTag>Founder</SectionTag>
            <h2 className="text-3xl font-bold text-foreground mt-4 mb-10">Meet the Founder</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="max-w-xl mx-auto bg-white rounded-2xl p-10 shadow-card border border-border text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white font-bold text-2xl mx-auto mb-5">
                BW
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Brent Whetstone</h3>
              <p className="text-sm text-muted-foreground font-medium mb-6">Founder & CEO, Donation Advocates / authorizationIQ™</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Brent Whetstone has spent his career at the intersection of organ donation, family advocacy, and clinical operations. With deep field experience in OPO environments, he has supported hundreds of families through the donation process — and has seen firsthand how the right tools, guidance, and data can transform outcomes.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                authorizationIQ™ is the platform Brent wished existed when he was in the field. It's built on a simple conviction: that every coordinator deserves to walk into every conversation fully prepared, and every family deserves the best possible experience.
              </p>
              <div className="pt-5 border-t border-border">
                <a
                  href="mailto:brent@donationadvocates.com"
                  className="text-sm font-semibold text-primary hover:text-primary-light transition-colors"
                >
                  brent@donationadvocates.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTABanner
        headline="Partner With authorizationIQ™"
        subtext="Join us in building a future where every OPO has the tools to fulfill every donor's gift."
        primaryLabel="Request a Demo"
        secondaryLabel="Get in Touch"
      />
    </div>
  );
}
