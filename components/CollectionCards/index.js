import { CollectionCard } from "./CollectionCard";

export default function CollectionCards({ heading }) {
  return (
    <div className="flex flex-col py-4 gap-6">
      <p className="text-2xl font-bold "> {heading} </p>
      <div className="grid grid-cols-6 grid-rows-1 gap-3">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
}
