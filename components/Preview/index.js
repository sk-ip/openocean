import NftPreview from "../NftPreview";

export default function Preview() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-1">
        <p className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2">
          All
        </p>
        <p className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2">
          Art
        </p>
        <p className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2">
          Gaming
        </p>
        <p className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2">
          Memberships
        </p>
        <p className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2">
          PFPs
        </p>
        <p className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2">
          Photography
        </p>
        <p className="text-lg cursor-pointer hover:bg-gray-200 rounded-lg px-5 py-2">
          Music
        </p>
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
