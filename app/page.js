import Preview from "@/components/Preview";
import Header from "@/components/Header";
import Collection from "@/components/Collection";
import CollectionCards from "@/components/CollectionCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-20">
      <Header />
      <Preview />
      <Collection />
      <CollectionCards />
      <CollectionCards />
      <CollectionCards />
      <CollectionCards />
    </main>
  );
}
