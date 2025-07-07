'use client';

import { useRef, useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

export default function TermsOfService() {
  const contentRef = useRef<HTMLDivElement>(null);
  const isContentVisible = useOnScreen(contentRef, 0.1);

  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container px-4 md:px-6 pt-24 pb-12 md:py-24 lg:py-32">
          <div ref={contentRef} className={cn("max-w-3xl mx-auto space-y-6 transition-all duration-1000", isContentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>

            <div className="space-y-4 text-foreground">
              <h2 className="text-2xl font-bold">1. Introduction</h2>
              <p className="text-muted-foreground">
                Welcome to NightTech Services! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>

              <h2 className="text-2xl font-bold">2. Services</h2>
              <p className="text-muted-foreground">
                NightTech Services provides web development, cloud solutions, and cybersecurity services as described on our website. We reserve the right to modify or discontinue our services at any time.
              </p>

              <h2 className="text-2xl font-bold">3. User Responsibilities</h2>
              <p className="text-muted-foreground">
                You agree to use our services in compliance with all applicable laws and regulations. You are responsible for any content you provide and for maintaining the confidentiality of your account information.
              </p>

              <h2 className="text-2xl font-bold">4. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                To the fullest extent permitted by law, NightTech Services shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>

              <h2 className="text-2xl font-bold">5. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles.
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
