
'use client';

import type { RefObject } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TechSupportPricingSection({ techSupportPricingRef, isTechSupportPricingVisible, handleRequestInfoClick }: { techSupportPricingRef: RefObject<HTMLDivElement>, isTechSupportPricingVisible: boolean, handleRequestInfoClick: (packageName: string) => void }) {
  return (
    <section id="tech-support-pricing" ref={techSupportPricingRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-t from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 pt-0 flex items-center">
      <div className={cn("container px-4 md:px-6 transition-all duration-300", isTechSupportPricingVisible ? 'opacity-100' : 'opacity-0')}>
        <div className="flex justify-center">
            <div className="lg:w-1/2 md:w-2/3 w-full">
                <Card className={cn("flex flex-col border-gray-500/50 border-2 transition-all duration-300", isTechSupportPricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
                    <CardHeader>
                        <CardTitle className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                            <Wrench />
                            On-Site & Remote Technical Support
                        </CardTitle>
                        <p className="text-muted-foreground pt-2">Expert help for your hardware and software needs, when you need it.</p>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <div>
                            <h4 className="font-semibold">Services include:</h4>
                            <ul className="space-y-2 mt-2">
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Computer & Laptop Repair</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Custom PC Builds & Upgrades</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Printer Setup & Troubleshooting</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Software Installation & Support</span></li>
                                <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Virus & Malware Removal</span></li>
                            </ul>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-auto">
                        <h4 className="font-bold text-lg">🔧 Rate: $80/hour</h4>
                        <p className="text-sm text-muted-foreground mt-1">(Minimum 1-hour charge for on-site visits)</p>
                        <Button className="w-full mt-4" onClick={() => handleRequestInfoClick('Technical Support')}>Request Service</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
