import Image from "next/image";

export default function NftPreview({ src }) {
  return (
    <div className="relative">
      <Image
        src={"/images/nft-images/" + src + ".avif"}
        fill
        className="rounded-lg"
      />
      <div className="absolute bottom-5 left-5 text-white">
        <div className="flex gap-2 ">
          <p className="text-lg font-bold">Nft collection 1</p>
          <Image src={"/images/check-badge.svg"} width={"20"} height={"20"} />
        </div>
        <p className="text-base">Floor : 0.1 ETH</p>
      </div>
    </div>
  );
}
