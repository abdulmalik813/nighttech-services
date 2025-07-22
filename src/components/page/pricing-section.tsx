
'use client';

import type { RefObject } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PricingSection({ pricingRef, isPricingVisible, handleRequestInfoClick }: { pricingRef: RefObject<HTMLDivElement>, isPricingVisible: boolean, handleRequestInfoClick: (packageName: string) => void }) {
  return (
    <section id="pricing" ref={pricingRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
      <div className={cn("container px-4 md:px-6 transition-all duration-300", isPricingVisible ? 'opacity-100' : 'opacity-0')}>
        <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Website Development Packages (2025)</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the package that fits your needs. All packages are designed to deliver high-quality, professional websites.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <Card className={cn("flex flex-col border-blue-500/50 border-2 transition-all duration-300", isPricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
            <CardHeader>
              <CardTitle className="text-blue-600 dark:text-blue-400">🟦 Essential Presence</CardTitle>
              <p className="text-muted-foreground pt-2">Professional web presence — simple, clean, and fully managed by NightTech.</p>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div>
                <h4 className="font-semibold">Perfect for:</h4>
                <p className="text-muted-foreground">Small businesses, personal brands, and service providers</p>
              </div>
              <div>
                <h4 className="font-semibold">Includes:</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Responsive, mobile-friendly design (up to 5 pages)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Built-in contact form (sends to your email)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Custom-branded look and layout</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>NightTech handles all content updates</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Up to 5 GB secure storage</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Domain & hosting fully included</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Eligible for PEI Web Presence Grant (50% of project costs, up to $1,000)</span></li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-auto">
                <h4 className="font-bold text-lg">💰 Investment: $1,800 <span className="text-sm font-normal">(one-time)</span></h4>
                <p className="font-semibold text-green-600">Grant-eligible clients could pay as little as $900 out-of-pocket</p>
                <p className="text-sm text-muted-foreground mt-4">🔧 <span className="font-semibold">Optional Add-On:</span> Ongoing content updates + analytics – $50/month</p>
                <Button className="w-full mt-4" onClick={() => handleRequestInfoClick('Essential Presence')}>Request Info</Button>
            </CardFooter>
          </Card>
          <Card className={cn("flex flex-col border-amber-500/50 border-2 transition-all duration-300", isPricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")} style={{ transitionDelay: '100ms' }}>
            <CardHeader>
              <CardTitle className="text-amber-600 dark:text-amber-400">🟨 Growth Pro</CardTitle>
              <p className="text-muted-foreground pt-2">Scalable website solution with content tools and SEO control.</p>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
               <div>
                <h4 className="font-semibold">Perfect for:</h4>
                <p className="text-muted-foreground">Retailers, coaches, consultants, and growing businesses</p>
              </div>
              <div>
                <h4 className="font-semibold">Includes everything in Essential Presence, plus:</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>eCommerce store</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Payment solutions</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Easy-to-use dashboard (edit your own content)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>CMS tools (blog posts, news, team bios, etc.)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Upload and manage media anytime</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Basic on-page SEO tools (meta titles, tags, alt text)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Up to 10 GB storage</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Domain & hosting included</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Eligible for PEI Web Presence Grant (50% of project costs, up to $2,000)</span></li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-auto">
                <h4 className="font-bold text-lg">💰 Investment: $2,400–$5,000</h4>
                <p className="font-semibold text-green-600">Grant-eligible clients could pay as little as $1,200 out-of-pocket</p>
                <p className="text-sm text-muted-foreground mt-4">🔧 <span className="font-semibold">Optional Add-On:</span> Monthly SEO/analytics report – $75/month</p>
                 <Button className="w-full mt-4" onClick={() => handleRequestInfoClick('Growth Pro')}>Request Info</Button>
            </CardFooter>
          </Card>
          <Card className={cn("flex flex-col border-red-500/50 border-2 transition-all duration-300", isPricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")} style={{ transitionDelay: '200ms' }}>
             <CardHeader>
              <CardTitle className="text-red-600 dark:text-red-400">🟥 Elite Digital Suite</CardTitle>
              <p className="text-muted-foreground pt-2">Bespoke, high-performance digital solution with automation and custom development.</p>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <div>
                <h4 className="font-semibold">Perfect for:</h4>
                <p className="text-muted-foreground">Professional firms, clinics, tech startups, and large organizations</p>
              </div>
              <div>
                <h4 className="font-semibold">Includes everything in Growth Pro, plus:</h4>
                <ul className="space-y-2 mt-2">
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Fully custom structure and design</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Online booking, membership, or e-commerce systems</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>API integrations and automations</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>CRM or third-party connections</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Admin dashboards and custom portals</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>AI tools (chatbots, automation, or predictive forms)</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Starting at 15 GB storage (expandable)</span></li>
                   <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Dedicated onboarding + success manager</span></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Full infrastructure management and security</span></li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-auto">
                <h4 className="font-bold text-lg">💰 Investment: Starting at $7,500+</h4>
                <p className="text-sm text-muted-foreground mt-4">💼 <span className="font-semibold">Retainer Option:</span> Ongoing optimization & reporting – $200–$500/month</p>
                 <Button className="w-full mt-4" onClick={() => handleRequestInfoClick('Elite Digital Suite')}>Request Info</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
