
'use client';

import type { RefObject } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MousePointerClick, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HowToBeginSection({ howToBeginRef, isHowToBeginVisible }: { howToBeginRef: RefObject<HTMLDivElement>, isHowToBeginVisible: boolean }) {
  return (
    <section id="how-to-begin" ref={howToBeginRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-t from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 flex items-center">
      <div className={cn("container px-4 md:px-6 transition-all duration-300", isHowToBeginVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How to Begin</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Process</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here’s how to get started in a way that’s <span className="font-bold">fast, smart, and safe</span> for both of us:
            </p>
          </div>
        </div>
        <div className="relative mt-12 w-full max-w-3xl mx-auto">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
          <div className="space-y-12">
            <div className="relative pl-12">
              <div className="absolute left-5 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
              <h3 className="font-bold text-xl">1. Fill Out the Form</h3>
              <p className="text-muted-foreground mt-1">Fill out our <Button asChild variant="link" className="p-0 h-auto font-bold text-accent animate-text-pulse transition-colors hover:bg-accent/90"><Link href="#contact" className="inline-flex items-center gap-1">quick form <MousePointerClick className="h-4 w-4" /></Link></Button> — it helps us understand your goals, brand, and vision.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-5 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
              <h3 className="font-bold text-xl">2. Receive Your Proposal</h3>
              <p className="text-muted-foreground mt-1">We’ll send you a clear proposal with timeline, pricing, and sample direction.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-5 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
              <h3 className="font-bold text-xl">3. Secure Your Project</h3>
              <p className="text-muted-foreground mt-1">Approve the plan and secure your project with a simple 50% deposit.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-5 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
              <h3 className="font-bold text-xl">4. We Get to Work</h3>
              <p className="text-muted-foreground mt-1">We get to work. You’ll see results as low as 48 hours.</p>
            </div>
            <div className="relative pl-12">
              <div className="absolute left-5 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
              <h3 className="font-bold text-xl">5. Launch Your Website</h3>
              <p className="text-muted-foreground mt-1">When you’re 100% satisfied, pay the final 50% and we launch your live website.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Button asChild size="lg">
            <Link href="#pricing">
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <p className="text-center mt-8 text-muted-foreground md:text-xl/relaxed">
            This proven system filters <span className="font-bold">serious clients</span>, keeps everyone <span className="font-bold">protected</span>, and helps us focus on what matters — delivering a <span className="font-bold">beautiful, high-performing website</span> you’ll love.
        </p>
      </div>
    </section>
  );
}
