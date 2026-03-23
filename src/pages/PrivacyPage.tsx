import FadeIn from "@/components/FadeIn";

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
            <p className="text-white/60 text-sm">Last updated: January 1, 2026</p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60H1440V20C1200 50 720 0 0 40V60Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-site max-w-3xl">
          <FadeIn>
            <div className="prose prose-gray max-w-none text-muted-foreground leading-relaxed space-y-8">
              
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
                <p>
                  authorizationIQ™ ("we," "our," or "us"), operated by Donation Advocates, is committed to protecting the privacy of visitors to our marketing website (authorizationiq.com). This Privacy Policy describes how we collect, use, and share information when you visit our website or interact with our services.
                </p>
                <p className="mt-3">
                  This policy covers our marketing website only — not the authorizationIQ™ platform itself. Data practices for the platform are governed by separate agreements with OPO partners.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
                <p><strong className="text-foreground">Information you provide:</strong> When you submit a demo request, contact form, or early access signup, we collect your name, email address, organization name, role, and any other information you voluntarily provide.</p>
                <p className="mt-3"><strong className="text-foreground">Automatically collected information:</strong> We may collect standard web analytics data including pages visited, time on site, referring URL, browser type, and general geographic location (country/region level only). This is collected through anonymized analytics tools (e.g., Google Analytics).</p>
                <p className="mt-3"><strong className="text-foreground">Cookies:</strong> Our website uses essential cookies for basic functionality. We do not use third-party advertising cookies or tracking pixels beyond standard analytics.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>To respond to demo requests and contact form submissions</li>
                  <li>To send information about authorizationIQ™ that you've requested</li>
                  <li>To improve our website and understand how visitors interact with it</li>
                  <li>To communicate product updates if you've opted in</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Healthcare Data Commitment</h2>
                <p>
                  This marketing website does not collect, process, or store any Protected Health Information (PHI) as defined by HIPAA. If you are an existing platform customer and have questions about data practices within the authorizationIQ™ platform, please refer to your signed Business Associate Agreement (BAA) or contact us directly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Information Sharing</h2>
                <p>We do not sell, rent, or trade your personal information. We may share information with:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Service providers who assist in our operations (e.g., form processing, email delivery) under data processing agreements</li>
                  <li>Legal authorities when required by law or to protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Data Retention</h2>
                <p>
                  We retain contact information for as long as necessary to maintain our business relationship or respond to your inquiry. You may request deletion of your information at any time by contacting us at brent@donationadvocates.com.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
                <p>Depending on your location, you may have the right to access, correct, or delete your personal information; withdraw consent; or opt out of marketing communications. To exercise these rights, contact us at brent@donationadvocates.com.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">8. Security</h2>
                <p>
                  We implement reasonable technical and organizational measures to protect your information from unauthorized access, disclosure, or destruction. However, no internet transmission is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">9. Contact Us</h2>
                <p>For privacy-related questions or requests:</p>
                <div className="mt-3 bg-warm-bg rounded-xl p-5 border border-border">
                  <p className="font-semibold text-foreground text-sm">authorizationIQ™ / Donation Advocates</p>
                  <p className="text-sm">Email: <a href="mailto:brent@donationadvocates.com" className="text-primary hover:underline">brent@donationadvocates.com</a></p>
                  <p className="text-sm">Phone: <a href="tel:+13308837131" className="text-primary hover:underline">(330) 883-7131</a></p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
