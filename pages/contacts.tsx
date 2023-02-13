import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import Contact from "../components/Contacts/Contact";
import { AiOutlineLeft } from "react-icons/ai";
import ContactsNavBar from "../components/Contacts/ContactsNavBar";

const Contacts = (): JSX.Element => {
  return (
    <div className="flex flex-col flex-grow justify-between min-safe-h-screen w-full">
      <Head>
        <title>{`Ioannis' iPhone`}</title>
        <meta name="theme-color" content="#F3F4F6" />
      </Head>
      <div className="flex justify-between p-3 bg-gray-100 border-b-2">
        <Link href="/home" passHref={true}>
          <div className="flex cursor-pointer ">
            <AiOutlineLeft size={25} color="#3366BB" />
            <p className="text-blue-600">Back</p>
          </div>
        </Link>
        <p className="font-bold text-lg mr-8">Contacts</p>
        <p className="font-bold text-lg mr-8"></p>
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex m-10">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-16 w-16 flex items-center justify-center place-content-center">
            <p className="text-white font-bold text-3xl">IK</p>
          </div>
          <div className="ml-6">
            <p className="font-bold text-xl">Ioannis KESISOGLOU</p>
            <p className="text-gray-500">+33 6 15 45 06 51</p>
          </div>
        </div>
        <div className="flex flex-grow flex-col">
          <Contact
            title="CHUNG-ANG UNIVERSITY"
            subtitle="Seoul, South Korea"
            detail="1st year Master Degree - Department of Computer Science"
          />
          <Contact
            title="EPITECH"
            subtitle="Strasbourg / Paris, France"
            detail="Bachelor & Master degree - School of Digital Innovation"
          />
        </div>
        <ContactsNavBar />
      </div>
    </div>
  );
};

export default Contacts;
