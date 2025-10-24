import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface MusicCardProps {
  title: string;
  artist: string;
  image: string;
  onPlay?: () => void;
}

export const MusicCard = ({ title, artist, image, onPlay }: MusicCardProps) => {
  return (
    <div className="group relative bg-card rounded-lg p-4 shadow-card hover:bg-secondary transition-all duration-300 hover:shadow-card-hover cursor-pointer">
      <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          onClick={onPlay}
          className={cn(
            "absolute bottom-2 right-2 w-12 h-12 bg-primary rounded-full shadow-lg",
            "flex items-center justify-center transition-all duration-300",
            "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
            "hover:scale-105 hover:bg-accent"
          )}
        >
          <Play className="w-5 h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
        </button>
      </div>
      <h3 className="font-bold text-foreground mb-1 truncate">{title}</h3>
      <p className="text-sm text-muted-foreground truncate">{artist}</p>
    </div>
  );
};
