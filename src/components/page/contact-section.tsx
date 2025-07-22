
'use client';

import type { RefObject } from 'react';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactSectionProps {
  contactRef: RefObject<HTMLDivElement>;
  isContactVisible: boolean;
  formState: { name: string; email: string; message: string; servicePackage: string; promoCode: string; };
  setFormState: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string; servicePackage: string; promoCode: string; }>>;
  handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  isCooldown: boolean;
}

export function ContactSection({ contactRef, isContactVisible, formState, setFormState, handleContactSubmit, isLoading, isCooldown }: ContactSectionProps) {
  return (
    <section id="contact" ref={contactRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
      <div className="container grid items-center justify-center gap-8 px-4 md:px-6">
        <div className={cn("space-y-2 text-center transition-all duration-300", isContactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Contact Us</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">Request More Information</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you. Fill out the form below or reach us through our contact details.
          </p>
        </div>
        <div className="mx-auto w-full max-w-5xl grid md:grid-cols-2 gap-12">
          <div className={cn("flex flex-col justify-center space-y-6 transition-all duration-300", isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12')}>
            <h3 className="text-xl font-bold text-center md:text-left">Get in Touch Directly</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Support</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent text-white rounded-full p-3 group-hover:bg-primary transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <a href="tel:+19026299691" className="hover:text-accent transition-colors">(902) 629-9691</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent text-white rounded-full p-3 group-hover:bg-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <a href="mailto:info@nighttechservices.com" className="hover:text-accent transition-colors">info@nighttechservices.com</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Sales & Consultation</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent text-white rounded-full p-3 group-hover:bg-primary transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <a href="tel:+17823777934" className="hover:text-accent transition-colors">(782) 377-7934</a>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-accent text-white rounded-full p-3 group-hover:bg-primary transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <a href="mailto:marketing@nighttechservices.com" className="hover:text-accent transition-colors">marketing@nighttechservices.com</a>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Address</h4>
                <div className="flex items-start gap-4 group">
                  <div className="bg-accent text-white rounded-full p-3 group-hover:bg-primary transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-muted-foreground">30 Shady Acres Drive, Unit 4, Brackley Beach, PEI C1E 2X4 Canada</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <Link href="https://facebook.com/nighttech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <Card className={cn("transition-all duration-300", isContactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12')}>
            <CardHeader>
              <CardTitle>Request More Information</CardTitle>
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
                      <SelectItem value="Existing Site - Website Refresh">Existing Site - Website Refresh</SelectItem>
                      <SelectItem value="Existing Site - SEO Tune-Up">Existing Site - SEO Tune-Up</SelectItem>
                      <SelectItem value="Existing Site - Marketing & Email">Existing Site - Marketing & Email</SelectItem>
                      <SelectItem value="Technical Support">🔧 Technical Support</SelectItem>
                      <SelectItem value="Mobile App - Starter">Mobile App - Starter</SelectItem>
                      <SelectItem value="Mobile App - Pro">Mobile App - Pro</SelectItem>
                      <SelectItem value="Mobile App - Premium">Mobile App - Premium</SelectItem>
                      <SelectItem value="AI Bot - Starter">AI Bot - Starter</SelectItem>
                      <SelectItem value="AI Bot - Smart">AI Bot - Smart</SelectItem>
                      <SelectItem value="AI Bot - Advanced">AI Bot - Advanced</SelectItem>
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
                 <div className="space-y-2">
                  <Label htmlFor="promoCode">Promotion Code (Optional)</Label>
                  <Input 
                    id="promoCode" 
                    placeholder="Enter promotion code"
                    value={formState.promoCode}
                    onChange={(e) => setFormState({ ...formState, promoCode: e.target.value })}
                   />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent text-white hover:bg-accent/90"
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
  );
}
