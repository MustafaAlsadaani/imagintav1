"use client";

import { useEffect } from "react";
import { addGlowOnScroll, initInteractiveLighting } from "@/lib/lightingEffects";

export default function LightingProvider() {
  useEffect(() => {
    const cleanupLighting = initInteractiveLighting();
    const cleanupGlow = addGlowOnScroll();
    return () => {
      cleanupGlow();
      cleanupLighting();
    };
  }, []);

  return null;
}
