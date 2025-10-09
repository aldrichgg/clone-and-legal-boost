import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface SocialPlatformCardProps {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  name: string;
  url: string;
  iconColor?: string;
  customIcon?: React.ReactNode;
}

export const SocialPlatformCard = ({ icon: Icon, name, url, iconColor, customIcon }: SocialPlatformCardProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block group">
      <Card className="bg-secondary/50 hover:bg-secondary/80 border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 p-8 flex flex-col items-center justify-center gap-6 cursor-pointer backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-secondary/60 group-hover:to-secondary/40">
        {customIcon ? (
          <div className="group-hover:animate-pulse">
            {customIcon}
          </div>
        ) : (
          <Icon className={`w-16 h-16 ${iconColor || 'text-foreground'} group-hover:scale-110 transition-transform duration-300`} />
        )}
        <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{name}</span>
      </Card>
    </a>
  );
};
