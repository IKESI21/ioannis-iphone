import CustomApp from "../Apps/customApp";


const NavIcons = (): JSX.Element => {
    return (
        <div className="flex justify-evenly self-center place-content-center w-screen bg-opacity-80 mb-6 p-5 rounded-full bg-gray-600">
                    <CustomApp title="Messages"
                        image="https://images.macrumors.com/t/8uvCNFbSaurR2bpqkYe2F6DUm7M=/1600x0/article-new/2020/07/messagesicon-200x200.png"
                        url="" />
                    <CustomApp title="Photos"
                        image="https://i.pinimg.com/736x/2e/6c/3f/2e6c3f56d41d284b0c477ebdce6997df.jpg"
                        url="/photos" />
                    <CustomApp title="Emails"
                        image="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"
                        url="https://www.linkedin.com/in/ioannis-kesisoglou-b90234137/" />
                </div>
    );
}

export default NavIcons;