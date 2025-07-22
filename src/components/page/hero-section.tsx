
'use client';

import type { RefObject } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mouse } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HeroSection({ heroRef, isHeroVisible }: { heroRef: RefObject<HTMLDivElement>, isHeroVisible: boolean }) {
  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className="max-w-2xl">
          <div className={cn("flex flex-col justify-center space-y-4 transition-all duration-300", isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24')}>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary-foreground">
                <span className="text-accent animate-text-pulse">Stunning</span> Websites. Delivered
                <span className="block mt-2">
                  <span className="text-accent animate-text-pulse">Fast.</span>
                </span>
              </h1>
              <p className="max-w-[600px] text-primary-foreground md:text-xl">
                NightTech Services Inc. helps your brand launch online — in days, not weeks.
              </p>
              <p className="max-w-[600px] text-primary-foreground md:text-lg">
                NightTech Services Inc. delivers sleek, <span className="font-bold text-accent">high-performing</span> websites with <span className="font-bold text-accent">sharp design</span>, mobile optimization, and expert SEO — all completed in record time. Trusted by startups and small businesses across Canada
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row flex-wrap items-center">
              <Button asChild size="lg" className="bg-accent text-white hover:bg-accent/90 animate-scale-pulse">
                <Link href="#pricing">Begin</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="bg-white/10 text-primary-foreground border-primary-foreground/50 hover:bg-white/20">
                <Link href="#services">What We Offer</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="bg-white/10 text-primary-foreground border-primary-foreground/50 hover:bg-white/20">
                <Link href="#how-to-begin">Our Process</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="text-primary-foreground border-primary-foreground/50 bg-white/10 hover:bg-white/20">
                <Link href="#testimonials">See what others say</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a href="#services" aria-label="Scroll down">
              <Mouse className="w-8 h-8 text-primary-foreground animate-bounce" />
          </a>
      </div>
    </section>
  );
}
