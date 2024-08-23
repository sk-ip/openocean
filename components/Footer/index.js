import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-blue-500 text-white mt-10 pb-10">
      {/* email */}
      <div className="grid grid-cols-3 grid-rows-1">
        <div className="flex flex-col pt-10 mx-20 gap-3">
          <p className="text-xl font-bold">Stay in the loop</p>
          <p className="text-base font-normal">
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating OpenOcean.
          </p>
          <div className="flex gap-4">
            <input
              type="email"
              className="w-60 rounded-lg p-4 text-black"
              placeholder="Your email address"
            />
            <button className="py-3 px-6 bg-blue-800 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>

        {/* socials */}
        <div className="flex flex-col pt-10 mx-20 gap-3">
          <p className="text-xl font-bold">Join the Community</p>
          <div>
            <Image
              src={"/images/mail.svg"}
              width={"40"}
              height={"40"}
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* support */}
        <div className="flex flex-col pt-10 mx-20 gap-3">
          <p className="text-xl font-bold">Need help?</p>
          <button className="py-3 px-6 bg-blue-800 rounded-lg w-fit">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
