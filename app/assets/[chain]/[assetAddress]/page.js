import Image from "next/image";

export default function NftPage() {
  return (
    <div className="grid grid-cols-12 mx-20">
      {/* nft image view */}
      <div className="col-span-5 h-screen">
        <div className="h-3/4 border rounded-lg ">
          <div className="flex justify-between px-3 py-3 items-center">
            <div>chain ethereum</div>
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
      </div>

      <div className="col-span-7 px-7">
        {/* name and options */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 pt-2 cursor-pointer">
            <p className="text-lg text-blue-700">Storms by Mitch Dobrowner</p>
            <Image src={"/images/check-badge.svg"} width={"20"} height={"20"} />
          </div>

          <div className="flex items-center gap-4">
            <Image
              src={"/images/share.svg"}
              width={"20"}
              height={"20"}
              className="cursor-pointer"
            />
            <Image
              src={"/images/ellipsis-horizontal.svg"}
              width={"20"}
              height={"20"}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* nft name */}

        <div className="flex gap-1 flex-col my-4">
          <h1 className="text-4xl font-semibold text-black ">
            Storms - Nebraska Supercell
          </h1>
          <p className="text-base">
            Owned by{" "}
            <span className="text-blue-600 cursor-pointer">NFTinitcom___</span>
          </p>
        </div>

        {/* nft stats */}
        <div className="flex gap-6 my-8 text-gray-500">
          {/* views */}
          <div className="flex items-center gap-1">
            <Image src={"/images/eye.svg"} height={"20"} width={"20"} />
            <p>216 views</p>
          </div>

          {/* favorites */}
          <div className="flex items-center gap-1 cursor-pointer">
            <Image src={"/images/heart.svg"} height={"20"} width={"20"} />
            <p>42 favorites</p>
          </div>

          {/* category */}
          <div className="flex items-center gap-1 cursor-pointer">
            <Image src={"/images/photo.svg"} height={"20"} width={"20"} />
            <p>Photography</p>
          </div>
        </div>

        {/* nft price */}
        <div className="flex flex-col border rounded-lg p-4">
          <p className="texe-base text-gray-400">Current price</p>
          <div className="flex items-end gap-2 mt-2 mb-2">
            <p className="text-4xl text-black font-bold ">0.0569 ETH</p>
            <p className="text-base text-gray-500">$157.01</p>
          </div>

          {/* buttons */}
          <div className="flex gap-2 items-center my-4">
            {/* buy now */}
            <div className="flex items-center justify-center flex-1 py-3 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-700 gap-2">
              <p className="text-white">Buy now</p>
              <Image
                src={"/images/shopping-cart.svg"}
                height={"20"}
                width={"20"}
              />
            </div>

            {/* make offer */}
            <div className="flex items-center justify-center flex-1 py-3 rounded-lg cursor-pointer bg-gray-100 gap-2 hover:bg-gray-300">
              <Image src={"/images/tag.svg"} height={"20"} width={"20"} />
              <div>Make offer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
