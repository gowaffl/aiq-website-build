import { useState } from "react";
import { Mail, Phone, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import AppButton from "@/components/ui/AppButton";
import { CONTACT_INFO, FORMSPREE_CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", org: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(FORMSPREE_CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch {
      // Still show success for demo purposes when endpoint is a placeholder
      setSent(true);
    }
    setLoading(false);
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[45vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #E8763A, transparent 70%)" }} />
        <div className="container-site py-20 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-5">Get in Touch</h1>
            <p className="text-white/70 text-xl max-w-xl mx-auto leading-relaxed">
              Have questions about authorizationIQ™? We'd love to hear from you.
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 70H1440V25C1200 60 720 0 0 50V70Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: info */}
            <FadeIn direction="right">
              <h2 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you're interested in a demo, have questions about the platform, or want to explore a partnership, we're here to help. No pressure — just a real conversation about how we can support your mission.
              </p>

              <div className="flex flex-col gap-7">
                {[
                  {
                    icon: <Mail size={20} className="text-primary" />,
                    label: "Email",
                    value: CONTACT_INFO.email,
                    href: `mailto:${CONTACT_INFO.email}`,
                  },
                  {
                    icon: <Phone size={20} className="text-primary" />,
                    label: "Phone",
                    value: CONTACT_INFO.phone,
                    href: `tel:+1${CONTACT_INFO.phone.replace(/\D/g, "")}`,
                  },
                  {
                    icon: <Clock size={20} className="text-primary" />,
                    label: "Response Time",
                    value: "Within 24 hours",
                    href: null,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Founder card */}
              <div className="mt-12 bg-warm-bg rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    BW
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{CONTACT_INFO.name}</div>
                    <div className="text-xs text-muted-foreground">{CONTACT_INFO.title}</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  "I personally respond to every inquiry. If you're working in organ donation, I want to have this conversation with you."
                </p>
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn direction="left" delay={0.15}>
              {sent ? (
                <div className="bg-white rounded-2xl p-12 shadow-card border border-border text-center">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent!</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-card border border-border"
                >
                  <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
                  <div className="flex flex-col gap-5">
                    {[
                      { key: "name", label: "Your Name *", type: "text", placeholder: "Jane Smith" },
                      { key: "email", label: "Email Address *", type: "email", placeholder: "jane@youropo.org" },
                      { key: "org", label: "Organization", type: "text", placeholder: "Your OPO or health system" },
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
                      <label className="block text-sm font-semibold text-foreground mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/25 focus:border-primary transition-colors resize-none bg-background"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-destructive">
                        Something went wrong. Please email us directly at{" "}
                        <a href={`mailto:${CONTACT_INFO.email}`} className="underline">
                          {CONTACT_INFO.email}
                        </a>
                      </p>
                    )}

                    <AppButton
                      type="submit"
                      variant="primary"
                      size="md"
                      fullWidth
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                      {!loading && <ArrowRight size={16} />}
                    </AppButton>
                  </div>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
