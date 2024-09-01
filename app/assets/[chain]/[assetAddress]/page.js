import NftDescription from "@/components/NftDescription";
import NftImage from "@/components/NftImage";
import NftPrice from "@/components/NftPrice";
import Image from "next/image";

export default function NftPage() {
  return (
    <div className="grid grid-cols-12 mx-20">
      {/* nft image view */}
      <div className="col-span-5">
        <NftImage />
        <NftDescription />
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
        <NftPrice />

        {/* price history */}
        <div className="flex flex-col mt-4 rounded-lg">
          <div className="flex gap-2 p-4 border items-center justify-between rounded-lg">
            <div className="flex gap-2">
              <Image
                src={"/images/arrow-trending-up.svg"}
                height={"20"}
                width={"20"}
              />
              <p>Price History</p>
            </div>
            <Image
              src={"/images/chevron-down.svg"}
              height={"20"}
              width={"20"}
            />
          </div>
        </div>

        {/* Listings */}
        <div className="flex flex-col mt-4">
          <div className="flex gap-2 p-4 border items-center justify-between rounded-t-lg ">
            <div className="flex gap-2">
              <Image src={"/images/tag.svg"} height={"20"} width={"20"} />
              <p>Listings</p>
            </div>
            <Image
              src={"/images/chevron-down.svg"}
              height={"20"}
              width={"20"}
            />
          </div>
          <div>
            <table className="text-left w-full">
              <tbody>
                <tr className="border">
                  <th className="text-base font-normal text-gray-600 p-2">
                    Price
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    USD Price
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    Quantity
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    Expiration
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    From
                  </th>
                </tr>
                <tr className="border">
                  <td className="p-2 text-lg ">0.0275 ETH</td>
                  <td className="p-2">$74.91</td>
                  <td className="p-2">1</td>
                  <td className="p-2">in 22 minutes</td>
                  <td className="p-2">88A2A8</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* offers */}
        <div className="flex flex-col mt-4">
          <div className="flex gap-2 p-4 border items-center justify-between rounded-t-lg">
            <div className="flex gap-2">
              <Image
                src={"/images/bars3-bottom-left.svg"}
                height={"20"}
                width={"20"}
              />
              <p>Offers</p>
            </div>
            <Image
              src={"/images/chevron-down.svg"}
              height={"20"}
              width={"20"}
            />
          </div>
          <div>
            <table className="text-left w-full">
              <tbody>
                <tr className="border">
                  <th className="text-base font-normal text-gray-600 p-2">
                    Price
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    USD Price
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    Quantity
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    Floor Difference
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    Expiration
                  </th>
                  <th className="text-base font-normal text-gray-600 p-2">
                    From
                  </th>
                </tr>
                <tr className="border">
                  <td className="p-2 text-lg ">0.0179 ETH</td>
                  <td className="p-2">$48.80</td>
                  <td className="p-2">1</td>
                  <td className="p-2">35% below</td>
                  <td className="p-2">53 minutes ago</td>
                  <td className="p-2">Potions-n-Lotions</td>
                </tr>
                <tr className="border">
                  <td className="p-2 text-lg ">0.0179 ETH</td>
                  <td className="p-2">$48.80</td>
                  <td className="p-2">1</td>
                  <td className="p-2">35% below</td>
                  <td className="p-2">53 minutes ago</td>
                  <td className="p-2">Potions-n-Lotions</td>
                </tr>
                <tr className="border">
                  <td className="p-2 text-lg ">0.0179 ETH</td>
                  <td className="p-2">$48.80</td>
                  <td className="p-2">1</td>
                  <td className="p-2">35% below</td>
                  <td className="p-2">53 minutes ago</td>
                  <td className="p-2">Potions-n-Lotions</td>
                </tr>
                <tr className="border">
                  <td className="p-2 text-lg ">0.0179 ETH</td>
                  <td className="p-2">$48.80</td>
                  <td className="p-2">1</td>
                  <td className="p-2">35% below</td>
                  <td className="p-2">53 minutes ago</td>
                  <td className="p-2">Potions-n-Lotions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
