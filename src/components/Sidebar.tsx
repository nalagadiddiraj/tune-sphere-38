import { Home, Search, Library, Plus, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Search, label: "Search" },
  { icon: Library, label: "Your Library" },
];

const playlists = [
  "Liked Songs",
  "Your Episodes",
  "Daily Mix 1",
  "Discover Weekly",
  "Release Radar",
  "Chill Vibes",
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar flex flex-col h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">Spotify</h1>
      </div>

      <nav className="flex-1 px-2">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "w-full flex items-center gap-4 px-4 py-3 rounded-md transition-colors",
                  item.active
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:text-foreground"
                )}
              >
                <item.icon className="w-6 h-6" />
                <span className="font-semibold">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-md text-sidebar-foreground hover:text-foreground transition-colors">
            <Plus className="w-6 h-6" />
            <span className="font-semibold">Create Playlist</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3 rounded-md text-sidebar-foreground hover:text-foreground transition-colors">
            <Heart className="w-6 h-6 fill-primary text-primary" />
            <span className="font-semibold">Liked Songs</span>
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-sidebar-border">
          <ul className="space-y-3">
            {playlists.map((playlist) => (
              <li key={playlist}>
                <button className="w-full text-left px-4 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {playlist}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
};
