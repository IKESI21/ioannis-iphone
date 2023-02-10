import CustomApp from "../Apps/customApp";

const MainApps = (): JSX.Element => {
    return (
        <div className="grid grid-cols-4 gap-10 p-10 mt-10 sm:grid-cols-6">
            <CustomApp title="LinkedIn"
                image="https://icon-library.com/images/linkedin-app-icon/linkedin-app-icon-24.jpg"
                url="https://www.linkedin.com/in/ioannis-kesisoglou-b90234137/" 
                position={1}
                />
            <CustomApp title="GitHub"
                image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                url="https://www.github.com/IKESI21/"
                position={2}
                />
            <CustomApp title="YouTube"
                image="https://platinmods.com/attachments/1674990734661-png.487996/"
                url="https://www.youtube.com/channel/UCErXUZxOoUKrk7uyMfQO18Q"
                position={3}
                />
            <CustomApp title="Accès EPS"
                image="/logo_app.png"
                url="https://www.youtube.com/watch?v=k7CQv0tkJII&ab_channel=ACC%C3%88S%C3%89ditions" 
                position={4}
                />
            <CustomApp title="Contacts"
                image="https://i.imgur.com/gh0TaOa.png"
                url="/contacts" 
                position={5}
                />
            <CustomApp title="Notes"
                image="https://i.imgur.com/xMRbRSF.png"
                url="/notes" 
                position={6}
                />
        </div>
    )
}

export default MainApps;