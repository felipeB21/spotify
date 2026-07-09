import type { Song } from "../types/song";

export const songs: Song[] = [
  {
    id: 1,
    artist: {
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/04/fe/72/04fe7255-8298-6ea3-a842-489161a0afeb/ami-identity-759967e43150fe52efc34501d7c47ce8-2025-08-28T09-47-05.244Z_cropped.png/1400x1400bb.jpg",
      name: "Ed Sheeran",
      description:
        "Ed Sheeran is a singer-songwriter known for blending heartfelt storytelling with pop, folk, and acoustic influences. His music often explores themes of love, personal growth, family, and nostalgia, combining intimate lyrics with memorable melodies. Over the years, he has become one of the world's most successful artists, recognized for his songwriting, live performances, and ability to move seamlessly between emotional ballads and upbeat anthems.",
    },
    image:
      "https://yt3.googleusercontent.com/xpDEOr2TeqEn1QpXosXhqtj149FzNnTgAG3oqPnpTxTbQk-oceO90Sz4Axq0s4Jp_QLGQha_um6_EG3WGQ=w1500-h1500-l100-rj",
    duration: 263000,
    name: "Perfect",
    play_url:
      "https://p.scdn.co/mp3-preview/4e30857a3c7da3f8891483643e310bb233afadd2",
  },
  {
    id: 2,
    artist: {
      image:
        "https://www.larata.cl/wp-content/uploads/2020/04/powfucancionvideo-768x502.jpg",
      name: "Powfu",
      description:
        "Powfu is a Canadian artist whose music fuses lo-fi hip-hop, indie, and bedroom pop into mellow, emotionally driven tracks. His songs frequently reflect on relationships, mental health, growing up, and everyday struggles, delivered through soft vocals and relaxed production. His introspective style and nostalgic sound have made him a defining voice in the modern lo-fi scene.",
    },
    image: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
    name: "Death Bed",
    play_url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
    duration: 253000,
  },
];

export const getSongById = (id: number) => {
  return songs.find((song) => song.id === id);
};
