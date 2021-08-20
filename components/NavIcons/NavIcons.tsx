import CustomApp from "../Apps/customApp";


const NavIcons = (): JSX.Element => {
    return (
        <div className="flex justify-evenly self-center place-content-center w-screen bg-opacity-80 mb-6 p-5 rounded-full bg-gray-600">
                    <CustomApp title="Messages"
                        image="https://images.macrumors.com/t/8uvCNFbSaurR2bpqkYe2F6DUm7M=/1600x0/article-new/2020/07/messagesicon-200x200.png"
                        url="" />
                    <CustomApp title="Photos"
                        image="https://image.flaticon.com/icons/png/512/148/148813.png"
                        url="" />
                    <CustomApp title="Emails"
                        image="https://image.flaticon.com/icons/png/512/831/831306.png"
                        url="https://www.linkedin.com/in/ioannis-kesisoglou-b90234137/" />
                </div>
    );
}

export default NavIcons;