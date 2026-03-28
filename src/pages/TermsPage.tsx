import FadeIn from "@/components/FadeIn";

export default function TermsPage() {
  return (
    <div>
      <section
        className="relative min-h-[40vh] flex items-center pt-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F3048 0%, #1B4D6E 40%, #2A6F97 100%)" }}
      >
        <div className="container-site py-16 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
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
            <div className="prose prose-gray max-w-none text-muted-foreground leading-relaxed space-y-8">
              
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">1. Agreement to Terms</h2>
                <p>
                  By accessing the authorizationIQ™ marketing website (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site. These Terms apply to the marketing website only, not the authorizationIQ™ software platform, which is governed by a separate licensing and service agreement.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">2. Use of the Site</h2>
                <p>You agree to use the Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>Use the Site in any way that violates applicable federal, state, or local laws</li>
                  <li>Attempt to gain unauthorized access to any part of the Site</li>
                  <li>Use automated tools to scrape, crawl, or extract data from the Site</li>
                  <li>Transmit any unsolicited commercial communications via the Site's contact forms</li>
                  <li>Impersonate authorizationIQ™ or its representatives</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">3. Intellectual Property</h2>
                <p>
                  All content on the Site — including text, graphics, logos, images, and software — is the property of authorizationIQ™ / Donation Advocates and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
                <p className="mt-3">
                  "authorizationIQ™," "aIQ Predict," "aIQ Navigator," and "aIQ Insights" are trademarks of Donation Advocates. All rights reserved.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">4. Early Access Program</h2>
                <p>
                  The authorizationIQ™ Early Access Program is offered to select OPO partners for evaluation purposes. Participation is at the sole discretion of authorizationIQ™. Early access participants may be asked to provide feedback and agree to separate terms covering platform access, data handling, and confidentiality.
                </p>
                <p className="mt-3">
                  All statistics, projections, and estimates presented on the Site are aspirational and based on modeling — not guaranteed outcomes. Actual results will vary depending on organization size, case mix, implementation, and other factors.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">5. Disclaimer of Warranties</h2>
                <p>
                  The Site and its content are provided "as is" without warranties of any kind, either express or implied. authorizationIQ™ does not warrant that the Site will be error-free, uninterrupted, or free of viruses. We do not warrant the accuracy, completeness, or suitability of any content for any particular purpose.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, authorizationIQ™ and Donation Advocates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site or its content.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">7. Third-Party Links</h2>
                <p>
                  The Site may contain links to third-party websites. These links are provided for convenience only. authorizationIQ™ has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">8. Changes to Terms</h2>
                <p>
                  We reserve the right to update these Terms at any time. Continued use of the Site following any changes constitutes acceptance of the updated Terms. The "Last updated" date at the top of this page reflects the most recent revision.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">9. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of Ohio, without regard to its conflict of law provisions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">10. Contact</h2>
                <div className="bg-warm-bg rounded-xl p-5 border border-border">
                  <p className="font-semibold text-foreground text-sm">authorizationIQ™ / Donation Advocates</p>
                  <p className="text-sm">Email: <a href="mailto:brent@authorizationiq.ai" className="text-primary hover:underline">brent@authorizationiq.ai</a></p>
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
