import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Server, Code, ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Elevate Your Business with NightTech
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We provide professional, cutting-edge technology services to drive your success. From web development to robust cybersecurity, we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <a href="#services">Our Services</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#contact">Get in Touch</a>
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Abstract technology graphic"
                data-ai-hint="technology abstract"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What We Offer</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our range of expert services designed to meet your business needs and propel you into the future.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center">
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
              <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center">
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
              <Card className="hover:shadow-lg hover:scale-105 transition-transform duration-300 text-center">
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

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4 text-center lg:text-left">
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
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Contact Us</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach us through our contact details.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl grid md:grid-cols-2 gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-xl font-bold text-center md:text-left">Get in Touch Directly</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-primary text-primary-foreground rounded-full p-3 group-hover:bg-accent transition-colors">
                       <Phone className="h-5 w-5" />
                    </div>
                    <a href="tel:+1234567890" className="hover:text-accent transition-colors">+1 (234) 567-890</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-primary text-primary-foreground rounded-full p-3 group-hover:bg-accent transition-colors">
                       <Mail className="h-5 w-5" />
                    </div>
                    <a href="mailto:contact@nighttech.dev" className="hover:text-accent transition-colors">contact@nighttech.dev</a>
                  </div>
                   <div className="flex items-start gap-4 group">
                     <div className="bg-primary text-primary-foreground rounded-full p-3 group-hover:bg-accent transition-colors">
                       <MapPin className="h-5 w-5" />
                     </div>
                    <span className="text-muted-foreground">123 Tech Street, Silicon Valley, CA 94000</span>
                  </div>
                </div>
              </div>
              <Card>
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
