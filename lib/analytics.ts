declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "GA-XXXXXX";

export const pageview = (url: string): void => {
  if (!GA_TRACKING_ID || GA_TRACKING_ID === "GA-XXXXXX") return;
  window.gtag?.("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

type GAEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export const event = ({ action, category, label, value }: GAEvent): void => {
  if (!GA_TRACKING_ID || GA_TRACKING_ID === "GA-XXXXXX") return;
  window.gtag?.("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

// Configure actual GA4 tracking ID in production before deployment.

