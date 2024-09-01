import Image from "next/image";

export default function NftDescription() {
  return (
    <div className="flex flex-col border rounded-lg my-3">
      <div className="flex gap-2 p-4 border rounded-t-lg">
        <Image
          src={"/images/bars3-bottom-left.svg"}
          width={"20"}
          height={"20"}
        />
        <p>Description</p>
      </div>

      <div className="flex flex-col gap-2 p-4 ">
        <p className="text-lg text-gray-400">
          By <span className="text-black">RadbroDeployer</span>
        </p>
        <p className="text-sm">
          Anonthology is a tribute to Wojak, the immortal meme character. Flip
          through and see Wojak portrayed in everything from modern life to
          cultural and historical settings. Good, evil, joyous, depressed,
          happy, seething... Anonthology is a spiritual journey through the lens
          of one of internet culture&apos;s most famous icons. Brought to you by
          the Wojak Coin team.
        </p>
      </div>

      <div className="flex gap-2 p-4 border items-center justify-between">
        <div className="flex gap-2">
          <Image
            src={"/images/bars3-bottom-left.svg"}
            width={"20"}
            height={"20"}
          />
          <p>Traits</p>
        </div>
        <Image src={"/images/chevron-down.svg"} height={"20"} width={"20"} />
      </div>

      <div className="grid grid-cols-3 p-4 gap-2">
        <div className="flex flex-col items-center bg-gray-100 rounded-md p-2">
          <p className="text-sm text-gray-500">CULTURAL</p>
          <p className="text-base text-black font-semibold flex gap-2">
            Day of the Dead <span className="text-gray-500">0.75%</span>
          </p>
          <p className="text-sm text-gray-500">Floor: 0.0275 ETH</p>
        </div>
        <div className="flex flex-col items-center bg-gray-100 rounded-md p-2">
          <p className="text-sm text-gray-500">JAK</p>
          <p className="text-base text-black font-semibold flex gap-2">
            Cultural <span className="text-gray-500">18%</span>
          </p>
          <p className="text-sm text-gray-500">Floor: 0.0275 ETH</p>
        </div>
      </div>

      <div className="flex gap-2 p-4 border items-center justify-between">
        <div className="flex gap-2">
          <Image
            src={"/images/bars3-bottom-left.svg"}
            width={"20"}
            height={"20"}
          />
          <p>Details</p>
        </div>
        <Image src={"/images/chevron-down.svg"} height={"20"} width={"20"} />
      </div>

      <div className="flex flex-col gap-2 p-4 ">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Contract Address</p>
          <p>0x0d58...795c</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Token ID</p>
          <p>4714</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Token Standard</p>
          <p>ERC-721</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Chain</p>
          <p>Ethereum</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Last Updated</p>
          <p>9 months ago</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Creator Earnings</p>
          <p>1%</p>
        </div>
      </div>
    </div>
  );
}
