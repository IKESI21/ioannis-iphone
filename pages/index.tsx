import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import CustomApp from "../components/Apps/customApp";
import MainApps from '../components/MainApps/MainApps';
import NavIcons from '../components/NavIcons/NavIcons';
import Lockscreen from './Lockscreen';

const HomeScreen = () => {
    return (
        <div className="flex flex-col flex-grow justify-between h-screen bg-yellow-300 overflow-hidden">
            <MainApps />
            <NavIcons />
        </div>
    )
}

const Home = (): JSX.Element => {
    const [unlock, setUnlock] = useState<boolean>(false);

    return (
        <div className="">
            <Head>
                <title>{`Ioannis' iPhone`}</title>
            </Head>
            <meta name="theme-color" content="#4285f4"></meta>
                <Image 
                    src={"/mk.png"}
                    width={200}
                    height={200}
                    layout="fill" // required
                     objectFit="contain"
                    alt='app logo'
                />
            {!unlock ? <Lockscreen setUnlock={setUnlock} /> : <HomeScreen />}
        </div>
    )
}

export default Home
