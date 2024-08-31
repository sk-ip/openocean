import Preview from "@/components/Preview";
import Collection from "@/components/Collection";
import CollectionCards from "@/components/CollectionCards";

export default function Home() {
  return (
    <main className="mx-20">
      <Preview />
      <Collection />
      <CollectionCards />
      <CollectionCards />
      <CollectionCards />
      <CollectionCards />
    </main>
  );
}
