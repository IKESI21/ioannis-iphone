import Head from 'next/head'
import CustomApp from "../components/Apps/customApp";
import MainApps from '../components/MainApps/MainApps';
import NavIcons from '../components/NavIcons/NavIcons';
import Lockscreen from './Lockscreen';

const HomeScreen = () => {
    return (
        <div className="flex bg-phone-img flex-col flex-grow justify-between h-screen">
            <MainApps />
            <NavIcons />
        </div>
    )
}

const Home = (): JSX.Element => {
    return (
        <div className="">
            <Head>
                <title>{`Ioannis' iPhone`}</title>
            </Head>
            <Lockscreen />
        </div>
    )
}

export default Home
