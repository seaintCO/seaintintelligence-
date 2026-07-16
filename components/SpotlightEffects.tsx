"use client";

import { useEffect } from "react";

export default function SpotlightEffects() {
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const button = target.closest<HTMLElement>(".btn-spotlight");

      if (!button) {
        return;
      }

      const rect = button.getBoundingClientRect();

      button.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
      button.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
    };

    const handlePointerLeave = (event: PointerEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const button = target.closest<HTMLElement>(".btn-spotlight");

      if (!button) {
        return;
      }

      button.style.removeProperty("--spotlight-x");
      button.style.removeProperty("--spotlight-y");
    };

    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    document.addEventListener("pointerout", handlePointerLeave, {
      passive: true,
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerout", handlePointerLeave);
    };
  }, []);

  return null;
}

