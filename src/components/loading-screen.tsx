import { cn } from "@/lib/utils";
import { Mountain } from "lucide-react";

export function LoadingScreen({ isVisible }: { isVisible: boolean }) {
  const text = "Loading...";

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-header-footer transition-opacity duration-500 animate-subtle-pulse",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <Mountain
          className="h-8 w-8 text-primary animate-bounce"
          style={{ animationDuration: '1s' }}
        />
        <span className="text-xl font-semibold text-primary flex">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="animate-bounce"
              style={{ animationDelay: `${(index + 1) * 75}ms`, animationDuration: '1s' }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
