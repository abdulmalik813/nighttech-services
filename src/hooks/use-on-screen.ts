'use client';

import { type RefObject, useEffect, useMemo, useState } from 'react';

export function useOnScreen(ref: RefObject<Element>, threshold = 0.2) {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) {
      return null;
    }
    return new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );
  }, [threshold]);

  useEffect(() => {
    if (!observer) {
      setIntersecting(true);
      return;
    }

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, observer]);

  return isIntersecting;
}
