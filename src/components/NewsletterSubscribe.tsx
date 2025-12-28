import { useState } from "react";
import type { FormEvent } from "react";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag("event", "subscribe_click", {
              location: "homepage",
      });
    }
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const formData = new FormData();
    formData.append("fields[email]", email);
    formData.append("ml-submit", "1");
    formData.append("anticsrf", "true");

    try {
      const response = await fetch(
        "https://assets.mailerlite.com/jsonp/2002605/forms/174853249649608582/subscribe",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success === true) {
        setIsSuccess(true);
        setEmail("");
      } else {
        let errorMessage = "";
        if (data.errors?.fields?.email) {
          errorMessage = data.errors.fields.email[0] || "An error occurred";
        } else {
          errorMessage = "Subscription failed. Please try again.";
        }
        setError(errorMessage);
        console.error("Subscription error (full):", JSON.stringify(data, null, 2));
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error("Subscription error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mt-20 fade-in" style={{ animationDelay: "0.8s" }}>
      <div className="terminal-box p-8 md:p-12 text-center">
        <h2 className="text-2xl font-mono font-semibold text-foreground mb-3">
          $ subscribe --newsletter
        </h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Get notified when I publish something new. No spam, just quality
          content delivered to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          {!isSuccess ? (
            <div className="w-full">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  name="fields[email]"
                  placeholder="you@email.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-forest text-white font-mono text-sm font-medium rounded-lg hover:bg-forest/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {error && (
                <div className="mt-3 text-red-500 text-sm font-mono max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                  {error}
                </div>
              )}
            </div>
          ) : (
            <div className="w-full">
              <div className="text-center">
                <h3 className="text-xl font-mono font-semibold text-green-500 mb-2">
                  Thank you!
                </h3>
                <p className="text-muted-foreground">
                  You have successfully joined our subscriber list.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;

