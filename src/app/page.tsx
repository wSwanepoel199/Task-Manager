import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="h-1/5 text-center align-middle">
        <h1 className="dark:text-slate-100 text-slate-900 font-bold text-2xl">
          Hello World
        </h1>
      </div>
      <button className="max-w-xs">
        <Link
          href="/signin"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          SignIn
        </Link>
      </button>
    </div>
  );
};

export default Home;
