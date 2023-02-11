import Image from "next/image"
import Link from "next/link"

interface AppProps {
    title: string;
    image: string;
    url: string;
    position: number;
}

export const MailApp = ({ title, image }: AppProps): JSX.Element => {
    return (
        <div className="flex flex-col place-items-center cursor-pointer">
            <button onClick={() => window.open('mailto:kesisoglou.ioannis@gmail.com')}>
                <Image
                    className="object-contain rounded-2xl"
                    src={image}
                    width={60}
                    height={60}
                    // layout="fill" // required
                     objectFit="cover"
                    alt='app logo'
                />
            </button>
            <p className='text-white text-center'>{title}</p>
        </div>
    )
}

const CustomApp = ({ title, image, url, position }: AppProps): JSX.Element => {
    return (
        <div className="flex flex-col place-items-center cursor-pointer">
            <Link href={url} passHref={true}>
                <Image
                    className="object-contain rounded-2xl"
                    src={image}
                    width={60}
                    height={60}
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
