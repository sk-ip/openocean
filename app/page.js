import Preview from "@/components/Preview";
import Collection from "@/components/Collection";
import CollectionCards from "@/components/CollectionCards";

export default function Home() {
  return (
    <main className="mx-20">
      <Preview />
      <Collection />
      <CollectionCards heading={"Notable Collections"} />
      <CollectionCards heading={"Trending in Art"} />
      <CollectionCards heading={"Trending in Gaming"} />
      <CollectionCards heading={"Trending in Memberships"} />
    </main>
  );
}
