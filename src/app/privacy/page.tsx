import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1 bg-background">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-4 text-foreground">
              <h2 className="text-2xl font-bold">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include your name, email address, phone number, and any other information you choose to provide.
              </p>

              <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use the information we collect to provide, maintain, and improve our services. We may also use your information to communicate with you about products, services, offers, and events offered by NightTech Services.
              </p>

              <h2 className="text-2xl font-bold">3. Information Sharing</h2>
              <p className="text-muted-foreground">
                We do not share your personal information with third parties except as described in this Privacy Policy, such as with your consent or for legal reasons.
              </p>

              <h2 className="text-2xl font-bold">4. Your Choices</h2>
              <p className="text-muted-foreground">
                You may update, correct, or delete information about you at any time by contacting us. You may also opt out of receiving promotional communications from us by following the instructions in those communications.
              </p>

              <h2 className="text-2xl font-bold">5. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at contact@nighttech.dev.
              </p>
            </div>

            <Button asChild className="mt-8">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}