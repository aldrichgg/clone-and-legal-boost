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
            Impulsione sua presença{" "}
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
              url="https://instagram.com"
              customIcon={
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                  <Instagram className="w-10 h-10 text-white" />
                </div>
              }
            />
            
            <SocialPlatformCard
              icon={Music2}
              name="Tiktok"
              url="https://tiktok.com"
              customIcon={
                <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center relative">
                  <Music2 className="w-10 h-10 text-cyan-400" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-pink-500/20"></div>
                </div>
              }
            />

            <SocialPlatformCard
              icon={Youtube}
              name="YouTube"
              url="https://youtube.com"
              customIcon={
                <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center">
                  <Youtube className="w-10 h-10 text-white" />
                </div>
              }
            />

            <div className="md:col-start-1 lg:col-start-2">
              <SocialPlatformCard
                icon={() => (
                  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
                    <path d="M17.5 2h-11C4.57 2 3 3.57 3 5.5v13C3 20.43 4.57 22 6.5 22h11c1.93 0 3.5-1.57 3.5-3.5v-13C21 3.57 19.43 2 17.5 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                  </svg>
                )}
                name="Kwai"
                url="https://kwai.com"
                customIcon={
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                      <path d="M17.5 2h-11C4.57 2 3 3.57 3 5.5v13C3 20.43 4.57 22 6.5 22h11c1.93 0 3.5-1.57 3.5-3.5v-13C21 3.57 19.43 2 17.5 2zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
                    </svg>
                  </div>
                }
              />
            </div>

            <div className="md:col-start-2 lg:col-start-3">
              <SocialPlatformCard
                icon={() => (
                  <svg viewBox="0 0 24 24" className="w-16 h-16" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )}
                name="FaceBook"
                url="https://facebook.com"
                customIcon={
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
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
            COMEÇAR AGORA
          </Button>

          <p className="text-foreground text-sm md:text-base max-w-2xl mx-auto">
            Serviços de alta qualidade e entrega rápida garantidos
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
