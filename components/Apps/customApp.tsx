import Image from "next/image"
import Link from "next/link"

interface AppProps {
    title: string;
    image: string;
    url: string;
}

const CustomApp = ({ title, image, url }: AppProps): JSX.Element => {
    return (
        <div className="flex flex-col place-items-center cursor-pointer">
            <Link href={url} passHref={true}>
                <Image
                    className="object-contain"
                    src={image}
                    width={70}
                    height={70}
                />
            </Link>
            <p className='text-white'>{title}</p>
        </div>
    )
}

export default CustomApp;
