import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-fade-in">
      <Card className="bg-card border-border p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-lg font-bold text-foreground">🍪 Cookies</h3>
          <button
            onClick={declineCookies}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com nossa{" "}
          <a href="/lgpd" className="text-primary hover:underline">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex gap-2">
          <Button
            onClick={acceptCookies}
            className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            Aceitar
          </Button>
          <Button
            onClick={declineCookies}
            variant="outline"
            className="flex-1"
          >
            Recusar
          </Button>
        </div>
      </Card>
    </div>
  );
};
