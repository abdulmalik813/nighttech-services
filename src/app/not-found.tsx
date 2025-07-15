
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-background text-center px-4 py-16">
        <div className="max-w-md w-full">
          <div className="flex justify-center">
            <TriangleAlert className="h-20 w-20 text-destructive animate-pulse" />
          </div>
          <h1 className="mt-8 text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">
            404 - Page Not Found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Oops! The page you are looking for does not exist. It might have been moved, deleted, or you may have typed the address incorrectly.
          </p>
          <Button asChild className="mt-10 px-8 py-6 text-lg">
            <Link href="/">Go Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
