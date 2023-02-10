import Image from "next/image";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";

interface PhotoProps {
    src: string;
}

const Photo = ({src}: PhotoProps): JSX.Element => {
    return (
        <div className="border-1">
            <Image 
            // className="object-contain"
            src={src}
            width={3024}
            height={4032}
            // layout="fill" // required
             objectFit="cover"
            alt='photo'
            priority
            />
        </div>
    )
}

const PhotoList = () => {
    return (
        <div className=" grid grid-cols-2 gap-1 sm:grid-cols-4 m-1">
            <Photo 
                src={'/photo1.jpeg'}
            />
            <Photo 
                src={'/photo2.jpeg'}
            />
        </div>
    )
}


const PhotosHeader = (): JSX.Element => {
    return (
        <div className="flex flex-row bg-gray-100 border-b-2 p-3">
                <Link href="/" passHref={true}>
                    <div className="flex flex-nowrap cursor-pointer">
                        <AiOutlineLeft size={25} color="#3366BB" />
                        <p className="text-blue-600">Back</p>
                    </div>
                   </Link>
                <div className="flex-grow text-center">
                    <p className="font-bold text-l">Camera Roll</p>
                </div>
                <p className="font-bold text-l ml-10"></p>
            </div>
    )
}

const PhotosFooter = (): JSX.Element => {
    return (
        <div className="flex justify-center items-center bg-gray-100 border-t-2">
            <div className="flex flex-grow justify-center p-3">
                <p className="font-bold ml-10">2 photos</p>
            </div>
            <div className="mr-5">
                {/* <BsPencilSquare color="#ffd500" size={25} /> */}
            </div>
        </div>
    )
}

const photos = (): JSX.Element => {
    return (
        <div className="flex flex-col flex-grow justify-between h-screen ">
            <PhotosHeader />
            <PhotoList />
            <PhotosFooter />
        </div>
    )
}

export default photos;