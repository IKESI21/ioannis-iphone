import CustomApp from "../Apps/customApp";

const MainApps = (): JSX.Element => {
    return (
        <div className="grid grid-cols-4 gap-10 p-10 mt-10 sm:grid-cols-6">
                    <CustomApp title="LinkedIn"
                        image="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/linkedin-app.png"
                        url="https://www.linkedin.com/in/ioannis-kesisoglou-b90234137/" />
                    <CustomApp title="GitHub"
                        image="https://image.flaticon.com/icons/png/512/25/25657.png"
                        url="https://www.github.com/IKESI21/" />
                    <CustomApp title="YouTube"
                        image="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-youtube.png?w=585&scale=down"
                        url="" />
                    <CustomApp title="Settings"
                        image="https://cdn.iconscout.com/icon/free/png-512/apple-settings-1-493162.png"
                        url="" />
                    <CustomApp title="hiddentity"
                        image="https://media-exp1.licdn.com/dms/image/C4E0BAQH1xqlmJvIEBg/company-logo_200_200/0/1593473128241?e=2159024400&v=beta&t=LUF0kQIDgyvJOqU3p_dl90impmjBu-9mdNay_xkN1jg"
                        url="" />
                    <CustomApp title="Contacts"
                        image="https://mpng.subpng.com/20180331/ile/kisspng-iphone-contacts-icloud-computer-icons-contact-5abf08cab6d4d6.2362061715224690667489.jpg"
                        url="/contacts" />
                </div>
    )
}

export default MainApps;