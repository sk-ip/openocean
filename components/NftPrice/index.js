"use client";

import { useState } from "react";

import Image from "next/image";

export default function NftPrice() {
  const [selectedToken, setSelectedToken] = useState("Eth");
  const [price, setPrice] = useState(0.0569);

  function changeTokenSelection(e) {
    setSelectedToken(e.target.value);

    if (e.target.value === "Sol") {
      setPrice(1);
    } else if (e.target.value === "Eth") {
      setPrice(0.0569);
    } else {
      setPrice(326.81);
    }
  }

  return (
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
              <p className="text-xl text-black ">
                {price} {selectedToken}{" "}
              </p>
            </div>
            <div>
              <select
                name="token-selection"
                id=""
                className="bg-gray-100 rounded-full p-2 my-2 hover:bg-gray-300 cursor-pointer"
                onChange={changeTokenSelection}
                value={selectedToken}
              >
                <option value="Eth">Eth</option>
                <option value="Matic">Matic</option>
                <option value="Sol">Sol</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex gap-2 items-center my-4">
        {/* buy now */}
        <div className="flex items-center justify-center flex-1 py-3 rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-700 gap-2">
          <p className="text-white">Buy now</p>
          <Image src={"/images/shopping-cart.svg"} height={"20"} width={"20"} />
        </div>

        {/* make offer */}
        <div className="flex items-center justify-center flex-1 py-3 rounded-lg cursor-pointer bg-gray-100 gap-2 hover:bg-gray-300">
          <Image src={"/images/tag.svg"} height={"20"} width={"20"} />
          <div>Make offer</div>
        </div>
      </div>
    </div>
  );
}
