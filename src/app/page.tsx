'use client';

import { useRef, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Star, Instagram, Facebook, MousePointerClick, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LoadingScreen } from '@/components/loading-screen';

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Founder of Bloom & Co.',
    quote: 'NightTech Services Inc. transformed our online presence. Our new site is not only beautiful but also incredibly fast. We saw a 40% increase in leads within the first month!',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    name: 'Mike R.',
    role: 'Owner, Apex Fitness',
    quote: 'The team was professional, responsive, and delivered exactly what we needed. The mobile experience is seamless, and our members love it.',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    role: 'Creative Director, Artisan Designs',
    quote: "Working with NightTech was a breeze. They understood our brand and translated it into a stunning, high-performing website that truly represents us.",
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
   {
    name: 'David Chen',
    role: 'CEO, Tech Innovators',
    quote: "The SEO optimization they provided was a game-changer. We're now ranking on the first page for our key terms, and organic traffic has doubled.",
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    name: 'Emily B.',
    role: 'eCommerce Manager, The Daily Grind',
    quote: 'Our sales conversion rate has skyrocketed since launching the new site. The design is clean, the checkout process is smooth, and it just works.',
    avatar: 'https://placehold.co/100x100.png',
    rating: 5,
  }
];

export default function Home() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({ name: '', email: '', message: '', servicePackage: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      const handleLoad = () => setIsPageLoaded(true);
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCooldown) {
      toast({
        title: 'Slow down!',
        description: 'Please wait a moment before sending another message.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. We'll get back to you soon.",
        });
        setFormState({ name: '', email: '', message: '', servicePackage: '' });
      } else {
        const errorData = await response.json();
        toast({
          title: 'Uh oh! Something went wrong.',
          description: errorData.message || 'There was a problem sending your message.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'An unexpected error occurred. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setIsCooldown(true);
      setTimeout(() => setIsCooldown(false), 5000);
    }
  };

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const ourWorkRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const howToBeginRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const isHeroVisible = useOnScreen(heroRef, 0.2);
  const isServicesVisible = useOnScreen(servicesRef, 0.2);
  const isOurWorkVisible = useOnScreen(ourWorkRef, 0.2);
  const isAboutVisible = useOnScreen(aboutRef, 0.2);
  const isPricingVisible = useOnScreen(pricingRef, 0.2);
  const isHowToBeginVisible = useOnScreen(howToBeginRef, 0.2);
  const isFaqVisible = useOnScreen(faqRef, 0.2);
  const isTestimonialsVisible = useOnScreen(testimonialsRef, 0.2);
  const isContactVisible = useOnScreen(contactRef, 0.2);

  const [activeSection, setActiveSection] = useState('hero');
  const heroInView = useOnScreen(heroRef, 0.5);
  const servicesInView = useOnScreen(servicesRef, 0.5);
  const ourWorkInView = useOnScreen(ourWorkRef, 0.5);
  const aboutInView = useOnScreen(aboutRef, 0.5);
  const pricingInView = useOnScreen(pricingRef, 0.5);
  const howToBeginInView = useOnScreen(howToBeginRef, 0.5);
  const faqInView = useOnScreen(faqRef, 0.5);
  const testimonialsInView = useOnScreen(testimonialsRef, 0.5);
  const contactInView = useOnScreen(contactRef, 0.5);

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
 
  useEffect(() => {
    if (!api) {
      return
    }

    const onInit = () => {
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }
    
    onInit()
    api.on('reInit', onInit)
    api.on('select', onSelect)

    return () => {
      api.off('reInit', onInit)
      api.off('select', onSelect)
    }
  }, [api])

  useEffect(() => {
    if (contactInView) {
      setActiveSection('contact');
    } else if (testimonialsInView) {
      setActiveSection('testimonials');
    } else if (faqInView) {
      setActiveSection('faq');
    } else if (howToBeginInView) {
      setActiveSection('how-to-begin');
    } else if (pricingInView) {
      setActiveSection('pricing');
    } else if (aboutInView) {
      setActiveSection('about');
    } else if (ourWorkInView) {
      setActiveSection('our-work');
    } else if (servicesInView) {
      setActiveSection('services');
    } else if (heroInView) {
      setActiveSection('hero');
    }
  }, [heroInView, servicesInView, ourWorkInView, aboutInView, pricingInView, howToBeginInView, faqInView, testimonialsInView, contactInView]);


  return (
    <>
      <LoadingScreen isVisible={!isPageLoaded} />
      <div className={cn("flex flex-col min-h-[100dvh] transition-opacity duration-500", !isPageLoaded ? 'opacity-0' : 'opacity-100')}>
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
                      <span className="bg-accent text-accent-foreground px-2 rounded-md">Stunning</span> Websites. Delivered
                      <span className="block mt-2"><span className="bg-accent text-accent-foreground px-2 rounded-md">Fast.</span></span>
                    </h1>
                    <p className="max-w-[600px] text-primary-foreground md:text-xl">
                      NightTech Services Inc. helps your brand launch online — in days, not weeks.
                    </p>
                    <p className="max-w-[600px] text-primary-foreground md:text-lg">
                      NightTech Services Inc. delivers sleek, <span className="bg-accent text-primary-foreground px-2 rounded-md">high-performing</span> websites with <span className="bg-accent text-primary-foreground px-2 rounded-md">sharp design</span>, mobile optimization, and expert SEO — all completed in record time. Trusted by startups and small businesses across Canada
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row flex-wrap">
                    <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                      <Link href="#how-to-begin">Begin</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-gray-100">
                      <Link href="#services">What We Offer</Link>
                    </Button>
                    <Button asChild size="lg" variant="default">
                      <Link href="#testimonials">See what others say</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
              <div className={cn("flex flex-col items-center justify-center space-y-4 text-center transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
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
                  <li className={cn("transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '200ms' }}>
                    <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>New Websites</h3>
                    <p className="text-primary-foreground/80 mt-2 ml-6">
                      Custom, responsive, and high-performance websites built from scratch to perfectly match your brand.
                    </p>
                  </li>
                  <li className={cn("transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '400ms' }}>
                    <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Website Editing</h3>
                    <p className="text-primary-foreground/80 mt-2 ml-6">
                      Update and enhance your existing website with new features, content, and a modern design refresh.
                    </p>
                  </li>
                  <li className={cn("transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '600ms' }}>
                    <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>SEO Optimization</h3>
                    <p className="text-primary-foreground/80 mt-2 ml-6">
                      Improve your search engine ranking, increase organic traffic, and get discovered by more customers.
                    </p>
                  </li>
                  <li className={cn("transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '800ms' }}>
                    <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Marketing Emails</h3>
                    <p className="text-primary-foreground/80 mt-2 ml-6">
                      Engage your audience with targeted, automated email campaigns that drive conversions and build loyalty.
                    </p>
                  </li>
                  <li className={cn("transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '1000ms' }}>
                    <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Email Designs</h3>
                    <p className="text-primary-foreground/80 mt-2 ml-6">
                      Beautiful, responsive, and brand-consistent email templates that look great in any inbox.
                    </p>
                  </li>
                  <li className={cn("transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '1200ms' }}>
                    <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>Business Solutions</h3>
                    <p className="text-primary-foreground/80 mt-2 ml-6">
                      Custom solutions for your business, like order management systems and other productivity tools.
                    </p>
                  </li>
                  <li className={cn("transition-all duration-500", isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')} style={{ transitionDelay: '1400ms' }}>
                    <h3 className="text-2xl font-bold"><span className="text-primary mr-2">•</span>AI Integration</h3>
                    <p className="text-primary-foreground/80 mt-2 ml-6">
                      Secure and trainable knowledge base for your business.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="our-work" ref={ourWorkRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
            <div className="container px-4 md:px-6">
              <div className={cn("max-w-3xl mx-auto text-center space-y-6 transition-all duration-700", isOurWorkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Work</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Do</h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We’ve built <span className="bg-accent text-primary-foreground px-2 rounded-md">lightning-fast, high-converting</span> websites for businesses across Canada — from service providers and local shops to consultants, creatives, and eCommerce brands.
                </p>
                <div className="text-left">
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Each NightTech Site is:
                  </p>
                  <ul className="text-muted-foreground md:text-xl/relaxed list-none space-y-2">
                    <li>• <span className="bg-accent text-primary-foreground px-2 rounded-md">Custom-tailored</span> to match your brand</li>
                    <li>• Designed for a <span className="bg-accent text-primary-foreground px-2 rounded-md">mobile-first experience</span></li>
                    <li>• <span className="bg-accent text-primary-foreground px-2 rounded-md">SEO-ready</span> to get you found fast</li>
                    <li>• Built to <span className="bg-accent text-primary-foreground px-2 rounded-md">convert visitors into leads or sales</span></li>
                  </ul>
                </div>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  We combine <span className="bg-accent text-primary-foreground px-2 rounded-md">speed with strategy</span>, <span className="bg-accent text-primary-foreground px-2 rounded-md">clean design with real results</span>. Your site doesn’t just look great — it <span className="bg-accent text-primary-foreground px-2 rounded-md">works hard behind the scenes</span> to grow your business.
                </p>
              </div>
            </div>
          </section>

          <section id="about" ref={aboutRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-t from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 flex items-center">
            <div className="container px-4 md:px-6">
              <div className={cn("max-w-3xl mx-auto text-center space-y-6 transition-all duration-700", isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Who We Are</h2>
                <p className="text-2xl font-semibold tracking-tight">
                  <span className="bg-accent text-primary-foreground px-2 rounded-md">Frustrated with slow, outdated websites that don't perform?</span>
                </p>
                <div className="space-y-4 text-muted-foreground md:text-xl/relaxed">
                  <p>
                    <span className="bg-accent text-primary-foreground px-2 rounded-md">You're not alone.</span> Most businesses struggle with poor online presence, but it's not your fault — the digital world moves fast. At NightTech Services Inc., we close the gap between your vision and execution.
                  </p>
                  <p>
                    We build <span className="bg-accent text-primary-foreground px-2 rounded-md">clean, fast, and mobile-optimized websites</span> that look impressive and convert traffic into leads.
                  </p>
                  <p>
                    Whether you're a growing startup or an established brand ready to level up, we bring speed, strategy, and sharp design to every project — including expert SEO that gets you found.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="pricing" ref={pricingRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
            <div className={cn("container px-4 md:px-6 transition-all duration-700", isPricingVisible ? 'opacity-100' : 'opacity-0')}>
              <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Website Development Packages (2025)</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose the package that fits your needs. All packages are designed to deliver high-quality, professional websites.
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                <Card className={cn("flex flex-col border-blue-500/50 border-2 transition-all duration-500", isPricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")}>
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
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Eligible for PEI Web Presence Grant ($1,000 back, up to 50%)</span></li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-6">
                      <h4 className="font-bold text-lg">💰 Investment: $1,800 <span className="text-sm font-normal">(one-time)</span></h4>
                      <p className="font-semibold text-green-600">🎯 After grant reimbursement: Client pays only $900</p>
                      <p className="text-sm text-muted-foreground mt-4">🔧 <span className="font-semibold">Optional Add-On:</span> Ongoing content updates + analytics – $50/month</p>
                  </CardFooter>
                </Card>
                <Card className={cn("flex flex-col border-amber-500/50 border-2 transition-all duration-500", isPricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")} style={{ transitionDelay: '200ms' }}>
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
                        <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Eligible for PEI Web Presence Grant ($2,000 back, up to 50%)</span></li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-6">
                      <h4 className="font-bold text-lg">💰 Investment: $2,400–$5,000</h4>
                      <p className="font-semibold text-green-600">📈 Grant-eligible clients could pay as little as $1,200 out-of-pocket</p>
                      <p className="text-sm text-muted-foreground mt-4">🔧 <span className="font-semibold">Optional Add-On:</span> Monthly SEO/analytics report – $75/month</p>
                  </CardFooter>
                </Card>
                <Card className={cn("flex flex-col border-red-500/50 border-2 transition-all duration-500", isPricingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12")} style={{ transitionDelay: '400ms' }}>
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
                  <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-6">
                      <h4 className="font-bold text-lg">💰 Investment: Starting at $7,500+</h4>
                      <p className="text-sm text-muted-foreground mt-4">💼 <span className="font-semibold">Retainer Option:</span> Ongoing optimization & reporting – $200–$500/month</p>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          
          <section id="how-to-begin" ref={howToBeginRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-t from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 flex items-center">
            <div className={cn("container px-4 md:px-6 transition-all duration-700", isHowToBeginVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">How to Begin</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Process</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here’s how to get started in a way that’s <span className="bg-accent text-white px-2 rounded-md">fast, smart, and safe</span> for both of us:
                  </p>
                </div>
              </div>
              <div className="relative mt-12 w-full max-w-3xl mx-auto">
                <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2" />
                <div className="space-y-12">
                  <div className="relative pl-12">
                    <div className="absolute left-5 top-1 h-4 w-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />
                    <h3 className="font-bold text-xl">1. Fill Out the Form</h3>
                    <p className="text-muted-foreground mt-1">Fill out our <Button asChild variant="link" className="p-0 h-auto bg-accent text-white px-2 rounded-md font-semibold transition-colors hover:bg-accent/90"><Link href="#contact" className="inline-flex items-center gap-1">quick form <MousePointerClick className="h-4 w-4" /></Link></Button> — it helps us understand your goals, brand, and vision.</p>
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
              <p className="text-center mt-8 text-muted-foreground md:text-xl/relaxed">
                  This proven system filters <span className="bg-accent text-white px-2 rounded-md">serious clients</span>, keeps everyone <span className="bg-accent text-white px-2 rounded-md">protected</span>, and helps us focus on what matters — delivering a <span className="bg-accent text-white px-2 rounded-md">beautiful, high-performing website</span> you’ll love.
              </p>
            </div>
          </section>

          <section id="faq" ref={faqRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
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

          <section id="testimonials" ref={testimonialsRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-t from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 flex items-center">
            <div className={cn("container px-4 md:px-6 transition-all duration-700", isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Clients Say</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Real stories from businesses we’ve helped succeed.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-4xl w-full mt-12">
                <Carousel
                  setApi={setApi}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex flex-col items-center text-center aspect-square justify-center p-6">
                              <Avatar className="w-16 h-16 mb-4">
                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person portrait" />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                               <div className="flex items-center justify-center mb-2">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                                ))}
                              </div>
                              <p className="text-lg font-semibold">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                              <p className="text-muted-foreground">"{testimonial.quote}"</p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
                <div className="flex justify-center gap-2 mt-4">
                  {Array.from({ length: count }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        'h-3 w-3 rounded-full transition-colors',
                        current === index ? 'bg-primary' : 'bg-primary/20'
                      )}
                      aria-label={`Go to slide ${index + 1}`}/>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact" ref={contactRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
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
                    <div className="flex items-center gap-4 pt-4">
                      <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                          <Facebook className="h-6 w-6" />
                      </Link>
                      <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                          <Instagram className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </div>
                <Card className={cn("transition-all duration-700", isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}>
                  <CardHeader>
                    <CardTitle>Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={handleContactSubmit}>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input 
                          id="name" 
                          placeholder="Enter your name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          required
                         />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="servicePackage">Service Package (Optional)</Label>
                        <Select
                          value={formState.servicePackage}
                          onValueChange={(value) => setFormState({ ...formState, servicePackage: value })}
                        >
                          <SelectTrigger id="servicePackage">
                            <SelectValue placeholder="Select a package" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Essential Presence">🟦 Essential Presence</SelectItem>
                            <SelectItem value="Growth Pro">🟨 Growth Pro</SelectItem>
                            <SelectItem value="Elite Digital Suite">🟥 Elite Digital Suite</SelectItem>
                            <SelectItem value="Other">Other/Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Enter your message" 
                          className="min-h-[120px]" 
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        disabled={isLoading || isCooldown}
                      >
                        {isLoading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
