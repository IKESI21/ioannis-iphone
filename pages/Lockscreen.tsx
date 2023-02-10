
import Link from "next/link"

const Time = () => {
    return (
        <div className="flex flex-col flew-grow justify-center text-center">
            <p className="text-white text-8xl">{new Date().toLocaleString().substring(11, 17)}</p>
            <p className="text-white text-2xl">Friday, February 10</p>
        </div>
    )
}

const Unlock = () => {
    return (
        <div className="cursor-pointer">
            <Link href={"/HomeScreen"} passHref={true}>
                <div className="flex flex-row flew-grow justify-center text-center align-center">
                   <p className="text-white text-3xl font-bold">Touch to unlock</p>
                </div>
            </Link>
        </div>
    )
}

const Lockscreen = (): JSX.Element => {
    return (
        <div className="flex flex-col flex-grow justify-between items-center py-20 h-screen bg-yellow-300 text-center">
            <div className="flex">
                <Time />
            </div>
            <div className="flex">
                <Unlock />
            </div>
        </div>
    );
}

export default Lockscreen;