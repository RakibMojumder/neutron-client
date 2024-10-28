import Image from "next/image";
import userImg from "@/../public/user.jpeg";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";

const Home = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {[...Array(20)].map((contact, index) => (
        <div key={index} className="border cursor-pointer group">
          <div className="relative">
            <Image
              src={userImg}
              alt="user image"
              width={300}
              height={300}
              priority
            />
            <div className="absolute inset-0 bg-black/35 hidden group-hover:block">
              <div className="flex justify-end gap-x-5 p-2">
                <FiEdit3 size={24} className="text-white" />
                <FaRegHeart size={24} className="text-white" />
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="h-14 mb-1.5">
              <h1 className="text-lg font-medium">Rakib Ahmed</h1>
              <p className="text-neutral-800">sujonahmed45a4@gmail.com</p>
            </div>
            <div>
              <h3>
                <span>Address:</span> Dhaka, Bangladesh
              </h3>
              <h3>
                <span>Phone:</span> 01839288123
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
