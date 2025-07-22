
'use client';

import { useRef, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';
import { type CarouselApi } from '@/components/ui/carousel';
import { LoadingScreen } from '@/components/loading-screen';
import Head from 'next/head';

import { HeroSection } from '@/components/page/hero-section';
import { ServicesSection } from '@/components/page/services-section';
import { OurWorkSection } from '@/components/page/our-work-section';
import { AboutSection } from '@/components/page/about-section';
import { PricingSection } from '@/components/page/pricing-section';
import { TechSupportPricingSection } from '@/components/page/tech-support-pricing-section';
import { HowToBeginSection } from '@/components/page/how-to-begin-section';
import { FaqSection } from '@/components/page/faq-section';
import { TestimonialsSection } from '@/components/page/testimonials-section';
import { ContactSection } from '@/components/page/contact-section';

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NightTech Services Inc.",
    "image": "https://www.nighttechservices.com/og-image.png",
    "@id": "https://www.nighttechservices.com",
    "url": "https://www.nighttechservices.com",
    "telephone": "+1-902-629-9691",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 Shady Acres Drive, Unit 4",
      "addressLocality": "Brackley Beach",
      "addressRegion": "PE",
      "postalCode": "C1E 2X4",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.3685,
      "longitude": -63.1957
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://facebook.com/nighttech",
      "https://twitter.com/nighttech"
    ] 
  };

export default function Home() {
  const { toast } = useToast();
  const [formState, setFormState] = useState({ name: '', email: '', message: '', servicePackage: '', promoCode: '' });
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
        setFormState({ name: '', email: '', message: '', servicePackage: '', promoCode: '' });
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
  const techSupportPricingRef = useRef<HTMLDivElement>(null);
  const howToBeginRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const isHeroVisible = useOnScreen(heroRef, 0.2);
  const isServicesVisible = useOnScreen(servicesRef, 0.2);
  const isOurWorkVisible = useOnScreen(ourWorkRef, 0.2);
  const isAboutVisible = useOnScreen(aboutRef, 0.2);
  const isPricingVisible = useOnScreen(pricingRef, 0.2);
  const isTechSupportPricingVisible = useOnScreen(techSupportPricingRef, 0.2);
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
  const techSupportPricingInView = useOnScreen(techSupportPricingRef, 0.5);
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
    } else if (techSupportPricingInView) {
      setActiveSection('tech-support-pricing');
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
  }, [heroInView, servicesInView, ourWorkInView, aboutInView, pricingInView, techSupportPricingInView, howToBeginInView, faqInView, testimonialsInView, contactInView]);

  const handleRequestInfoClick = (packageName: string) => {
    setFormState(prevState => ({ ...prevState, servicePackage: packageName }));
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <LoadingScreen isVisible={!isPageLoaded} />
      <div className={cn("flex flex-col min-h-[100dvh] transition-opacity duration-300", !isPageLoaded ? 'opacity-0' : 'opacity-100')}>
        <Header activeSection={activeSection} />
        <main className="flex-1">
          <HeroSection heroRef={heroRef} isHeroVisible={isHeroVisible} />
          <ServicesSection servicesRef={servicesRef} isServicesVisible={isServicesVisible} />
          <OurWorkSection ourWorkRef={ourWorkRef} isOurWorkVisible={isOurWorkVisible} />
          <AboutSection aboutRef={aboutRef} isAboutVisible={isAboutVisible} />
          <PricingSection pricingRef={pricingRef} isPricingVisible={isPricingVisible} handleRequestInfoClick={handleRequestInfoClick} />
          <TechSupportPricingSection techSupportPricingRef={techSupportPricingRef} isTechSupportPricingVisible={isTechSupportPricingVisible} handleRequestInfoClick={handleRequestInfoClick} />
          <HowToBeginSection howToBeginRef={howToBeginRef} isHowToBeginVisible={isHowToBeginVisible} />
          <FaqSection faqRef={faqRef} isFaqVisible={isFaqVisible} />
          <TestimonialsSection
            testimonialsRef={testimonialsRef}
            isTestimonialsVisible={isTestimonialsVisible}
            api={api}
            setApi={setApi}
            count={count}
            current={current}
          />
          <ContactSection
            contactRef={contactRef}
            isContactVisible={isContactVisible}
            formState={formState}
            setFormState={setFormState}
            handleContactSubmit={handleContactSubmit}
            isLoading={isLoading}
            isCooldown={isCooldown}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}
