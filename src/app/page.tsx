'use client';

import { useRef, useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FilePlus, FileEdit, TrendingUp, Mails, Palette, Phone, Mail, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ourWorkRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const howToBeginRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const isHeroVisible = useOnScreen(heroRef, 0.2);
  const isServicesVisible = useOnScreen(servicesRef, 0.2);
  const isOurWorkVisible = useOnScreen(ourWorkRef, 0.2);
  const isAboutVisible = useOnScreen(aboutRef, 0.2);
  const isHowToBeginVisible = useOnScreen(howToBeginRef, 0.2);
  const isFaqVisible = useOnScreen(faqRef, 0.2);
  const isContactVisible = useOnScreen(contactRef, 0.2);

  const [activeSection, setActiveSection] = useState('hero');
  const heroInView = useOnScreen(heroRef, 0.5);
  const servicesInView = useOnScreen(servicesRef, 0.5);
  const ourWorkInView = useOnScreen(ourWorkRef, 0.5);
  const aboutInView = useOnScreen(aboutRef, 0.5);
  const howToBeginInView = useOnScreen(howToBeginRef, 0.5);
  const faqInView = useOnScreen(faqRef, 0.5);
  const contactInView = useOnScreen(contactRef, 0.5);

  useEffect(() => {
    if (contactInView) {
      setActiveSection('contact');
    } else if (faqInView) {
      setActiveSection('faq');
    } else if (howToBeginInView) {
      setActiveSection('how-to-begin');
    } else if (aboutInView) {
      setActiveSection('about');
    } else if (ourWorkInView) {
      setActiveSection('our-work');
    } else if (servicesInView) {
      setActiveSection('services');
    } else if (heroInView) {
      setActiveSection('hero');
    }
  }, [heroInView, servicesInView, ourWorkInView, aboutInView, howToBeginInView, faqInView, contactInView]);


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header activeSection={activeSection} />
      <main className="flex-1">
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
              <div className={cn("flex flex-col justify-center space-y-4 transition-all duration-1000", isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24')}>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary-foreground">
                    <span className="bg-accent text-primary px-2 rounded-md">Stunning</span> Websites. Delivered
                    <span className="block mt-2"><span className="bg-accent text-primary px-2 rounded-md">Fast.</span></span>
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    NightTech Services helps your brand launch online — in days, not weeks.
                  </p>
                  <p className="max-w-[600px] text-primary-foreground md:text-lg">
                    NightTech Services delivers sleek, <span className="bg-accent text-primary px-2 rounded-md">high-performing</span> websites with <span className="bg-accent text-primary px-2 rounded-md">sharp design</span>, mobile optimization, and expert SEO — all completed in record time. Trusted by startups and small businesses across Canada
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="#how-to-begin">Begin</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" ref={servicesRef} className="w-full scroll-mt-20 overflow-hidden py-12 md:py-24 bg-gradient-to-r from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center">
          <div className="container px-4 md:px-6">
            <div className={cn("flex flex-col items-center space-y-4 text-center transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our range of expert services designed to meet your business needs and propel you into the future.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105 bg-transparent border-0", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '200ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <FilePlus className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">New Websites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custom, responsive, and high-performance websites built from scratch to perfectly match your brand.
                  </p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105 bg-transparent border-0", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '400ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <FileEdit className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Website Editing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Update and enhance your existing website with new features, content, and a modern design refresh.
                  </p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105 bg-transparent border-0", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '600ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">SEO Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Improve your search engine ranking, increase organic traffic, and get discovered by more customers.
                  </p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105 bg-transparent border-0", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '800ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <Mails className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Marketing Emails</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Engage your audience with targeted, automated email campaigns that drive conversions and build loyalty.
                  </p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105 bg-transparent border-0", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '1000ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <Palette className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Email Designs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Beautiful, responsive, and brand-consistent email templates that look great in any inbox.
                  </p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105 bg-transparent border-0", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '1200ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Business Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custom solutions for your business, like order management systems and other productivity tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="our-work" ref={ourWorkRef} className="w-full scroll-mt-20 overflow-hidden py-12 md:py-24 bg-gradient-to-l from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 min-h-screen flex items-center">
          <div className="container px-4 md:px-6">
            <div className={cn("max-w-3xl mx-auto text-center space-y-6 transition-all duration-700", isOurWorkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Work</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Do</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                We’ve built <span className="bg-accent text-primary px-2 rounded-md">lightning-fast, high-converting</span> websites for businesses across Canada — from service providers and local shops to consultants, creatives, and eCommerce brands.
              </p>
              <div className="text-left">
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Each NightTech Site is:
                </p>
                <ul className="text-muted-foreground md:text-xl/relaxed list-none space-y-2">
                  <li>• <span className="bg-accent text-primary px-2 rounded-md">Custom-tailored</span> to match your brand</li>
                  <li>• Designed for a <span className="bg-accent text-primary px-2 rounded-md">mobile-first experience</span></li>
                  <li>• <span className="bg-accent text-primary px-2 rounded-md">SEO-ready</span> to get you found fast</li>
                  <li>• Built to <span className="bg-accent text-primary px-2 rounded-md">convert visitors into leads or sales</span></li>
                </ul>
              </div>
              <p className="text-muted-foreground md:text-xl/relaxed">
                We combine <span className="bg-accent text-primary px-2 rounded-md">speed with strategy</span>, <span className="bg-accent text-primary px-2 rounded-md">clean design with real results</span>. Your site doesn’t just look great — it <span className="bg-accent text-primary px-2 rounded-md">works hard behind the scenes</span> to grow your business.
              </p>
            </div>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="w-full scroll-mt-20 overflow-hidden py-12 md:py-24 bg-gradient-to-r from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center">
          <div className="container px-4 md:px-6">
            <div className={cn("max-w-3xl mx-auto text-center space-y-6 transition-all duration-700", isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Who We Are</h2>
              <p className="text-2xl font-semibold tracking-tight">
                <span className="bg-accent text-primary px-2 rounded-md">Frustrated with slow, outdated websites that don't perform?</span>
              </p>
              <div className="space-y-4 text-muted-foreground md:text-xl/relaxed">
                <p>
                  <span className="bg-accent text-primary px-2 rounded-md">You're not alone.</span> Most businesses struggle with poor online presence, but it's not your fault — the digital world moves fast. At NightTech Services, we close the gap between your vision and execution.
                </p>
                <p>
                  We build <span className="bg-accent text-primary px-2 rounded-md">clean, fast, and mobile-optimized websites</span> that look impressive and convert traffic into leads.
                </p>
                <p>
                  Whether you're a growing startup or an established brand ready to level up, we bring speed, strategy, and sharp design to every project — including expert SEO that gets you found.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="how-to-begin" ref={howToBeginRef} className="w-full scroll-mt-20 overflow-hidden py-12 md:py-24 bg-gradient-to-l from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 min-h-screen flex items-center">
          <div className={cn("container px-4 md:px-6 transition-all duration-700", isHowToBeginVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How to Begin</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here’s how to get started in a way that’s <span className="bg-accent text-primary px-2 rounded-md">fast, smart, and safe</span> for both of us:
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl w-full mt-12">
              <ol className="list-decimal list-inside space-y-4 text-muted-foreground md:text-lg text-left">
                <li>Fill out our <Button asChild variant="link" className="p-0 h-auto bg-accent text-primary px-2 rounded-md font-semibold transition-colors hover:bg-accent/90"><Link href="#contact">quick form</Link></Button> — it helps us understand your goals, brand, and vision.</li>
                <li>We’ll send you a clear proposal with timeline, pricing, and sample direction.</li>
                <li>Approve the plan and secure your project with a simple 50% deposit.</li>
                <li>We get to work. You’ll see results as low as 48 hours.</li>
                <li>When you’re 100% satisfied, pay the final 50% and we launch your live website.</li>
              </ol>
              <p className="text-center mt-8 text-muted-foreground md:text-xl/relaxed">
                This proven system filters <span className="bg-accent text-primary px-2 rounded-md">serious clients</span>, keeps everyone <span className="bg-accent text-primary px-2 rounded-md">protected</span>, and helps us focus on what matters — delivering a <span className="bg-accent text-primary px-2 rounded-md">beautiful, high-performing website</span> you’ll love.
              </p>
            </div>
          </div>
        </section>

        <section id="faq" ref={faqRef} className="w-full scroll-mt-20 overflow-hidden py-12 md:py-24 bg-gradient-to-r from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 min-h-screen flex items-center">
          <div className={cn("container px-4 md:px-6 transition-all duration-700", isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
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

        <section id="contact" ref={contactRef} className="w-full scroll-mt-20 overflow-hidden py-12 md:py-24 bg-gradient-to-l from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 min-h-screen flex items-center">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
            <div className={cn("space-y-2 text-center transition-all duration-500", isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Need more information?</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach us through our contact details.
              </p>
            </div>
            <div className="mx-auto w-full max-w-5xl grid md:grid-cols-2 gap-12">
              <div className={cn("flex flex-col justify-center space-y-6 transition-all duration-700", isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12')}>
                <h3 className="text-xl font-bold text-center md:text-left">Get in Touch Directly</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent text-accent-foreground rounded-full p-3 group-hover:bg-primary transition-colors">
                       <Phone className="h-5 w-5" />
                    </div>
                    <a href="tel:+19026299691" className="hover:text-accent transition-colors">(902) 629-9691</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent text-accent-foreground rounded-full p-3 group-hover:bg-primary transition-colors">
                       <Mail className="h-5 w-5" />
                    </div>
                    <a href="mailto:info@nighttechservices.com" className="hover:text-accent transition-colors">info@nighttechservices.com</a>
                  </div>
                   <div className="flex items-start gap-4 group">
                     <div className="bg-accent text-accent-foreground rounded-full p-3 group-hover:bg-primary transition-colors">
                       <MapPin className="h-5 w-5" />
                     </div>
                    <span className="text-muted-foreground">30 Shady Acres Drive, Unit 4, Brackley Beach, PEI C1E 2X4 Canada</span>
                  </div>
                </div>
              </div>
              <Card className={cn("transition-all duration-700", isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Enter your message" className="min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
