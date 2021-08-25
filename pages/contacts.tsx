import Image from "next/image";
import ContactsNavBar from "../components/Contacts/ContactsNavBar";

const Contacts = (): JSX.Element => {
    return (
        <div>
            <div className="flex flex-col flex-grow justify-between h-screen">
                <div className="flex justify-between p-3 bg-gray-100 border-b-2">
                    <p className="text-blue-500 text-lg">Groupes</p>
                    <p className="font-bold text-lg mr-8">Contacts</p>
                    <Image
                        className="object-contain"
                        src="https://image.flaticon.com/icons/png/512/747/747944.png"
                        width={20}
                        height={20}
                    />
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
                    <div className="flex place-content-center text-3xl text-gray-500">
                        <p>No Contacts</p>
                    </div>
                   <ContactsNavBar />
                </div>
            </div>
        </div>
    )
}

export default Contacts;