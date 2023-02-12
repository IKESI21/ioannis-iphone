import MainApps from "../components/MainApps/MainApps";
import NavIcons from "../components/NavIcons/NavIcons";

const Home = () => {
  return (
    <div className="flex flex-col flex-grow justify-between min-safe-h-screen w-full bg-yellow-300 overflow-hidden fixed">
      <MainApps />
      <NavIcons />
    </div>
  );
};

export default Home;
