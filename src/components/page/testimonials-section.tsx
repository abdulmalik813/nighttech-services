
'use client';

import type { RefObject } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from '@/components/ui/carousel';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

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

interface TestimonialsSectionProps {
  testimonialsRef: RefObject<HTMLDivElement>;
  isTestimonialsVisible: boolean;
  api: CarouselApi | undefined;
  setApi: (api: CarouselApi) => void;
  count: number;
  current: number;
}

export function TestimonialsSection({ testimonialsRef, isTestimonialsVisible, api, setApi, count, current }: TestimonialsSectionProps) {
  return (
    <section id="testimonials" ref={testimonialsRef} className="w-full scroll-mt-20 overflow-hidden py-20 bg-gradient-to-t from-white to-amber-100 dark:from-slate-900 dark:to-slate-800 flex items-center">
      <div className={cn("container px-4 md:px-6 transition-all duration-300", isTestimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12')}>
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
  );
}
