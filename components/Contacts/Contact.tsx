interface ContactInfo {
    title: string;
    subtitle: string;
}

const Contact = ({title, subtitle}: ContactInfo): JSX.Element => {
    return (
        <div className="flex flex-col py-2">
            <div className="border-2 bg-gray-100">
                <p className="text-black ml-2 font-bold">{title.substring(0, 1)}</p>
            </div>
            <div className="flex">
            <p className="ml-2 font-bold">{title}</p>
            <p className="ml-2">{subtitle}</p>
            </div>
        </div>
    );
}

export default Contact;