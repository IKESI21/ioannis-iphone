import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";

const photos = (): JSX.Element => {
    return (
        <div className="">
            <div className="flex flex-row bg-gray-100 border-b-2 p-3">
                <div className="flex flex-nowrap cursor-pointer">
                    <AiOutlineLeft size={25} color="#3366BB" />
                    <Link href="/" passHref={true}>
                        <p className="text-blue-600">Back</p>
                    </Link>
                </div>
                <div className="flex-grow text-center mr-10">
                    <p className="font-bold text-l">Camera Roll</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default photos;