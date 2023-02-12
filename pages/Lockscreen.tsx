import Link from "next/link";
import React, { Dispatch, SetStateAction } from 'react';

interface IProps {
    setUnlock: Dispatch<SetStateAction<boolean>>;
  }

const Time = () => {
  return (
    <div className="flex flex-col flew-grow justify-center text-center">
      <p className="text-white text-8xl">
        {new Date().toLocaleString().substring(11, 17)}
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
          <button className="text-white opacity-60 text-xl font-bold" onClick={() => setUnlock(true)}>
            Touch to unlock
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
      <div className="flex mb-3 border-2">
        <Unlock setUnlock={setUnlock} />
      </div>
    </div>
  );
};

export default Lockscreen;
