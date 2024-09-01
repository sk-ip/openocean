import Image from "next/image";

export default function NftImage() {
  return (
    <div className="h-lvh border rounded-lg ">
      <div className="flex justify-between px-3 py-3 items-center">
        <Image
          src={"/images/blockchain/ethereum-icon.png"}
          width={"20"}
          height={"20"}
        />
        <div className="flex relative items-center gap-2">
          <Image
            src={"/images/arrow-top-right-on-square.svg"}
            width={"20"}
            height={"20"}
          />
          <p className="text-gray-400">42</p>
          <Image src={"/images/heart.svg"} width={"20"} height={"20"} />
        </div>
      </div>

      <div className="relative w-full h-2/3 my-20">
        <Image src={"/images/nft-images/1.avif"} fill />
      </div>
    </div>
  );
}
