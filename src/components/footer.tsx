import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t bg-header-footer text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} NightTech Services Inc.. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 sm:ml-auto sm:gap-6">
          <Link href="/terms" className="text-sm hover:text-primary" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm hover:text-primary" prefetch={false}>
            Privacy Policy
          </Link>
          <div className="flex gap-4">
            <Link href="https://facebook.com/nighttech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
