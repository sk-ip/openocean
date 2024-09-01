"use client";

import Image from "next/image";
import { TableRow } from "./TabelRow";
import { useState } from "react";

export default function Collection() {
  const [category, setCategory] = useState("Trending");
  const [timeOption, setTimeOption] = useState("24h");

  const sortCategoryOptions = ["Trending", "Top"];
  const sortTimeOptions = ["1h", "6h", "24h", "7d"];

  return (
    <div className="mt-12">
      <div className="flex justify-between">
        <div className="flex rounded-lg bg-gray-100 px-1 py-1 gap-2">
          {sortCategoryOptions.map((s) => (
            <p
              key={s}
              className={
                category === s
                  ? "text-lg bg-white px-3 py-2 rounded-lg cursor-pointer"
                  : "text-lg hover:bg-white px-3 py-2 rounded-lg cursor-pointer"
              }
              onClick={() => setCategory(s)}
            >
              {s}
            </p>
          ))}
        </div>

        <div className="flex gap-1">
          <div className="flex rounded-lg bg-gray-100 px-1 py-1 gap-2">
            {sortTimeOptions.map((t) => (
              <p
                key={t}
                className={
                  timeOption === t
                    ? "text-lg bg-white px-5 py-2 rounded-lg cursor-pointer"
                    : "text-lg hover:bg-white px-5 py-2 rounded-lg cursor-pointer"
                }
                onClick={() => setTimeOption(t)}
              >
                {t}
              </p>
            ))}
          </div>
          <div className="flex rounded-lg bg-gray-100 px-6 py-3 items-center gap-2 cursor-pointer hover:bg-gray-200">
            <p className="text-lg ">All Chains</p>
            <span>
              <Image
                src={"/images/chevron-down.svg"}
                width={"20"}
                height={"20"}
              />
            </span>
          </div>
          <p className=" text-lg rounded-lg bg-gray-100 px-6 py-3 cursor-pointer hover:bg-gray-200">
            View All
          </p>
        </div>
      </div>

      {/*  Collection list */}

      <div className="grid grid-cols-2 grid-rows-1 my-4">
        <div>
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="text-base font-normal text-gray-400 p-2">
                  Rank
                </th>
                <th className="text-base font-normal text-gray-400 p-2">
                  Collection
                </th>
                <th className="text-base font-normal text-gray-400 p-2">
                  Floor Price
                </th>
                <th className="text-base font-normal text-gray-400 p-2">
                  Volume
                </th>
              </tr>
              <TableRow rank={"1"} />
              <TableRow rank={"2"} />
              <TableRow rank={"3"} />
              <TableRow rank={"4"} />
              <TableRow rank={"5"} />
            </tbody>
          </table>
        </div>
        <div>
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="text-base font-normal text-gray-400 p-2">
                  Rank
                </th>
                <th className="text-base font-normal text-gray-400 p-2">
                  Collection
                </th>
                <th className="text-base font-normal text-gray-400 p-2">
                  Floor Price
                </th>
                <th className="text-base font-normal text-gray-400 p-2">
                  Volume
                </th>
              </tr>
              <TableRow rank={"6"} />
              <TableRow rank={"7"} />
              <TableRow rank={"8"} />
              <TableRow rank={"9"} />
              <TableRow rank={"10"} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
