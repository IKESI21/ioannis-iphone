import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import CustomApp from "../components/Apps/customApp";
import MainApps from "../components/MainApps/MainApps";
import NavIcons from "../components/NavIcons/NavIcons";
import Lockscreen from "./Lockscreen";

const HomeScreen = () => {
  return (
    <div className="flex flex-col flex-grow justify-between h-full bg-yellow-300 overflow-hidden">
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

const Main = (): JSX.Element => {
  const [unlock, setUnlock] = useState<boolean>(false);

  return (
    <div className="flex flex-grow flex-col min-safe-h-screen w-full fixed">
      <Head>
        <title>{`Ioannis' iPhone`}</title>
        <meta name="theme-color" content="#FBD44C" />
      </Head>
      <Image
        className=""
        src={"/mk.png"}
        layout="fill" // required
        objectFit="contain"
        alt="app logo"
      />
      {!unlock ? <Lockscreen setUnlock={setUnlock} /> : <HomeScreen />}
    </div>
  );
};

export default Main;
