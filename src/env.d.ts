/// <reference types="astro/client" />

interface Window {
  dataLayer: Record<string, any>[];
  gtag?: (...args: any[]) => void;
}