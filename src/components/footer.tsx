export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t bg-card">
      <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} NightTech Services. All rights reserved.</p>
    </footer>
  );
}
