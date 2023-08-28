import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto rounded-lg mt-12 text-center p-5 border-[3px] border-green-400 max-w-[500px] bg-gray-800">
        <h1 className="text-2xl text-white">WELCOME TO THIS PRACTICE</h1>
        <p className="text-green-700 text-xl">
          please click any link to see a simple exercise solved
        </p>
      </div>
    </>
  );
}
