import type { Song } from "../types/song";

export const songs: Song[] = [
  {
    id: 1,
    category: "library",
    artist: {
      image:
        "https://www.larata.cl/wp-content/uploads/2020/04/powfucancionvideo-768x502.jpg",
      name: "Powfu",
      description:
        "Powfu is a Canadian artist whose music fuses lo-fi hip-hop, indie, and bedroom pop into mellow, emotionally driven tracks. His songs frequently reflect on relationships, mental health, growing up, and everyday struggles, delivered through soft vocals and relaxed production.",
    },
    image: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
    name: "Death Bed",
    play_url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
    duration: 173290,
  },
  {
    id: 2,
    category: "library",
    artist: {
      image: "https://i.scdn.co/image/ab6761610000e5ebab47d8dae2b24f5afe7f9d38",
      name: "Imagine Dragons",
      description:
        "Imagine Dragons are an American pop rock band from Las Vegas, Nevada, known for their anthemic sound blending rock, electronic, and pop influences. Their music often explores themes of identity, struggle, and resilience.",
    },
    image: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
    name: "Bad Liar",
    play_url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
    duration: 200000,
  },
  {
    id: 3,
    category: "library",
    artist: {
      image: "https://i.scdn.co/image/ab6761610000e5eb572a8eae56feae217f618078",
      name: "Alan Walker",
      description:
        "Alan Walker is a Norwegian-British DJ and record producer known for his melodic electronic dance music, distinctive masked persona, and cinematic music videos exploring themes of connection and technology.",
    },
    image: "https://samplesongs.netlify.app/album-arts/faded.jpg",
    name: "Faded",
    play_url: "https://samplesongs.netlify.app/Faded.mp3",
    duration: 212000,
  },
  {
    id: 4,
    category: "library",
    artist: {
      image: "https://i.scdn.co/image/ab67616d00001e02e9cbe14ad3ce1507e449adb6",
      name: "Ellie Goulding",
      description:
        "Ellie Goulding is an English singer-songwriter known for blending electropop with folktronica influences. Her music often explores themes of love, heartbreak, and self-discovery through emotive vocals and atmospheric production.",
    },
    image: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
    name: "Hate Me",
    play_url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
    duration: 210000,
  },
  {
    id: 5,
    category: "library",
    artist: {
      image: "https://i.scdn.co/image/ab6761610000e5eb70d80b8ab8e193aef64223ec",
      name: "Clean Bandit",
      description:
        "Clean Bandit are a British music group blending classical instrumentation with electronic dance music and pop. Known for their genre-crossing collaborations, their sound merges string arrangements with contemporary beats.",
    },
    image: "https://samplesongs.netlify.app/album-arts/solo.jpg",
    name: "Solo",
    play_url: "https://samplesongs.netlify.app/Solo.mp3",
    duration: 195000,
  },
  {
    id: 6,
    category: "library",
    artist: {
      image: "https://i.scdn.co/image/ab6761610000e5eb15136101a0f63f0b2800b9dc",
      name: "Halsey",
      description:
        "Halsey is an American singer-songwriter known for exploring themes of mental health, identity, and relationships through a genre-blending sound that spans pop, alternative, and electronic influences.",
    },
    image: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
    name: "Without Me",
    play_url: "https://samplesongs.netlify.app/Without%20Me.mp3",
    duration: 227000,
  },
  {
    id: 7,
    category: "main",
    artist: {
      image: "https://i1.sndcdn.com/avatars-000091631613-db4qn0-t1080x1080.jpg",
      name: "T. Schürger",
      description:
        "Thomas Schürger, known through his SoundHelix demo tracks, is a German composer and producer whose instrumental works are widely used as royalty-free reference audio for testing and development purposes, spanning ambient, rock, and electronic styles.",
    },
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    name: "SoundHelix Song 1",
    play_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    duration: 372000,
  },
  {
    id: 8,
    category: "main",
    artist: {
      image: "https://i1.sndcdn.com/avatars-000091631613-db4qn0-t1080x1080.jpg",
      name: "T. Schürger",
      description:
        "Thomas Schürger, known through his SoundHelix demo tracks, is a German composer and producer whose instrumental works are widely used as royalty-free reference audio for testing and development purposes, spanning ambient, rock, and electronic styles.",
    },
    image:
      "https://images.unsplash.com/photo-1599423424751-54e0c1187a02?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "SoundHelix Song 2",
    play_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    duration: 425000,
  },
  {
    id: 9,
    category: "main",
    artist: {
      image: "https://i1.sndcdn.com/avatars-000091631613-db4qn0-t1080x1080.jpg",
      name: "T. Schürger",
      description:
        "Thomas Schürger, known through his SoundHelix demo tracks, is a German composer and producer whose instrumental works are widely used as royalty-free reference audio for testing and development purposes, spanning ambient, rock, and electronic styles.",
    },
    image:
      "https://images.unsplash.com/photo-1577648884063-1d3d1477b8a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "SoundHelix Song 3",
    play_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    duration: 344000,
  },
  {
    id: 10,
    category: "main",
    artist: {
      image: "https://i1.sndcdn.com/avatars-000091631613-db4qn0-t1080x1080.jpg",
      name: "T. Schürger",
      description:
        "Thomas Schürger, known through his SoundHelix demo tracks, is a German composer and producer whose instrumental works are widely used as royalty-free reference audio for testing and development purposes, spanning ambient, rock, and electronic styles.",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1700508860573-c3b44e18c53f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "SoundHelix Song 4",
    play_url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    duration: 527000,
  },
];

export const getSongById = (id: number) => {
  return songs.find((song) => song.id === id);
};
