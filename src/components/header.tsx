import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetClose, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Mountain, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-card/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="#" className="flex items-center justify-center group" prefetch={false}>
        <Mountain className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
        <span className="ml-2 text-lg font-semibold text-primary">NightTech Services</span>
      </Link>
      <nav className="ml-auto hidden md:flex items-center gap-4 sm:gap-6">
        <Button asChild variant="ghost">
          <Link href="#services" prefetch={false}>Services</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#about" prefetch={false}>About</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#faq" prefetch={false}>FAQ</Link>
        </Button>
        <Button asChild>
          <Link href="#contact" prefetch={false}>Contact Us</Link>
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
          <SheetContent side="right" className="w-[300px] sm:max-w-sm">
            <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
            </SheetHeader>
            <nav className="grid gap-6 text-lg font-medium p-6">
              <SheetClose asChild>
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold mb-4"
                  prefetch={false}
                >
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="">NightTech Services</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#services" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  Services
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#about" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  FAQ
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                  Contact Us
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}