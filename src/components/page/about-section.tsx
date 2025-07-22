
'use client';

import { cn } from '@/lib/utils';
import type { RefObject } from 'react';

export function AboutSection({ aboutRef, isAboutVisible }: { aboutRef: RefObject<HTMLDivElement>, isAboutVisible: boolean }) {
  return (
    <section id="about" ref={aboutRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-t from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 flex items-center">
      <div className="container px-4 md:px-6">
        <div className={cn("max-w-3xl mx-auto text-center space-y-6 transition-all duration-300", isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Who We Are</h2>
          <p className="text-2xl font-semibold tracking-tight">
            Frustrated with slow, outdated websites that don't perform?
          </p>
          <div className="space-y-4 text-muted-foreground md:text-xl/relaxed">
            <p>
              You're not alone. Most businesses struggle with poor online presence, but it's not your fault — the digital world moves fast. At NightTech Services Inc., we close the gap between your vision and execution.
            </p>
            <p>
              We build clean, fast, and mobile-optimized websites that look impressive and convert traffic into leads.
            </p>
            <p>
              Whether you're a growing startup or an established brand ready to level up, we bring speed, strategy, and sharp design to every project — including expert SEO that gets you found.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
