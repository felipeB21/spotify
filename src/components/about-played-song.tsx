import { useSongStore } from "../stores/song-store";

export default function AboutPlayedSong() {
  const currentSong = useSongStore((state) => state.currentSong);
  return (
    <section className="bg-stone-900 rounded-lg p-4">
      <h2 className="font-bold">About</h2>
      <div className="mt-10">
        <img
          src={currentSong.image}
          alt={`${currentSong.name} Image Cover`}
          className="rounded-lg"
        />
        <div className="mt-5">
          <h1 className="font-bold text-2xl">{currentSong.name}</h1>
          <p className="text-sm text-stone-400">{currentSong.artist.name}</p>
        </div>
      </div>
      <div className="mt-10 bg-stone-800 rounded-lg">
        <div className="relative">
          <h5 className="font-bold absolute  text-black p-2">
            About <br />
            the artist
          </h5>
          <img
            src={currentSong.artist.image}
            alt={`${currentSong.artist.name} Image Cover`}
            className="rounded-t-lg "
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold">{currentSong.artist.name}</h2>
          <p className="text-xs line-clamp-3">
            {currentSong.artist.description}
          </p>
        </div>
      </div>
    </section>
  );
}
