import Head from "next/head";
import MainApps from "../components/MainApps/MainApps";
import NavIcons from "../components/NavIcons/NavIcons";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col flex-grow justify-between min-safe-h-screen w-full bg-yellow-300 overflow-hidden fixed">
      <Head>
        <title>{`Ioannis' iPhone`}</title>
        <meta name="theme-color" content="#FBD44C" />
      </Head>
      <Image
        src={"/mk.png"}
        layout="fill" // required
        objectFit="contain"
        alt="app logo"
      />
      <MainApps />
      <NavIcons />
    </div>
  );
};

export default Home;
