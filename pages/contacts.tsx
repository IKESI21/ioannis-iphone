import Image from "next/image";

const Contacts = (): JSX.Element => {
    return (
        <div>
            <div className="flex justify-between p-10 bg-gray-100">
                <p className="text-blue-500 text-lg">Groupes</p>
                <p className="font-bold text-lg">Contacts</p>
                <Image
                    className="object-contain"
                    src="https://image.flaticon.com/icons/png/512/747/747944.png"
                    width={20}
                    height={20}
                />
            </div>
            <div className="flex flex-col justify-between h-screen">
                <div className="flex m-10">
                    <div className="bg-gray-500 rounded-full h-12 w-12 items-center justify-center place-content-center">
                        <p className="text-white font-bold ">IK</p>
                    </div>
                    <div className="ml-6">
                        <p className="font-bold">Ioannis KESISOGLOU</p>
                        <p className="text-gray">+33 6 15 45 06 51</p>
                    </div>
                </div>
                <div className="flex place-content-center text-3xl text-gray-500">
                    <p>No Contacts</p>
                </div>
                <div className="flex justify-evenly bg-gray-100 h-20">
                    <p>Favorites</p>
                    <p>Favorites</p>
                    <p>Favorites</p>
                    <p>Favorites</p>
                    <p>Favorites</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts;