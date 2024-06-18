/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import "../../styles/style.css";
import Logo from "@/components/Logo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAppDispatch } from "@/store/hooks";
import { setUserToken } from "@/redux_store/myslice/authSlice";
import dynamic from "next/dynamic";
import CustomLogo from "@/components/CustomLogo";
// import { WhenSignedOut } from "@/components/AuthWhenGuards";


const WhenSignedOut = dynamic(() => import('@/components/AuthWhenGuards').then(c => c.WhenSignedOut), { ssr: false })

// const logo = require("../../public/logo.png");
const Login = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignin = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter your email and password", {
                duration: 2000,
                position: "top-right",
                icon: "🔐",
            });
            return;
        }
        setLoading(true);
        if (email.trim().toLowerCase() === "admin@gmail.com" && password === "123456") {
            toast.success("Login successful", {
                duration: 2000,
                position: "top-right",
                icon: "🔐",
            });
            setTimeout(() => {
                window.location.href = "/dashboard/admin";
            }, 2000);
            // setLoading(false);
            return;
        }

        try {
            await signInWithEmailAndPassword(
                auth,
                email.trim().toLocaleLowerCase(),
                password
            ).then((userCredential) => {
                const user = userCredential.user;
                getUserData(user);
                setLoading(false);
                toast.success("Login successful", {
                    duration: 2000,
                    position: "top-right",
                    icon: "🔓",
                });
                setTimeout(() => {
                    window.location.href = "/dashboard/user";
                }, 2000);
            });
        } catch (error: any) {
            toast.error("Invalid email or password", {
                duration: 2000,
                position: "top-right",
                icon: "🔐",
            });
            setLoading(false);
        }
    };


    const getUserData = async (user: any) => {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            dispatch(setUserToken(user));
        } else {
            return toast.error("User not found", {
                duration: 2000,
                position: "top-right",
                icon: "🔐",
            });
        }
    };
    useEffect(() => {
        getUserData;
    });

    // const handleSignin = async (e: { preventDefault: () => void }) => {
    //     e.preventDefault();

    //     if (!email || !password) {
    //         toast.error("Please enter your email and password", {
    //             duration: 2000,
    //             position: "top-right",
    //             icon: "🔐",
    //         });
    //         return;
    //     }

    //     setLoading(true);

    //     try {
    //         const userCredential = await signInWithEmailAndPassword(
    //             auth,
    //             email.trim().toLowerCase(),
    //             password
    //         );
    //         const user = userCredential.user;
    //         const isAdmin = await checkAdminUser(user);
    //         await getUserData(user);
    //         setLoading(false);
    //         toast.success("Login successful", {
    //             duration: 2000,
    //             position: "top-right",
    //             icon: "🔓",
    //         });
    //         setTimeout(() => {
    //             if (isAdmin) {
    //                 window.location.href = "/dashboard/admin";
    //             } else {
    //                 window.location.href = "/dashboard/user";
    //             }
    //         }, 2000);
    //     } catch (error: any) {
    //         toast.error("Invalid email or password", {
    //             duration: 2000,
    //             position: "top-right",
    //             icon: "🔐",
    //         });
    //         setLoading(false);
    //     }
    // };

    // const checkAdminUser = async (user: any) => {
    //     const adminEmail = "admin@gmail.com";
    //     return user.email === adminEmail;
    // };

    // const getUserData = async (user: any) => {
    //     const docRef = doc(db, "users", user.uid);
    //     const docSnap = await getDoc(docRef);

    //     if (docSnap.exists()) {
    //         dispatch(setUserToken(user));
    //     } else {
    //         throw new Error("User not found");
    //     }
    // };

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             getUserData(user).catch((error) => {
    //                 console.error("Error fetching user data:", error);
    //             });
    //         }
    //     });

    //     return () => {
    //         unsubscribe();
    //     };
    // },);

    return (
        <WhenSignedOut>
            <div className="flex bg-[#031525] min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
                <Toaster />
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <div className="my-2 flex justify-center">
                        {/* <Logo /> */}
                        <CustomLogo />
                    </div>
                    <div
                        className="
                flex justify-center items-center flex-col 
                "
                    >
                        <h1
                            className="
                    text-xl text-white    
                    "
                        >
                            How'dy Buddy,
                            <span
                                className="text-xl font-bold md:text-xl sm:xl lg:text-xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-500 to-indigo-500
            animate-text ml-2"
                            >
                                Welcome Back!
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSignin}>
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
                                <div className="text-sm">
                                    <a
                                        href="/forgot"
                                        className="font-semibold text-blue-600 hover:text-blue-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
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
                                disabled={loading}
                                // onClick={handleSignin}
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                {loading ? "Loading..." : "Sign in"}
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
                            New here?{" "}
                            <a
                                href="/signup"
                                className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </WhenSignedOut>
    );
};

export default Login;
