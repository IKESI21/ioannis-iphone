import Link from "next/link";
import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
    setUnlock: Dispatch<SetStateAction<boolean>>;
  }

const Time = () => {
  return (
    <div className="flex flex-col flew-grow justify-center text-center">
      <p className="text-white text-8xl">
        {new Date().toLocaleString().substring(11, 16)}
      </p>
      <p className="text-white text-2xl">Friday, February 10</p>
    </div>
  );
};

const Unlock = ({ setUnlock }: IProps) => {
  return (
    <div className="cursor-pointer">
      {/* <Link href={"/HomeScreen"} passHref={true}> */}
        <div className="flex flex-row flew-grow justify-center text-center align-center">
          <button className="text-white opacity-60 text-2xl font-bold" onClick={() => setUnlock(true)}>
            touch to unlock
          </button>
        </div>
      {/* </Link> */}
    </div>
  );
};

const Lockscreen = ({ setUnlock }: IProps): JSX.Element => {
  return (
    <div className="flex flex-col flex-grow h-full justify-between items-center py-20  bg-yellow-300 text-center">
      <div className="flex">
        <Time />
      </div>
      <div className="flex">
        <Unlock setUnlock={setUnlock} />
      </div>
    </div>
  );
};

export default Lockscreen;
