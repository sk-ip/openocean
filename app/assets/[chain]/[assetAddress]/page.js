import Image from "next/image";

export default function NftPage() {
  return (
    <div className="grid grid-cols-12 mx-20">
      {/* nft image view */}
      <div className="col-span-5">
        <div className="h-lvh border rounded-lg ">
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

        {/* nft description */}
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
              Anonthology is a tribute to Wojak, the immortal meme character.
              Flip through and see Wojak portrayed in everything from modern
              life to cultural and historical settings. Good, evil, joyous,
              depressed, happy, seething... Anonthology is a spiritual journey
              through the lens of one of internet culture's most famous icons.
              Brought to you by the Wojak Coin team.
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
            <Image
              src={"/images/chevron-down.svg"}
              height={"20"}
              width={"20"}
            />
          </div>

          <div className="grid grid-cols-3 p-4 gap-2">
            <div className="flex flex-col items-center bg-gray-100 rounded-md p-2">
              <p className="text-sm text-gray-500">CULTURAL</p>
              <p className="text-base text-black font-semibold flex gap-2">
                Day of the Dead <p className="text-gray-500">0.75%</p>
              </p>
              <p className="text-sm text-gray-500">Floor: 0.0275 ETH</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-md p-2">
              <p className="text-sm text-gray-500">JAK</p>
              <p className="text-base text-black font-semibold flex gap-2">
                Cultural <p className="text-gray-500">18%</p>
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
            <Image
              src={"/images/chevron-down.svg"}
              height={"20"}
              width={"20"}
            />
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

          {/* payment swap */}
          <div className="flex flex-col">
            <div className="flex flex-col border rounded-lg p-4">
              <p className="text-base text-gray-500">Pay via</p>
              <div className="flex justify-between items-center">
                <div className="flex items-end gap-2 mt-2 mb-2">
                  <p className="text-xl text-black ">0.0569 ETH</p>
                </div>
                <div className="bg-gray-100 py-2 px-3 rounded-full flex gap-2 my-2 hover:bg-gray-300 cursor-pointer">
                  <Image
                    src={"/images/blockchain/ethereum-icon.png"}
                    width={"20"}
                    height={"20"}
                  />
                  ETH
                  <Image
                    src={"/images/chevron-down.svg"}
                    width={"20"}
                    height={"20"}
                  />
                </div>
              </div>
            </div>
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
