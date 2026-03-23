import FadeIn from "@/components/FadeIn";

const sections = [
  {
    title: "Information We Collect",
    body: "When you visit the authorizationIQ™ website, we may collect information you voluntarily provide through our forms, including your name, email address, organization name, role, and any messages you send us. We also collect standard analytics data such as page views, referral sources, and device information through Google Analytics.",
  },
  {
    title: "How We Use Your Information",
    body: "We use the information collected to respond to your inquiries, schedule product demonstrations, send relevant communications about authorizationIQ™, and improve our website experience. We do not sell your personal information to third parties.",
  },
  {
    title: "Data Security",
    body: "We implement appropriate technical and organizational measures to protect your personal information. Our website uses SSL encryption, and form submissions are processed through secure, HIPAA-conscious services.",
  },
  {
    title: "Healthcare Data",
    body: "This privacy policy covers the authorizationIQ™ marketing website only. The authorizationIQ™ platform has separate, comprehensive data protection policies that meet HIPAA compliance requirements. Platform-specific privacy policies will be provided during the onboarding process.",
  },
  {
    title: "Cookies & Analytics",
    body: "We use Google Analytics to understand how visitors interact with our website. This helps us improve our content and user experience. You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.",
  },
  {
    title: "Your Rights",
    body: "You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at brent@donationadvocates.com.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this privacy policy, please contact us at brent@donationadvocates.com or (330) 883-7131.",
  },
];

export default function PrivacyPage() {
  return (
    <div>
      <section
        className="relative min-h-[40vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="container-site py-16 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-white/60 text-sm">Last updated: March 2026</p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="text-xl font-bold text-foreground mb-3">{s.title}</h2>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
