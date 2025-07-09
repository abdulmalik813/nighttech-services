'use client';

import { useRef } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

export default function TermsOfService() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentVisible = useOnScreen(contentRef, 0.1);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container px-4 md:px-6 pt-24 pb-12 md:py-24 lg:py-32">
          <div ref={contentRef} className={cn("max-w-3xl mx-auto space-y-6 transition-all duration-1000", isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Terms and Conditions</h1>
            <p className="text-muted-foreground">Effective Date: July 8, 2025</p>
            <p className="text-muted-foreground">Last Updated: July 8, 2025</p>

            <div className="space-y-4 text-foreground">
              <p className="text-muted-foreground">Welcome to Night Tech Services. By using our services, you agree to be bound by the following terms and conditions. Please read them carefully.</p>

              <h2 className="text-2xl font-bold">1. Services Offered</h2>
              <p className="text-muted-foreground">Night Tech Services provides the following digital and business solutions:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>New Websites: Custom, responsive websites built from scratch, tailored to your brand.</li>
                <li>Website Editing: Updates and enhancements to existing websites, including features, content, and design.</li>
                <li>SEO Optimization: Search engine ranking improvements to increase organic visibility.</li>
                <li>Marketing Emails: Strategy, setup, and automation of email campaigns.</li>
                <li>Email Designs: Branded and responsive email templates.</li>
                <li>Business Solutions: Development of tools like order management systems and internal platforms.</li>
                <li>AI Integration: Custom knowledge bases trained to support your operations.</li>
              </ul>
              <p className="text-muted-foreground mt-2">⚠️ Project scope and timeline depend on the complexity and nature of each request and will be outlined clearly in the initial written agreement or invoice.</p>

              <h2 className="text-2xl font-bold">2. Payment Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>All prices are in Canadian Dollars (CAD).</li>
                <li>A 50% deposit is required before work begins. The remaining balance is due upon final delivery or based on agreed milestones.</li>
                <li>Accepted payment methods: e-transfer, credit card, or business invoice.</li>
                <li>Late payments (beyond 10 business days) may be subject to a 5% monthly late fee.</li>
              </ul>

              <h2 className="text-2xl font-bold">3. Project Timelines & Revisions</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Timelines are estimates only, subject to change based on project scope and client responsiveness.</li>
                <li>Clients must provide all necessary content (logos, text, access credentials, etc.) in a timely manner.</li>
                <li>Each service includes up to two revision rounds. Extra revisions may incur additional charges.</li>
              </ul>

              <h2 className="text-2xl font-bold">4. Client Responsibilities</h2>
              <p className="text-muted-foreground">Clients agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Provide accurate and complete information.</li>
                <li>Review and approve deliverables on time.</li>
                <li>Use the services only for lawful and appropriate business purposes.</li>
              </ul>
              <p className="text-muted-foreground mt-2">Delays caused by the client (e.g., slow response or missing materials) may impact timelines and are not Night Tech Services’ responsibility.</p>

              <h2 className="text-2xl font-bold">5. Cancellations & Refunds</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Deposits are non-refundable once work begins.</li>
                <li>If a project is canceled mid-way by the client, payment for work completed to date will be retained.</li>
                <li>Night Tech Services reserves the right to cancel a project with notice and will refund unearned fees where applicable.</li>
              </ul>

              <h2 className="text-2xl font-bold">6. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>Clients retain ownership of their own content.</li>
                <li>Final deliverables become the client’s property once full payment is received.</li>
                <li>Night Tech Services may display completed work in its portfolio, unless the client requests otherwise in writing.</li>
              </ul>

              <h2 className="text-2xl font-bold">7. Liability Disclaimer</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>While we strive for the highest quality, Night Tech Services is not liable for business interruptions, lost profits, third-party issues, or loss of data.</li>
                <li>SEO, marketing, and digital performance outcomes cannot be guaranteed due to external factors beyond our control.</li>
              </ul>

              <h2 className="text-2xl font-bold">8. Privacy & Data Protection</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                <li>All client data is treated as confidential and used only for fulfilling the contracted services.</li>
                <li>We follow applicable Canadian data protection and privacy laws.</li>
              </ul>

              <h2 className="text-2xl font-bold">9. Modifications</h2>
              <p className="text-muted-foreground">
                We may revise these terms at any time. Continued use of our services implies agreement with the updated terms.
              </p>

              <h2 className="text-2xl font-bold">10. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of Prince Edward Island and Canada. Disputes will be resolved in PEI courts or agreed arbitration.
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
