import CustomApp from "../Apps/customApp";
import { MailApp } from "../Apps/customApp";

const NavIcons = (): JSX.Element => {
  return (
    <div className="flex justify-evenly self-center place-content-center w-screen bg-opacity-20 rounded-sm bg-gray-600 pt-3 fixed bottom-0 left-0 right-0">
      <CustomApp
        title="Messages"
        image="https://images.macrumors.com/t/8uvCNFbSaurR2bpqkYe2F6DUm7M=/1600x0/article-new/2020/07/messagesicon-200x200.png"
        url="/messages"
        position={7}
      />
      <CustomApp
        title="Photos"
        image="https://i.pinimg.com/736x/2e/6c/3f/2e6c3f56d41d284b0c477ebdce6997df.jpg"
        url="/photos"
        position={8}
      />
      <MailApp
        title="Mail"
        image="/icons/mail.png"
        url="/"
        position={9}
      />
    </div>
  );
};

export default NavIcons;
