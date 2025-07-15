import { cn } from "@/lib/utils";
import { Mountain } from "lucide-react";

export function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <Mountain className="h-8 w-8 text-primary animate-pulse" />
        <span className="text-xl font-semibold text-primary">Loading...</span>
      </div>
    </div>
  );
}
