import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { MusicCard } from "@/components/MusicCard";
import { Player } from "@/components/Player";
import { mockSongs, Song } from "@/data/mockMusic";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [currentSong, setCurrentSong] = useState<Song | undefined>();

  const handlePlay = (song: Song) => {
    setCurrentSong(song);
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto pb-32">
          {/* Hero Section */}
          <section 
            className="relative h-80 bg-gradient-hero flex items-end px-8 pb-8"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(22, 163, 74, 0.3) 0%, rgba(17, 17, 17, 1) 100%), url(${heroBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="relative z-10">
              <h2 className="text-5xl font-bold mb-2">Focus</h2>
              <p className="text-lg text-muted-foreground">
                Music to help you concentrate
              </p>
            </div>
          </section>

          {/* Popular Albums */}
          <section className="px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Popular Albums</h2>
              <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                See all
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {mockSongs.map((song) => (
                <MusicCard
                  key={song.id}
                  title={song.title}
                  artist={song.artist}
                  image={song.image}
                  onPlay={() => handlePlay(song)}
                />
              ))}
            </div>
          </section>

          {/* Recommended */}
          <section className="px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Made For You</h2>
              <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                See all
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {mockSongs.slice().reverse().map((song) => (
                <MusicCard
                  key={song.id}
                  title={song.title}
                  artist={song.artist}
                  image={song.image}
                  onPlay={() => handlePlay(song)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>

      <Player currentSong={currentSong} />
    </div>
  );
};

export default Index;
