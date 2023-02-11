import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi"
import { BsPencilSquare } from "react-icons/bs"
import Experiences from "../components/Notes/Experiences";
import ListExperiences from "../components/Notes/ListExperiences";

const NotesHeader = (): JSX.Element => {
    return (
        <div className="flex flex-col bg-gray-100">
            <div className="flex items-center justify-between p-3">
                <Link href="/" passHref={true}>
                    <div className="flex items-center cursor-pointer">
                        <AiOutlineLeft size={25} color="#ffd500" />
                        <p className="text-yellow-400 text-xl">Back</p>
                    </div>
                </Link>
                <div className="mt-2">
                    <HiOutlineDotsCircleHorizontal size={30} color="#ffd500" />
                </div>
            </div>
            <div>
                <h1 className="text-5xl font-bold ml-10">Notes</h1>
            </div>
            <div className="flex justify-end mr-5 mt-5">
                <p className="text-yellow-400 text-xl">Sorted by Date Edited (Default)</p>
            </div>
            <hr className="mt-3 ml-10 bg-gray-100" />
        </div>
    )
}

const NotesFooter = (): JSX.Element => {
    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="flex flex-grow justify-center p-3">
                <p className="font-bold ml-10">5 notes</p>
            </div>
            <div className="mr-5">
                <BsPencilSquare color="#ffd500" size={25} />
            </div>
        </div>
    )
}


const notes = (): JSX.Element => {
    return (
        <div className="h-screen flex flex-col">
            <NotesHeader />
            <div className="flex flex-grow flex-col justify-between">
                <ListExperiences />
                <NotesFooter />
            </div>
        </div>
    )
}

export default notes;