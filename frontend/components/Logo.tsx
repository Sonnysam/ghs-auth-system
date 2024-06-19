import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link href="/">
            <h1 className="mb-2 text-white text-2xl font-bold cursor-pointer md:text-2xl sm:xl lg:text-4xl">
                GHS {" "}
                <span
                    className="text-2xl font-bold md:text-2xl sm:xl lg:text-4xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-red-500 via-yellow-500 to-green-500
            animate-text"
                >
                    PORTAL
                </span>
            </h1>
        </Link>
    );
};

export default Logo;
