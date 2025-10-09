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
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="bg-secondary hover:bg-secondary/80 border-border transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 p-8 flex flex-col items-center justify-center gap-4 cursor-pointer">
        {customIcon ? (
          customIcon
        ) : (
          <Icon className={`w-16 h-16 ${iconColor || 'text-foreground'}`} />
        )}
        <span className="text-xl font-semibold text-foreground">{name}</span>
      </Card>
    </a>
  );
};
