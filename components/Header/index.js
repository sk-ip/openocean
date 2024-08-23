import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 mb-3 sticky top-0 z-50 bg-white ">
      <div className="flex items-center gap-2 font-bold text-xl cursor-pointer">
        <Image src={"/images/opensea-logo.svg"} width={"48"} height={"48"} />
        OpenOcean
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-3 bg-gray-100 p-2 rounded-lg cursor-pointer">
          <Image src={"/images/wallet.svg"} width={"32"} height={"20"} />
          <p className="text-base font-bold">Login</p>
        </div>
        <div className=" bg-gray-100 p-2 rounded-lg cursor-pointer ">
          <Image src={"/images/user-circle.svg"} width={"32"} height={"20"} />
        </div>
        <div className=" bg-gray-100 p-2 rounded-lg cursor-pointer">
          <Image src={"/images/shopping-cart.svg"} width={"32"} height={"20"} />
        </div>
      </div>
    </div>
  );
}
