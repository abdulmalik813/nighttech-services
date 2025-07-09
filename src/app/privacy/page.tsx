'use client';

import { useRef } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

export default function PrivacyPolicy() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentVisible = useOnScreen(contentRef, 0.1);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container px-4 md:px-6 pt-24 pb-12 md:py-24 lg:py-32">
          <div ref={contentRef} className={cn("max-w-3xl mx-auto space-y-6 transition-all duration-1000", isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: July 8, 2025</p>
            
            <div className="space-y-4 text-foreground">
              <h2 className="text-2xl font-bold">1. Information We Collect</h2>
              <p className="text-muted-foreground">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Personal Information: When you contact us, request a quote, fill out a form, or engage our services, you may provide information such as your name, email, phone number, business details, and any files or project specifications.</li>
                <li>Usage Data: We may collect data on how you use our website or services (e.g., page views, time on site, IP address, browser type), using tools like Google Analytics or similar.</li>
                <li>Communication Data: This includes any information shared via email, forms, live chat, or phone calls.</li>
                <li>AI/Automation Tools: If you engage with any AI-powered tools or features we offer, we may collect anonymized interaction data to improve service accuracy and performance.</li>
              </ul>

              <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Deliver and manage our services, including web development, SEO, and digital solutions.</li>
                <li>Communicate with you about your project, provide updates, and respond to inquiries.</li>
                <li>Send occasional updates or promotional communications, which you can opt out of at any time.</li>
                <li>Improve our services, website, and customer experience.</li>
                <li>Comply with legal obligations or protect our legal rights in case of disputes.</li>
              </ul>

              <h2 className="text-2xl font-bold">3. Information Sharing</h2>
              <p className="text-muted-foreground">We do not sell or rent your personal information. We may share information only:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>With trusted third-party service providers (e.g., email marketing platforms, analytics tools) who are contractually obligated to keep it secure.</li>
                <li>If required by law or legal process (e.g., to respond to a subpoena or enforce our rights).</li>
                <li>With your consent or direction.</li>
              </ul>
              <p className="text-muted-foreground mt-2">All shared data is minimal and necessary to fulfill specific business functions.</p>

              <h2 className="text-2xl font-bold">4. Cookies and Tracking</h2>
              <p className="text-muted-foreground">Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Remember preferences and user settings</li>
                <li>Analyze usage for website performance and improvements</li>
                <li>Track marketing effectiveness</li>
              </ul>
              <p className="text-muted-foreground mt-2">You may disable cookies in your browser settings; however, some features of our website may not function properly without them.</p>

              <h2 className="text-2xl font-bold">5. Data Security</h2>
              <p className="text-muted-foreground">
                We take appropriate technical and organizational measures to safeguard your data. While no system is completely secure, we use industry-standard protections to prevent unauthorized access, misuse, or disclosure.
              </p>

              <h2 className="text-2xl font-bold">6. Your Rights & Choices</h2>
              <p className="text-muted-foreground">You may:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Request access to the data we have on you</li>
                <li>Ask us to correct or delete your information</li>
                <li>Withdraw consent or object to data use in certain cases</li>
                <li>Opt out of marketing emails by clicking “unsubscribe” in the message or emailing us directly</li>
              </ul>
              <p className="text-muted-foreground mt-2">To exercise any of these rights, contact us at info@nighttechservices.com.</p>

              <h2 className="text-2xl font-bold">7. Data Retention</h2>
              <p className="text-muted-foreground">We retain personal data only as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Fulfill the purpose for which it was collected</li>
                <li>Meet legal and accounting obligations</li>
                <li>Resolve potential disputes</li>
              </ul>
              <p className="text-muted-foreground mt-2">Once no longer needed, your data is securely deleted or anonymized.</p>

              <h2 className="text-2xl font-bold">8. Children’s Privacy</h2>
              <p className="text-muted-foreground">
                Our services are intended for businesses and adults aged 18 or older. We do not knowingly collect data from children under 13. If we discover we’ve collected data from a minor, we will delete it immediately.
              </p>

              <h2 className="text-2xl font-bold">9. International Users</h2>
              <p className="text-muted-foreground">
                Although based in Prince Edward Island, Canada, if you access our services from outside Canada, you consent to your information being processed and stored in accordance with this policy and Canadian law.
              </p>
              
              <h2 className="text-2xl font-bold">10. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy to reflect changes in technology, law, or business practices. All changes will be posted here with an updated effective date. Continued use of our services implies your acceptance of the updated policy.
              </p>
            </div>

            <Button asChild className="mt-8">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
