"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TypewriterProps {
  prefix: string;
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  prefix,
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
  className,
  cursorClassName,
}: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        setCharIndex((prev) => prev + 1);
        return typingSpeed;
      }
      setIsDeleting(true);
      return pauseDuration;
    }

    if (charIndex > 0) {
      setCharIndex((prev) => prev - 1);
      return deletingSpeed;
    }

    setIsDeleting(false);
    setPhraseIndex((prev) => (prev + 1) % phrases.length);
    return typingSpeed;
  }, [charIndex, isDeleting, currentPhrase, phrases.length, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timeout = setTimeout(tick, tick());
    return () => clearTimeout(timeout);
  }, [tick]);

  return (
    <span className={cn("text-gray-400", className)}>
      {prefix}
      <span className="text-auxano-secondary">
        {currentPhrase.slice(0, charIndex)}
      </span>
      <span
        className={cn(
          "inline-block w-[2px] h-[1em] bg-auxano-primary ml-0.5 align-middle animate-pulse",
          cursorClassName
        )}
      />
    </span>
  );
}
