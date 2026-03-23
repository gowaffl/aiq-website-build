import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, Shield } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const interests = [
  "aIQ Predict — Predictive Analytics",
  "aIQ Navigator — Conversation Support",
  "aIQ Insights — Performance Dashboards",
  "Full Platform Demo",
];

export default function DemoPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    role: "",
    interest: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Early Access Available
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Request a Demo</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto leading-relaxed">
              See authorizationIQ™ in action. We'll walk you through the platform and discuss how it fits your OPO.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-site max-w-2xl">
          {status === "success" ? (
            <FadeIn>
              <div className="bg-white rounded-2xl p-12 shadow-card border border-border text-center">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} className="text-success" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">You're on the List!</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Thank you for your interest in authorizationIQ™. We'll be in touch within 24 hours to schedule your personalized demo.
                </p>
                <Link
                  to="/"
                  className="inline-flex px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-light transition-all hover:-translate-y-0.5"
                >
                  Return to Home
                </Link>
              </div>
            </FadeIn>
          ) : (
            <FadeIn>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-2">Tell Us About Your OPO</h2>
                <p className="text-muted-foreground text-sm mb-8">
                  Fill out the form below and we'll reach out to schedule a personalized demo at your convenience.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Work Email *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="jane@youropo.org"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Organization *</label>
                    <input
                      required
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="Your OPO or health system"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Role</label>
                    <input
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                      placeholder="e.g. Executive Director, Clinical Director, Coordinator"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">What interests you most?</label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                    >
                      <option value="">Select an option...</option>
                      {interests.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Anything else?</label>
                    <textarea
                      rows={4}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your current challenges or goals..."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-destructive">Something went wrong. Please try emailing brent@donationadvocates.com directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-accent text-accent-foreground font-bold rounded-xl text-base hover:bg-accent-light transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-card"
                  >
                    {status === "loading" ? "Submitting..." : "Request My Demo →"}
                  </button>
                </form>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-5 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Clock size={13} /> We respond within 24 hours</span>
                  <span className="flex items-center gap-1.5"><Shield size={13} /> No spam, ever</span>
                </div>
              </div>
            </FadeIn>
          )}
        </div>
      </section>
    </div>
  );
}
