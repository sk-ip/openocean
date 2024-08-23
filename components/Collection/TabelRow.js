import Image from "next/image";

export function TableRow({ rank }) {
  return (
    <tr>
      <td className="p-2 font-bold ">{rank}</td>
      <td className="p-2">
        <div className="flex items-center gap-2">
          <div className="rounded-lg relative w-24 h-24">
            <Image
              src={"/images/nft-images/collection-icon-1.avif"}
              fill
              className="rounded-lg"
            />
          </div>
          <p className="text-lg font-bold">Mutant Ape Yatch Club</p>
          <Image src={"/images/check-badge.svg"} width={"20"} height={"20"} />
        </div>
      </td>
      <td className="p-2 font-bold">14.49 MATIC</td>
      <td className="p-2 font-bold">0.10 ETH</td>
    </tr>
  );
}
