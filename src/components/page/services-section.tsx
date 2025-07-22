
'use client';

import { cn } from '@/lib/utils';
import type { RefObject } from 'react';

export function ServicesSection({ servicesRef, isServicesVisible }: { servicesRef: RefObject<HTMLDivElement>, isServicesVisible: boolean }) {
  return (
    <section 
      id="services" 
      ref={servicesRef} 
      className="relative w-full scroll-mt-20 overflow-hidden py-20 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services.png')" }}
          data-ai-hint="technology services"
        />
        <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container px-4 md:px-6">
        <div className={cn("flex flex-col items-center justify-center space-y-4 text-center transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent text-accent-foreground px-3 py-1 text-sm">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary-foreground">What We Offer</h2>
            <p className="max-w-[900px] text-primary-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of expert services designed to meet your business needs and propel you into the future.
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-3xl mx-auto w-full">
          <ul className="space-y-6 text-left text-primary-foreground">
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '100ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>New Websites</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Custom, responsive, and high-performance websites built from scratch to perfectly match your brand.
              </p>
            </li>
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '200ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Website Editing</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Update and enhance your existing website with new features, content, and a modern design refresh.
              </p>
            </li>
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '300ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>SEO Optimization</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Improve your search engine ranking, increase organic traffic, and get discovered by more customers.
              </p>
            </li>
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Marketing Emails</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Engage your audience with targeted, automated email campaigns that drive conversions and build loyalty.
              </p>
            </li>
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '500ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Email Designs</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Beautiful, responsive, and brand-consistent email templates that look great in any inbox.
              </p>
            </li>
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Mobile App Development</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Affordable, custom mobile apps for iOS and Android to engage your customers on the go.
              </p>
            </li>
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '700ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>AI Chatbot Solutions</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Automate customer support and lead generation with custom-trained AI chatbots for your website.
              </p>
            </li>
            <li className={cn("transition-all duration-300", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '800ms' }}>
              <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Tech Services</h3>
              <p className="text-primary-foreground/80 mt-2 ml-6">
                Expert repairs, custom builds, and setup for both computers and printers to keep you running smoothly.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
