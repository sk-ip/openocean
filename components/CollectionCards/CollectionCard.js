import Image from "next/image";

export function CollectionCard() {
  return (
    <div className="shadow-lg cursor-pointer hover:scale-105">
      <div className="relative h-52 w-full">
        <Image
          src={"/images/nft-images/collection-card-2.webp"}
          className="rounded-t-lg"
          fill
        />
      </div>

      <div className="flex p-4 flex-col">
        <div className="flex">
          <p className="text-lg font-bold">Nft collection name</p>
          <Image src={"/images/check-badge.svg"} width={"20"} height={"20"} />
        </div>
        <div className="flex grow mt-4">
          <div className="flex flex-col grow">
            <p className="text-sm font-normal text-gray-400">Floor</p>
            <p className="text-base font-bold">0.04 ETH</p>
          </div>
          <div className="flex flex-col grow">
            <p className="text-sm font-normal text-gray-400">Total Volume</p>
            <p className="text-base font-bold">76 ETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
