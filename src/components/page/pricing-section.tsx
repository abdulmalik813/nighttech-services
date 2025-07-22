
'use client';

import type { RefObject } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Wrench, Bot, Smartphone, Pencil, Building } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


export function PricingSection({ pricingRef, isPricingVisible, handleRequestInfoClick }: { pricingRef: RefObject<HTMLDivElement>, isPricingVisible: boolean, handleRequestInfoClick: (packageName: string) => void }) {
  return (
    <section id="pricing" ref={pricingRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-b from-white to-amber-100 dark:from-slate-800 dark:to-slate-900 flex items-center">
      <div className={cn("container px-4 md:px-6 transition-all duration-300", isPricingVisible ? 'opacity-100' : 'opacity-0')}>
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Flexible Plans for Every Need</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            From brand new websites to AI-powered chatbots, we offer transparent pricing to help you grow.
          </p>
        </div>

        <Tabs defaultValue="new-builds" className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto">
            <TabsTrigger value="new-builds" className="flex-col md:flex-row gap-2"><Building className="h-4 w-4" /> New Builds</TabsTrigger>
            <TabsTrigger value="existing-sites" className="flex-col md:flex-row gap-2"><Pencil className="h-4 w-4" /> Existing Sites</TabsTrigger>
            <TabsTrigger value="tech-services" className="flex-col md:flex-row gap-2"><Wrench className="h-4 w-4" /> Tech Services</TabsTrigger>
            <TabsTrigger value="mobile-apps" className="flex-col md:flex-row gap-2"><Smartphone className="h-4 w-4" /> Mobile Apps</TabsTrigger>
            <TabsTrigger value="ai-solutions" className="flex-col md:flex-row gap-2"><Bot className="h-4 w-4" /> AI Solutions</TabsTrigger>
          </TabsList>

          <TabsContent value="new-builds">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
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
          </TabsContent>
          
          <TabsContent value="existing-sites">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-6xl mx-auto">
                <Card className="flex flex-col border-purple-500/50 border-2">
                    <CardHeader>
                        <CardTitle className="text-purple-600 dark:text-purple-400">Website Refresh</CardTitle>
                        <p className="text-muted-foreground pt-2">Modernize your current site's design and functionality.</p>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <ul className="space-y-2 mt-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Visual design overhaul</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Mobile responsiveness improvements</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Content updates and feature additions</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-auto">
                        <h4 className="font-bold text-lg">💰 Investment: Starting at $750</h4>
                        <Button className="w-full mt-4" onClick={() => handleRequestInfoClick('Website Refresh')}>Request Quote</Button>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col border-green-500/50 border-2">
                    <CardHeader>
                        <CardTitle className="text-green-600 dark:text-green-400">SEO Tune-Up</CardTitle>
                        <p className="text-muted-foreground pt-2">Improve your search engine ranking and get found by more customers.</p>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                         <ul className="space-y-2 mt-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>On-page SEO audit and optimization</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Keyword research and implementation</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Technical SEO fixes (site speed, mobile-friendliness)</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-auto">
                        <h4 className="font-bold text-lg">💰 Investment: Starting at $500</h4>
                        <Button className="w-full mt-4" onClick={() => handleRequestInfoClick('SEO Tune-Up')}>Request Quote</Button>
                    </CardFooter>
                </Card>
                <Card className="flex flex-col border-pink-500/50 border-2">
                    <CardHeader>
                        <CardTitle className="text-pink-600 dark:text-pink-400">Marketing & Email</CardTitle>
                        <p className="text-muted-foreground pt-2">Engage your audience with targeted campaigns and beautiful designs.</p>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <ul className="space-y-2 mt-2">
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Email campaign setup and automation</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Custom, responsive email template design</span></li>
                            <li className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" /><span>Social media marketing integration</span></li>
                        </ul>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start bg-muted/50 p-6 mt-auto">
                        <h4 className="font-bold text-lg">💰 Investment: Project-based</h4>
                        <Button className="w-full mt-4" onClick={() => handleRequestInfoClick('Marketing & Email')}>Request Quote</Button>
                    </CardFooter>
                </Card>
            </div>
          </TabsContent>

          <TabsContent value="tech-services">
            <div className="mt-8 flex justify-center">
                <div className="lg:w-1/2 md:w-2/3 w-full">
                    <Card className="flex flex-col border-gray-500/50 border-2">
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
          </TabsContent>

          <TabsContent value="mobile-apps">
            <div className="mt-8 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight">📱 Mobile App Launch Kits</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto mt-2">Bring your business to your customers’ fingertips. Give your customers the convenience of accessing your services anytime, anywhere. Our Mobile App Launch Kits are built using powerful no-code platforms like Glide and Adalo — making custom business apps faster, more affordable, and tailored to your goals.</p>
                  <p className="font-semibold mt-2">Ideal for: Gyms, salons, wellness providers, event organizers, trades, small e-commerce shops</p>
              </div>
              <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/3">Plan</TableHead>
                            <TableHead>Features</TableHead>
                            <TableHead className="text-right w-1/4">Price (CAD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Starter App</TableCell>
                            <TableCell>1 core feature (e.g. booking or loyalty), branded design, mobile-ready</TableCell>
                            <TableCell className="text-right">$1,800</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Pro App</TableCell>
                            <TableCell>Multi-feature (e.g. booking + loyalty + notifications), secure login, branding</TableCell>
                            <TableCell className="text-right">$3,800</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Premium App</TableCell>
                            <TableCell>Advanced functionality, admin dashboard, API integrations, analytics</TableCell>
                            <TableCell className="text-right">$6,800+</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <CardContent className="pt-6">
                  <h4 className="font-semibold">Add-ons:</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>App store publishing (iOS/Android): $300</li>
                    <li>Monthly maintenance & hosting: from $75/month</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="text-center mt-6">
                <p className="font-semibold text-lg">Your business. In their pocket. No code. No headaches.</p>
                <Button className="mt-4" onClick={() => handleRequestInfoClick('Mobile App')}>Get a Mobile App</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-solutions">
             <div className="mt-8 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold tracking-tight">🤖 Custom AI Chatbots for Sales & Support</h3>
                  <p className="text-muted-foreground max-w-3xl mx-auto mt-2">Turn your website into a 24/7 sales & customer service machine. Modern customers expect instant answers — and your team can’t always be online. With our Custom AI Chatbots, you can automate FAQ responses, capture leads, book appointments, and even assist in multiple languages.</p>
                   <p className="font-semibold mt-2">Ideal for: Clinics, realtors, law firms, trades, service providers, online stores</p>
              </div>
               <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-1/3">Plan</TableHead>
                            <TableHead>Features</TableHead>
                            <TableHead className="text-right w-1/4">Price (CAD)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">Starter Bot</TableCell>
                            <TableCell>Simple rule-based chatbot (FAQs, contact info), embedded on your website</TableCell>
                            <TableCell className="text-right">$600</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Smart AI Bot</TableCell>
                            <TableCell>GPT-powered chatbot trained on your content (PDFs, website, etc.)</TableCell>
                            <TableCell className="text-right">$1,500</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium">Advanced Bot</TableCell>
                            <TableCell>Multi-language support, lead capture, booking/CRM integration</TableCell>
                            <TableCell className="text-right">$2,900+</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                 <CardContent className="pt-6">
                  <h4 className="font-semibold">Add-ons:</h4>
                  <ul className="list-disc list-inside text-muted-foreground mt-2">
                    <li>Monthly performance tuning & maintenance: from $65/month</li>
                    <li>WhatsApp or Messenger integration: $350</li>
                  </ul>
                </CardContent>
              </Card>
              <div className="text-center mt-6">
                <p className="font-semibold text-lg">Save time. Impress customers. Capture more leads — automatically.</p>
                <Button className="mt-4" onClick={() => handleRequestInfoClick('AI Chatbot')}>Get an AI Bot</Button>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
}
