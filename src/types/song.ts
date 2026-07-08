export type Song = {
  id: number;
  name: string;
  image: string;
  artist: {
    name: string;
    image: string;
  };
  play_url: string;
  duration: number;
};
