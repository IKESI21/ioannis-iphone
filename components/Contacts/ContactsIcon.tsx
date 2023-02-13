
interface ContactsIconProps {
    title: string;
    Icon: any;
}

const ContactsIcon = ({ title, Icon }: ContactsIconProps): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-evenly cursor-pointer">
                <Icon size={35} color={title == 'Contacts' ? 'blue' : null} />
            <p className="text-sky-600">{title}</p>
        </div>
    )
}

export default ContactsIcon;