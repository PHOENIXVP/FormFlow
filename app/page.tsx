import Image from "next/image";
import SearchInput from "@components/SearchInput";
export default function Home() {
  return (
    <>
      <div className="bg-black-900 text-white-900">
        <div className="h-screen flex justify-center items-center">
          <span className="text-2xl hover:text-blue-900 transition cursor-pointer">
            Hello Welcome to my World
          </span>
        </div>
      </div>
    </>
  );
}
