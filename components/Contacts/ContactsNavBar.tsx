import {AiOutlineStar} from "react-icons/ai"
import {BiVoicemail} from "react-icons/bi"
import {IoIosKeypad, IoMdContact, IoIosTime, IoIosStar} from "react-icons/io"
import ContactsIcon from "./ContactsIcon";

const ContactsNavBar = (): JSX.Element => {
    return (
        <div className="flex flew-grow place-content-center justify-between h-20 text-gray-500 bg-gray-100">
            <ContactsIcon title="Favorites" Icon={IoIosStar}/>
            <ContactsIcon title="Recents" Icon={IoIosTime}/>
            <ContactsIcon title="Contacts" Icon={IoMdContact}/>
            <ContactsIcon title="Keypad" Icon={IoIosKeypad}/>
            <ContactsIcon title="Voicemail" Icon={BiVoicemail}/>
        </div>
    )
}

export default ContactsNavBar;