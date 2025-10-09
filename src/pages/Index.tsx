import { Instagram, Music2, Youtube } from "lucide-react";
import { SocialPlatformCard } from "@/components/SocialPlatformCard";
import { Button } from "@/components/ui/button";
import { CookieConsent } from "@/components/CookieConsent";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import rocketIcon from "@/assets/rocket.png";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Starry background effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(197, 218, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(197, 218, 255, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(197, 218, 255, 0.05) 0%, transparent 50%)`
        }}></div>

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={rocketIcon} 
              alt="Rocket" 
              className="w-24 h-24 md:w-32 md:h-32 animate-scale-in drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
          ​I​m​р​u​l​ѕ​і​о​n​е​ ​ѕ​u​а​ ​р​r​е​ѕ​е​n​ç​а​ ​n​о​ ​d​і​g​і​t​а​l{" "}
            <span className="text-primary italic">No Digital!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground mb-2 max-w-3xl mx-auto">
            Somos a escolha preferida dos clientes por
          </p>
          <p className="text-lg md:text-xl text-foreground mb-12 max-w-3xl mx-auto">
            nossa excelência, custo-benefício e <span className="italic">Suporte</span>.
          </p>

          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Escolha a melhor opção
            </h2>
            <p className="text-muted-foreground">
              Encontre o serviço certo para você e comece agora.
            </p>
          </div>

          {/* Social Platform Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <SocialPlatformCard
              icon={Instagram}
              name="Instagram"
              url="https://impulsegram.shop/"
              customIcon={
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              }
            />
            
            <SocialPlatformCard
              icon={Music2}
              name="TikTok"
              url="https://impulsegram.shop/"
              customIcon={
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center shadow-2xl shadow-black/50 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-pink-500/20 to-purple-500/20 animate-pulse"></div>
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white drop-shadow-lg relative z-10" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
              }
            />

            <SocialPlatformCard
              icon={Youtube}
              name="YouTube"
              url="https://impulsegram.shop/"
              customIcon={
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-2xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-110">
                  <svg viewBox="0 0 24 24" className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
              }
            />

            <div className="md:col-start-1 lg:col-start-2">
              <SocialPlatformCard
                icon={() => null}
                name="Kwai"
                url="https://impulsegram.shop/"
                customIcon={
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6l5.25 3.15-.75 1.23L11 13V7z"/>
                    </svg>
                  </div>
                }
              />
            </div>

            <div className="md:col-start-2 lg:col-start-3">
              <SocialPlatformCard
                icon={() => null}
                name="Facebook"
                url="https://impulsegram.shop/"
                customIcon={
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-110">
                    <svg viewBox="0 0 24 24" className="w-12 h-12 text-white drop-shadow-lg" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                }
              />
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 mb-8"
          >
            <a href="http://impulsegram.shop/" rel="noopener noreferrer">COMEÇAR AGORA</a>
          </Button>

          <p className="text-foreground text-sm md:text-base max-w-2xl mx-auto">
          ​Ѕ​е​r​v​і​ç​о​ѕ​ ​d​е​ ​А​l​t​а​ ​Q​u​а​l​і​d​а​d​е e entrega rápida garantidos
          </p>
        </div>
      </div>
    </div>
      
    <Footer />
    <CookieConsent />
    <WhatsAppButton />
  </>
  );
};

export default Index;
