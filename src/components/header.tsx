import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Mountain, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header({ activeSection }: { activeSection?: string }) {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-header-footer/80 backdrop-blur-sm fixed w-full top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center group" prefetch={false}>
        <Mountain className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
        <span className="ml-2 text-lg font-semibold text-primary">NightTech Services Inc.</span>
      </Link>
      <nav className="ml-auto hidden md:flex items-center gap-6">
        <Link href="/#services" prefetch={false} className={cn("text-sm font-medium transition-colors hover:text-primary", activeSection === 'services' && 'underline underline-offset-4 text-primary')}>
          Services
        </Link>
        <Link href="/#our-work" prefetch={false} className={cn("text-sm font-medium transition-colors hover:text-primary", activeSection === 'our-work' && 'underline underline-offset-4 text-primary')}>
          Our Work
        </Link>
        <Link href="/#about" prefetch={false} className={cn("text-sm font-medium transition-colors hover:text-primary", activeSection === 'about' && 'underline underline-offset-4 text-primary')}>
          About
        </Link>
        <Link href="/#pricing" prefetch={false} className={cn("text-sm font-medium transition-colors hover:text-primary", activeSection === 'pricing' && 'underline underline-offset-4 text-primary')}>
          Pricing
        </Link>
        <Link href="/#how-to-begin" prefetch={false} className={cn("text-sm font-medium transition-colors hover:text-primary", activeSection === 'how-to-begin' && 'underline underline-offset-4 text-primary')}>
          Process
        </Link>
        <Link href="/#faq" prefetch={false} className={cn("text-sm font-medium transition-colors hover:text-primary", activeSection === 'faq' && 'underline underline-offset-4 text-primary')}>
          FAQ
        </Link>
        <Link href="/#testimonials" prefetch={false} className={cn("text-sm font-medium transition-colors hover:text-primary", activeSection === 'testimonials' && 'underline underline-offset-4 text-primary')}>
          Testimonials
        </Link>
        <Button asChild className="bg-accent text-white hover:bg-accent/90">
          <Link href="/#contact" prefetch={false}>Contact Us</Link>
        </Button>
      </nav>
      <div className="ml-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:max-w-sm bg-header-footer/80 backdrop-blur-sm">
            <SheetHeader>
                <SheetTitle>
                <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                  prefetch={false}
                >
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="">NightTech Services Inc.</span>
                </Link>
              </SheetClose>
                </SheetTitle>
            </SheetHeader>
            <nav className="grid gap-6 text-lg font-medium p-6">
              <SheetClose asChild>
                <Link href="/#services" className={cn("text-muted-foreground hover:text-foreground", activeSection === 'services' && 'text-primary underline underline-offset-4')} prefetch={false}>
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/#our-work" className={cn("text-muted-foreground hover:text-foreground", activeSection === 'our-work' && 'text-primary underline underline-offset-4')} prefetch={false}>
                  Our Work
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/#about" className={cn("text-muted-foreground hover:text-foreground", activeSection === 'about' && 'text-primary underline underline-offset-4')} prefetch={false}>
                  About
                </Link>
              </SheetClose>
               <SheetClose asChild>
                <Link href="/#pricing" className={cn("text-muted-foreground hover:text-foreground", activeSection === 'pricing' && 'text-primary underline underline-offset-4')} prefetch={false}>
                  Pricing
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/#how-to-begin" className={cn("text-muted-foreground hover:text-foreground", activeSection === 'how-to-begin' && 'text-primary underline underline-offset-4')} prefetch={false}>
                  Process
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/#faq" className={cn("text-muted-foreground hover:text-foreground", activeSection === 'faq' && 'text-primary underline underline-offset-4')} prefetch={false}>
                  FAQ
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/#testimonials" className={cn("text-muted-foreground hover:text-foreground", activeSection === 'testimonials' && 'text-primary underline underline-offset-4')} prefetch={false}>
                  Testimonials
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="bg-accent text-white hover:bg-accent/90">
                  <Link href="/#contact" prefetch={false}>Contact Us</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
