import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t bg-header-footer text-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} NightTech Services. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link href="/terms" className="text-sm hover:text-primary" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-sm hover:text-primary" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
