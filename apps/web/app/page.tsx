import Image from "next/image";

const Page = () => (
  <div className="flex flex-col items-center justify-center bg-black w-screen h-screen text-zinc-500 gap-y-4">
    <Image src="/osmium.svg" width={400} height={300} alt="Osmium Logo" />
    <p>[ WIP ]</p>
    <p>Ship your dapp secure and faster with Osmium.</p>
  </div>
);

export default Page;
