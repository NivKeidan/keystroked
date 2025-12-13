/// <reference types="astro/client" />

interface Window {
  gtag?: (
    command: string,
    targetId: string | Date,
    config?: Record<string, any>
  ) => void;
  dataLayer?: any[];
}