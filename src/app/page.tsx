import Image from "next/image";
import { BentoGridDemo } from "@/components/bento";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="">
        <h1 className="text-7xl pt-20 font-semibold">Our better models</h1>
        <div className="py-12">
          <BentoGridDemo></BentoGridDemo>
        </div>
      </div>
      
    </div>
  );
}
