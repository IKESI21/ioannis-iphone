import Link from "next/link";
import Image from "next/image";
import { AiOutlineLeft } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

interface MessageProps {
  country: string;
  flag: string;
  level: string;
  date: string;
}

const Message = ({ country, flag, level, date }: MessageProps) => {
  return (
    <div className="flex flex-col">
      <hr className="ml-20 w-full bg-gray-500" />
      <div className="flex">
        <Image src={flag} width={66} height={66} alt="flag" objectFit="contain" />
        <div className="flex flex-col w-full justify-center ml-5 my-2">
          <div className="flex justify-between">
            <p className="font-bold">{country}</p>
            <p className="text-gray-400">{date}</p>
          </div>
          <p className="text-gray-400">{level}</p>
        </div>
      </div>
      {/* <hr className="ml-20 w-full bg-gray-500" /> */}
    </div>
  );
};

const ListMessages = () => {
  return (
    <div className="flex flex-grow flex-col p-5">
      <Message country="(+33) French" flag="/languages/france.png" level="native" date='14:21' />
      <Message country="(+30) Greek" flag="/languages/greece.png" level="native" date='12:37' />
      <Message country="(+1) English" flag="/languages/usa.png" level="fluent" date='Friday' />
      <Message
        country="(+82) Korean"
        flag="/languages/korea.png"
        level="intermediate"
        date='02/05/23' 
      />
      <Message country="(+49) German" flag="/languages/germany.png" level="basic" date='01/04/23' />
    </div>
  );
};

const HeaderMessages = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between p-3">
        <Link href="/home" passHref={true}>
          <div className="flex items-center cursor-pointer">
            <AiOutlineLeft size={25} color="#3366BB" />
            <p className="text-blue-500 text-xl">Back</p>
          </div>
        </Link>
        <div className="flex items-center px-5">
          <HiOutlineDotsCircleHorizontal className="mr-5" size={30} color="#3366BB" />
          <BsPencilSquare color="#3366BB" size={25} />
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold ml-5 mt-5">Messages</h1>
      </div>
      {/* <hr className="mt-3 ml-10 bg-gray-100" /> */}
    </div>
  );
};

const Messages = () => {
  return (
    <div className="flex flex-col">
      <HeaderMessages />
      <ListMessages />
    </div>
  );
};

export default Messages;
