
interface ContactsIconProps {
    title: string;
    Icon: any;
}

const ContactsIcon = ({ title, Icon }: ContactsIconProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-evenly m-3 cursor-pointer">
                <Icon size={35} />
            <p>{title}</p>
        </div>
    )
}

export default ContactsIcon;