
'use client';

import { cn } from '@/lib/utils';
import type { RefObject } from 'react';

export function OurWorkSection({ ourWorkRef, isOurWorkVisible }: { ourWorkRef: RefObject<HTMLDivElement>, isOurWorkVisible: boolean }) {
  return (
    <section id="our-work" ref={ourWorkRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
      <div className="container px-4 md:px-6">
        <div className={cn("max-w-3xl mx-auto text-center space-y-6 transition-all duration-300", isOurWorkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Work</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Do</h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            We’ve built lightning-fast, high-converting websites for businesses across Canada — from service providers and local shops to consultants, creatives, and eCommerce brands.
          </p>
          <div className="text-left">
            <p className="text-muted-foreground md:text-xl/relaxed">
              Each NightTech Site is:
            </p>
            <ul className="text-muted-foreground md:text-xl/relaxed list-none space-y-2">
              <li>• Custom-tailored to match your brand</li>
              <li>• Designed for a mobile-first experience</li>
              <li>• SEO-ready to get you found fast</li>
              <li>• Built to convert visitors into leads or sales</li>
            </ul>
          </div>
          <p className="text-muted-foreground md:text-xl/relaxed">
            We combine speed with strategy, clean design with real results. Your site doesn’t just look great — it works hard behind the scenes to grow your business.
          </p>
        </div>
      </div>
    </section>
  );
}
