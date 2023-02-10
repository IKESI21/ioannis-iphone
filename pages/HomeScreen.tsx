import MainApps from '../components/MainApps/MainApps';
import NavIcons from '../components/NavIcons/NavIcons';

const HomeScreen = () => {
    return (
        <div className="flex bg-phone-img flex-col flex-grow justify-between h-screen">
            <MainApps />
            <NavIcons />
        </div>
    )
}

export default HomeScreen;