import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";

interface PhotoProps {
  src: string;
}

const Photo = ({ src }: PhotoProps): JSX.Element => {
  return (
    <Image
      className="rounded"
      src={src}
      width={3024}
      height={4032}
      // layout="fill" // required
      objectFit="cover"
      alt="photo"
      priority
    />
  );
};

const PhotoList = () => {
  return (
    <div className=" grid grid-cols-2 gap-1 sm:grid-cols-4 m-0.5">
      <Photo src={"/photo1.jpeg"} />
      <Photo src={"/photo2.jpeg"} />
    </div>
  );
};

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
  );
};

const PhotosFooter = (): JSX.Element => {
  return (
    <div className="flex bg-gray-100 border-t-2 absolute bottom-0 left-0 right-0">
      <div className="flex flex-grow justify-center p-3">
        <p className="font-bold ml-10">2 photos</p>
      </div>
      <div className="mr-5">
        {/* <BsPencilSquare color="#ffd500" size={25} /> */}
      </div>
    </div>
  );
};

const photos = (): JSX.Element => {
  return (
    <div className="flex flex-col flex-grow min-safe-h-screen">
      <Head>
        <title>{`Ioannis' iPhone`}</title>
        <meta name="theme-color" content="#F3F4F6" />
      </Head>
      <PhotosHeader />
      <PhotoList />
      <PhotosFooter />
    </div>
  );
};

export default photos;
