import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Shield } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AppButton from "@/components/ui/AppButton";
import { FORMSPREE_DEMO } from "@/lib/constants";

const interests = [
  "aIQ Predict — Predictive Analytics",
  "aIQ Navigator — Conversation Support",
  "aIQ Insights — Performance Dashboards",
  "Full Platform Demo",
];

export default function DemoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    interest: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.org) return;
    setLoading(true);
    try {
      await fetch(FORMSPREE_DEMO, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch {
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[48vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="absolute top-1/4 right-0 w-96 h-96 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8763A, transparent 70%)" }} />
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
              Early Access Available
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">Request a Demo</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto leading-relaxed">
              See how authorizationIQ™ can transform your organization's authorization rates and support your coordinators.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 70H1440V25C1200 60 720 0 0 50V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-2xl">
          {sent ? (
            <FadeIn>
              <div className="bg-white rounded-2xl p-12 shadow-card border border-border text-center">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-success" />
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 text-success text-xs font-semibold uppercase tracking-wider mb-5">
                  Demo Request Received!
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">You're on the List!</h2>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm mx-auto">
                  Thank you for your interest in authorizationIQ™. Our team will be in touch within 24 hours to schedule your personalized demo.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-light transition-all hover:-translate-y-0.5"
                >
                  Return to Home <ArrowRight size={15} />
                </Link>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">Schedule Your Demo</h2>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Fill in your details and we'll reach out to schedule a time that works for you.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {[
                    { key: "name", label: "Full Name *", type: "text", placeholder: "Jane Smith" },
                    { key: "email", label: "Work Email *", type: "email", placeholder: "jane@youropo.org" },
                    { key: "org", label: "Organization *", type: "text", placeholder: "Your OPO or health system" },
                    { key: "role", label: "Your Role", type: "text", placeholder: "e.g. Executive Director, Coordinator" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required={field.label.includes("*")}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => update(field.key, e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors bg-background"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      What interests you most?
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => update("interest", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Select one...</option>
                      {interests.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Anything else we should know?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your current challenges or goals..."
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors resize-none bg-background"
                    />
                  </div>

                  <AppButton
                    type="submit"
                    variant="accent"
                    size="lg"
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Demo Request"}
                    {!loading && <ArrowRight size={18} />}
                  </AppButton>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-1">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock size={12} /> We respond within 24 hours
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Shield size={12} /> No spam, ever
                    </span>
                  </div>
                </form>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
