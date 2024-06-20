"use client"
import Link from "next/link"
type ProfileData ={
    userName: string;
    userId: bigint;
    department: string;
    nextpay: string;
}


export default function Profile(){

   const user = "a14d"

    return(<div>
        <Link href={`/Profile/${user}`}>
             <button>Profile</button>
        </Link>

    </div>)
}