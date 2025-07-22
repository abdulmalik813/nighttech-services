
'use client';

import type { RefObject } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

export function FaqSection({ faqRef, isFaqVisible }: { faqRef: RefObject<HTMLDivElement>, isFaqVisible: boolean }) {
  return (
    <section id="faq" ref={faqRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
      <div className={cn("container px-4 md:px-6 transition-all duration-300", isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions? We've got answers. Here are some of the most common questions we get.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl w-full mt-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does it take to build a site?</AccordionTrigger>
              <AccordionContent>
                Most projects are completed in 3–5 business days, depending on complexity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to pay everything upfront?</AccordionTrigger>
              <AccordionContent>
                No — we use a secure 50/50 payment model to protect both sides.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What if I don’t like the first draft?</AccordionTrigger>
              <AccordionContent>
                We revise quickly until you're 100% happy with the result.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Will my website work on phones?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Every NightTech Site is built mobile-first and fully responsive.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer SEO?</AccordionTrigger>
              <AccordionContent>
                Yes. All sites include expert on-page SEO to help you rank and get found.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
