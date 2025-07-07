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
import { Server, Code, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const isHeroVisible = useOnScreen(heroRef, 0.2);
  const isServicesVisible = useOnScreen(servicesRef, 0.2);
  const isAboutVisible = useOnScreen(aboutRef, 0.2);
  const isFaqVisible = useOnScreen(faqRef, 0.2);
  const isContactVisible = useOnScreen(contactRef, 0.2);

  const [activeSection, setActiveSection] = useState('hero');
  const heroInView = useOnScreen(heroRef, 0.5);
  const servicesInView = useOnScreen(servicesRef, 0.5);
  const aboutInView = useOnScreen(aboutRef, 0.5);
  const faqInView = useOnScreen(faqRef, 0.5);
  const contactInView = useOnScreen(contactRef, 0.5);

  useEffect(() => {
    if (contactInView) {
      setActiveSection('contact');
    } else if (faqInView) {
      setActiveSection('faq');
    } else if (aboutInView) {
      setActiveSection('about');
    } else if (servicesInView) {
      setActiveSection('services');
    } else if (heroInView) {
      setActiveSection('hero');
    }
  }, [heroInView, servicesInView, aboutInView, faqInView, contactInView]);


  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header activeSection={activeSection} />
      <main className="flex-1">
        <section
          ref={heroRef}
          id="hero"
          className="relative w-full flex items-center overflow-hidden scroll-mt-32"
          style={{
            minHeight: 'calc(100vh - 4rem)',
            backgroundImage: "url('https://placehold.co/1920x1080.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          data-ai-hint="technology abstract"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container px-4 md:px-6 py-12 md:py-24">
            <div className="max-w-2xl">
              <div className={cn("flex flex-col justify-center space-y-4 transition-all duration-1000", isHeroVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24')}>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-white">
                    Elevate Your Business with NightTech
                  </h1>
                  <p className="max-w-[600px] text-gray-200 md:text-xl">
                    We provide professional, cutting-edge technology services to drive your success. From web development to robust cybersecurity, we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <a href="#services">Our Services</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                    <a href="#contact">Get in Touch</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" ref={servicesRef} className="w-full scroll-mt-32 overflow-hidden" style={{minHeight: 'calc(100vh - 4rem)'}}>
          <div className="container px-4 md:px-6 py-12 md:py-24">
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
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '200ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <Code className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Custom, responsive, and high-performance websites and applications tailored to your brand and business goals.
                  </p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '400ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <Server className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Cloud Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Scalable and secure cloud infrastructure setup and management to ensure your services are always available and performant.
                  </p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-all duration-500 hover:shadow-lg hover:scale-105", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '600ms' }}>
                <CardHeader className="items-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-4 inline-flex">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4">Cybersecurity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Comprehensive security audits, threat monitoring, and protection strategies to safeguard your digital assets.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" ref={aboutRef} className="w-full bg-card scroll-mt-32 overflow-hidden" style={{minHeight: 'calc(100vh - 4rem)'}}>
          <div className="container grid items-center gap-6 px-4 py-12 md:py-24 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className={cn("space-y-4 text-center lg:text-left transition-all duration-700", isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12')}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">About NightTech</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed lg:mx-0">
                Our mission is to empower businesses with reliable and innovative technology. We believe in building partnerships based on trust, quality, and a shared vision for success. Our values of integrity, excellence, and dedication guide everything we do.
              </p>
            </div>
            <Image
              src="https://placehold.co/550x310.png"
              width="550"
              height="310"
              alt="Team collaborating in an office"
              data-ai-hint="team collaboration"
              className={cn("mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-all duration-700", isAboutVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}
            />
          </div>
        </section>

        <section id="faq" ref={faqRef} className="w-full scroll-mt-32 overflow-hidden" style={{minHeight: 'calc(100vh - 4rem)'}}>
          <div className={cn("container px-4 md:px-6 py-12 md:py-24 transition-all duration-700", isFaqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
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
                  <AccordionTrigger>What kind of technologies do you specialize in?</AccordionTrigger>
                  <AccordionContent>
                    We specialize in modern web technologies including React, Next.js, and Node.js for backend services. For cloud infrastructure, we are experts in Google Cloud and AWS. Our cybersecurity services cover a wide range of tools and best practices.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                  <AccordionContent>
                    The project timeline varies greatly depending on the scope and complexity. A simple marketing website might take 4-6 weeks, while a complex web application could take several months. We provide a detailed timeline after our initial discovery phase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do you handle project communication and updates?</AccordionTrigger>
                  <AccordionContent>
                    We believe in transparent and frequent communication. We use tools like Slack for daily check-ins and schedule weekly video calls for progress reports and demos. You'll always be in the loop.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Do you offer support after the project is launched?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer various support and maintenance packages to ensure your application remains secure, updated, and performant after launch. We can tailor a support plan that fits your needs.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" ref={contactRef} className="w-full bg-card scroll-mt-32 overflow-hidden" style={{minHeight: 'calc(100vh - 4rem)'}}>
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 py-12 md:py-24">
            <div className={cn("space-y-2 text-center transition-all duration-500", isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Contact Us</h2>
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
                    <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent text-accent-foreground rounded-full p-3 group-hover:bg-primary transition-colors">
                       <Mail className="h-5 w-5" />
                    </div>
                    <a href="mailto:contact@nighttech.dev" className="hover:text-accent transition-colors">contact@nighttech.dev</a>
                  </div>
                   <div className="flex items-start gap-4 group">
                     <div className="bg-accent text-accent-foreground rounded-full p-3 group-hover:bg-primary transition-colors">
                       <MapPin className="h-5 w-5" />
                     </div>
                    <span className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94000</span>
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
                    <Button type="submit" className="w-full">Send Message</Button>
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
