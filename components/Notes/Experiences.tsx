import Image from "next/image"

interface ExpInfos {
    title: string;
    date: string;
    description: string;
    image: string;
};

const Experiences = ({ title, date, description, image }: ExpInfos) => {
    return (
        <div className="flex flex-col ml-10 mr-3">
            <div className="flex justify-between items-center flex-wrap mt-1">
                <h1 className="text-3xl font-bold text-gray-900 flex-shrink">{title}</h1>
                <Image
                    src={image}
                    height={50}
                    width={50}
                />
            </div>
            <div className="flex flex-col">
                <span className="text-2xl text-gray-800">{date}</span>
                <span className=" text-gray-500 text-2xl">{description}</span>
            </div>
            <hr className="mt-3 bg-gray-100" />
        </div>
    )
}

export default Experiences;