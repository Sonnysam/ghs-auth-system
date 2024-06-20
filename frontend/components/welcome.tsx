import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Welcome = () => {
    return (
        <div className={`bg-[#031525] flex items-center justify-center flex-col ${nunito.className} text-white relative min-h-screen sm:h-96`}>
            <div className="absolute top-5 left-5">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <h1 className="mb-2 text-white text-2xl font-bold md:text-2xl sm:xl lg:text-4xl">
                Welcome to GHS {""}
                <span
                    className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-red-500 via-yellow-500 to-green-500
            animate-text"
                >
                    PORTAL
                </span>
            </h1>
            <div className="
            flex flex-col items-center justify-center
            ">
                <p className="text-white mx-2 text-sm sm:text-base md-text-xl lg:text-xl">
                    The GHS Portal is a platform that allows you to access your health records
                </p>
                <p className="text-white mx-2 text-sm sm:text-base md-text-xl lg:text-xl">
                    and make appointments with health professionals.
                </p>
                <p className=" text-muted text-sm text-gray-400 mx-2  sm:text-sm md:text-xl lg:text-xl">
                    Sign in or create an account to get started.
                </p>
            </div>
            <p className="text-center mt-4 text-lg px-5 sm:px-0">
                <a
                    href="/dashboard"
                    className="bg-white text-black py-3 px-4 rounded-md hover:text-black"
                >
                    Learn More
                </a>{" "}
                <a
                    href="/login"
                    className="bg-black text-white py-3 px-4 rounded-md hover:text-white border-2 border-white ml-1"
                >
                    Get Started
                </a>
            </p>
        </div>
    );
};

export default Welcome;
