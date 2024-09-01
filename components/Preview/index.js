"use client";

import NftPreview from "../NftPreview";
import { useState } from "react";

export default function Preview() {
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Art",
    "Gaming",
    "Memberships",
    "PFPs",
    "Photography",
    "Music",
  ];

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-1">
        {categories.map((cat) => (
          <p
            key={cat}
            className={
              category === cat
                ? "text-lg cursor-pointer bg-gray-200 rounded-lg px-5 py-2"
                : "text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2"
            }
            onClick={() => setCategory(cat)}
          >
            {cat}
          </p>
        ))}
      </div>

      <div className="grid h-96 grid-cols-4 gap-4 grid-rows-1">
        <NftPreview src={"1"} />
        <NftPreview src={"2"} />
        <NftPreview src={"3"} />
        <NftPreview src={"4"} />
      </div>
    </div>
  );
}
