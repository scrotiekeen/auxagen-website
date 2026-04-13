"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    let delay: number;

    if (!isDeleting) {
      if (charIndex < currentPhrase.length) {
        delay = typingSpeed;
      } else {
        delay = pauseDuration;
      }
    } else {
      if (charIndex > 0) {
        delay = deletingSpeed;
      } else {
        delay = typingSpeed;
      }
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPhrase.length) {
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, currentPhrase, phrases.length, typingSpeed, deletingSpeed, pauseDuration]);

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
