"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import "../../styles/style.css";
import Logo from "@/components/Logo";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAppDispatch } from "@/store/hooks";
import { setUserToken } from "@/redux_store/myslice/authSlice";
import dynamic from "next/dynamic";
import CustomLogo from "@/components/CustomLogo";
// import { WhenSignedOut } from "@/components/AuthWhenGuards";


const WhenSignedOut = dynamic(() => import('@/components/AuthWhenGuards').then(c => c.WhenSignedOut), { ssr: false })

// const logo = require("../../public/logo.png");
const Forgot = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);




    const handlePasswordReset = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        if (!email) {
            toast.error("Email is required for password reset", {
                duration: 1000,
                position: "top-right",
                icon: "🔐",
            });
            return;
        }
        await sendPasswordResetEmail(auth, email.trim().toLowerCase())
            .then(() => {
                toast.success("Password reset email sent 🚀", {
                    duration: 1000,
                    position: "top-right",
                    icon: "📩"
                })
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
            }).catch(() => {
                toast.error("Oops an error occured", {
                    duration: 1000,
                    position: "top-right",
                    icon: "📩",
                });
            })
    }

    return (
        <WhenSignedOut>

            <div className="flex bg-[#031525] min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <Toaster />
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="my-2 flex justify-center">
                        {/* <Logo /> */}
                        <CustomLogo />
                    </div>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handlePasswordReset}>
                        <div>
                            <div className="text-center mb-3">
                                <h1 className="text-white">Reset Password</h1>
                            </div>

                            <label
                                htmlFor="email"
                                className="block text-xs font-medium leading-6 text-white"
                            >
                                Email
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
                                    className="block w-full rounded-md border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                                />
                                <p className="text-white text-xs mt-2"> Check spam folder or inbox for password reset link</p>
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                {loading ? "Loading..." : "Reset Password"}
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center">
                        <p className="mt-2 text-sm text-white">
                            Take me{" "}
                            <a
                                href="/"
                                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                            >
                                Home
                            </a>
                        </p>
                        {/* <p className="mt-2 text-sm text-white">
                            New here?{" "}
                            <a
                                href="/signup"
                                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                            >
                                Sign Up
                            </a>
                        </p> */}
                    </div>
                </div>
            </div>
        </WhenSignedOut>


    );
};

export default Forgot;
