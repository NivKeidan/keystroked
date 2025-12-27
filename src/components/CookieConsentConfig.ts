import type { CookieConsentConfig } from 'vanilla-cookieconsent';
// Enable dark mode
document.documentElement.classList.add('cc--darkmode');

export const config: CookieConsentConfig = {
  guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: true
        }
    },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
      services: {
        ga4: {
          label: '[Google Analytics 4](https://marketingplatform.google.com/about/analytics/terms/us/)',
          onAccept: () => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag("consent", "update", {
                ad_storage: "granted",
                ad_user_data: "granted",
                ad_personalization: "granted",
                analytics_storage: "granted",
              });
            }
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description:
            'This website uses cookies to improve your experience. By clicking "Accept all", you agree to the use of cookies.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'This website uses cookies to improve your experience. By clicking "Accept all", you agree to the use of cookies.',
            },
            {
              title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'These cookies are essential for the proper functioning of the website and cannot be disabled.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics Cookies',
              description:
                 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
              linkedCategory: 'analytics',
            },
          ],
        },
      },
    },
  },
};