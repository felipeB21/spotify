export type Song = {
  id: number;
  name: string;
  image: string;
  category: "library" | "main";
  artist: {
    name: string;
    image: string;
    description: string;
  };
  play_url: string;
  duration: number;
};
