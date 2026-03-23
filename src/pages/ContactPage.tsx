import { useState } from "react";
import { Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });

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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto leading-relaxed">
              Have questions? We'd love to connect. Reach out and we'll respond within one business day.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold text-foreground mb-5">We'd Love to Hear From You</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you're an OPO executive curious about the platform, a coordinator with questions, or a hospital partner exploring collaboration — we're here for the conversation. No pressure, no pushy sales tactics. Just a genuine discussion about how we can support your mission.
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Email</div>
                    <a href="mailto:brent@donationadvocates.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      brent@donationadvocates.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Phone</div>
                    <a href="tel:+13308837131" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      (330) 883-7131
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">Response Time</div>
                    <p className="text-muted-foreground text-sm">We respond to all inquiries within one business day.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right form */}
            <FadeIn direction="left" delay={0.15}>
              {status === "success" ? (
                <div className="bg-white rounded-2xl p-10 shadow-card border border-border text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={32} className="text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thank you for reaching out. We'll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-card border border-border">
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">Organization</label>
                      <input
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        placeholder="Your OPO or organization"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>
                  {status === "error" && (
                    <p className="text-sm text-destructive mb-4">Something went wrong. Please try again or email us directly.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary-light transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed shadow-card"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
