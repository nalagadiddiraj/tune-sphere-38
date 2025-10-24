export interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  audioSrc: string;
}

export const mockSongs: Song[] = [
  {
    id: 1,
    title: "Electric Dreams",
    artist: "Neon Pulse",
    image: "/src/assets/album1.jpg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "Midnight City",
    artist: "Urban Beats",
    image: "/src/assets/album2.jpg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Cloud Nine",
    artist: "Dreamy Skies",
    image: "/src/assets/album3.jpg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Thunder Road",
    artist: "The Rockers",
    image: "/src/assets/album4.jpg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    id: 5,
    title: "Late Night Vibes",
    artist: "Lo-Fi Cafe",
    image: "/src/assets/album5.jpg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
  {
    id: 6,
    title: "Smooth Jazz",
    artist: "The Blue Notes",
    image: "/src/assets/album6.jpg",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
];
