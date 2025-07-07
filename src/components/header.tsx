import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Mountain } from 'lucide-react';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-card/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="#" className="flex items-center justify-center group" prefetch={false}>
        <Mountain className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
        <span className="ml-2 text-lg font-semibold text-primary">NightTech Services</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Button asChild variant="ghost">
          <Link href="#services">Services</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link href="#about">About</Link>
        </Button>
        <Button asChild>
          <Link href="#contact">Contact Us</Link>
        </Button>
      </nav>
    </header>
  );
}
