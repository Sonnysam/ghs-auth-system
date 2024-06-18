"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';
import "../../styles/style.css";
import Logo from "@/components/Logo";

const Signup = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignup = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email || !password || !name) {
            toast.error('Please fill all fields', {
                duration: 1000,
                position: "top-right",
                icon: '🔐'
            });
            return;
        }
    }



    return (
        <div className="flex bg-[#031525] min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
            <Toaster />
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="my-2 flex justify-center">
                    <Logo />
                </div>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSignup}>
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Username
                        </label>
                        <div className="mt-2">
                            <input
                                id="username"
                                name="username"
                                placeholder="Enter username"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="username"
                                required
                                className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-white"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                placeholder="Enter email address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-white"
                            >
                                Password
                            </label>
                            {/* <div className="text-sm">
                                <a
                                    href="/forgot"
                                    className="font-semibold text-blue-600 hover:text-blue-500"
                                >
                                    Forgot password?
                                </a>
                            </div> */}
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            // onClick={handleSignup}
                            disabled={loading}
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-black px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            {loading ? "Loading..." : "Sign up"}
                        </button>
                    </div>
                </form>

                <div className="flex justify-between">
                    <p className="mt-2 text-sm text-white">
                        Go back{" "}
                        <a
                            href="/"
                            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                        >
                            Home
                        </a>
                    </p>
                    <p className="mt-2 text-sm text-white">
                        Have an account?{" "}
                        <a
                            href="/signin"
                            className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                        >
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
