"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { GA_TRACKING_ID, pageview } from "@/lib/analytics";

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_TRACKING_ID || GA_TRACKING_ID === "GA-XXXXXX") return;
    const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}
