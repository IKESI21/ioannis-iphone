import Image from "next/image"
import Link from "next/link"

interface AppProps {
    title: string;
    image: string;
    url: string;
    position: number;
}

const CustomApp = ({ title, image, url, position }: AppProps): JSX.Element => {
    return (
        <div className="flex flex-col place-items-center cursor-pointer">
            <Link href={url} passHref={true}>
                <Image
                    className="object-contain rounded-xl"
                    src={image}
                    width={position == 5 || position == 6 ? 70 : 60}
                    height={position == 5 || position == 6 ? 70 : 60}
                    // layout="fill" // required
                     objectFit="cover"
                    alt='app logo'
                />
            </Link>
            <p className='text-white text-center'>{title}</p>
        </div>
    )
}

export default CustomApp;
