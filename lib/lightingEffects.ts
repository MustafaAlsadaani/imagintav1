type Cleanup = () => void;

const isBrowser = typeof window !== "undefined";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function rafThrottle<T extends (...args: any[]) => void>(callback: T) {
  let frame: number | null = null;
  return (...args: Parameters<T>) => {
    if (frame !== null) window.cancelAnimationFrame(frame);
    frame = window.requestAnimationFrame(() => {
      callback(...args);
      frame = null;
    });
  };
}

export function magneticEffect(element: HTMLElement, intensity = 14): Cleanup {
  if (!isBrowser || !element) return () => undefined;
  if (element.dataset.magneticInitialized === "true") return () => undefined;
  element.dataset.magneticInitialized = "true";

  const handlePointerMove = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);
    const translateX = (offsetX / rect.width) * intensity;
    const translateY = (offsetY / rect.height) * intensity;
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    const maxDistance = Math.sqrt((rect.width / 2) ** 2 + (rect.height / 2) ** 2);
    const strength = clamp(1 - distance / maxDistance, 0, 1);

    element.style.setProperty("--card-magnetic-strength", strength.toString());
    element.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
  };

  const handlePointerLeave = () => {
    element.style.removeProperty("--card-magnetic-strength");
    element.style.transform = "translate3d(0, 0, 0)";
  };

  element.addEventListener("pointermove", handlePointerMove);
  element.addEventListener("pointerleave", handlePointerLeave);

  return () => {
    element.removeEventListener("pointermove", handlePointerMove);
    element.removeEventListener("pointerleave", handlePointerLeave);
    element.style.removeProperty("--card-magnetic-strength");
    element.style.transform = "";
    delete element.dataset.magneticInitialized;
  };
}

export function rippleEffect(element: HTMLElement, color = "rgba(236, 72, 153, 0.35)"): Cleanup {
  if (!isBrowser || !element) return () => undefined;
  if (element.dataset.rippleInitialized === "true") return () => undefined;
  element.dataset.rippleInitialized = "true";

  const handlePointerDown = (event: PointerEvent) => {
    const rect = element.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "clickable-glow__ripple";
    ripple.style.left = `${event.clientX - rect.left}px`;
    ripple.style.top = `${event.clientY - rect.top}px`;
    ripple.style.background = `radial-gradient(circle, ${color}, rgba(236, 72, 153, 0))`;
    element.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 1500);
  };

  element.addEventListener("pointerdown", handlePointerDown);

  return () => {
    element.removeEventListener("pointerdown", handlePointerDown);
    delete element.dataset.rippleInitialized;
  };
}

export interface GlowOnScrollOptions {
  selectors?: string[];
  threshold?: number;
}

export function addGlowOnScroll(options: GlowOnScrollOptions = {}): Cleanup {
  if (!isBrowser) return () => undefined;
  const selectors = options.selectors ?? [
    ".section-glow",
    ".fade-in-glow",
    ".slide-up-glow",
    ".scale-in-glow",
  ];
  const elements = selectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)));
  if (!elements.length) return () => undefined;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (target.classList.contains("section-glow")) {
          target.classList.toggle("is-active", entry.isIntersecting);
        }
        if (target.classList.contains("fade-in-glow") || target.classList.contains("slide-up-glow") || target.classList.contains("scale-in-glow")) {
          target.classList.toggle("is-visible", entry.isIntersecting);
        }
      });
    },
    {
      threshold: options.threshold ?? 0.5,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => {
    observer.disconnect();
  };
}

export function initInteractiveLighting(): Cleanup {
  if (!isBrowser) return () => undefined;

  const cleanups: Cleanup[] = [];
  const cursorTargets = () => Array.from(document.querySelectorAll<HTMLElement>(".cursor-glow"));
  const interactiveBackgrounds = () => Array.from(document.querySelectorAll<HTMLElement>(".interactive-bg"));
  const ctaElements = () => Array.from(document.querySelectorAll<HTMLElement>(".cta-magnetic"));
  const rippleTargets = () => Array.from(document.querySelectorAll<HTMLElement>(".clickable-glow"));
  const magneticCards = () => Array.from(document.querySelectorAll<HTMLElement>(".card-magnetic"));

  const updatePositions = rafThrottle((event: PointerEvent) => {
    const { clientX, clientY } = event;

    cursorTargets().forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const xRatio = clamp((clientX - rect.left) / rect.width, 0, 1);
      const yRatio = clamp((clientY - rect.top) / rect.height, 0, 1);
      element.style.setProperty("--cursor-glow-x", `${xRatio * 100}%`);
      element.style.setProperty("--cursor-glow-y", `${yRatio * 100}%`);
    });

    interactiveBackgrounds().forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const xRatio = clamp((clientX - rect.left) / rect.width, 0, 1);
      const yRatio = clamp((clientY - rect.top) / rect.height, 0, 1);
      section.style.setProperty("--bg-x", `${xRatio * 100}%`);
      section.style.setProperty("--bg-y", `${yRatio * 100}%`);
    });

    ctaElements().forEach((button) => {
      const rect = button.getBoundingClientRect();
      const offsetX = clientX - (rect.left + rect.width / 2);
      const offsetY = clientY - (rect.top + rect.height / 2);
      const dampener = Math.max(rect.width, rect.height);
      button.style.setProperty("--cta-translate-x", `${(offsetX / dampener) * 12}px`);
      button.style.setProperty("--cta-translate-y", `${(offsetY / dampener) * 12}px`);
    });
  });

  document.addEventListener("pointermove", updatePositions);

  cleanups.push(() => {
    document.removeEventListener("pointermove", updatePositions);
  });

  magneticCards().forEach((card) => {
    cleanups.push(magneticEffect(card));
  });

  rippleTargets().forEach((element) => {
    cleanups.push(rippleEffect(element));
  });

  const resetCTA = (button: HTMLElement) => {
    button.style.setProperty("--cta-translate-x", "0px");
    button.style.setProperty("--cta-translate-y", "0px");
  };

  ctaElements().forEach((button) => {
    const handleLeave = () => resetCTA(button);
    button.addEventListener("pointerleave", handleLeave);
    cleanups.push(() => button.removeEventListener("pointerleave", handleLeave));
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}
