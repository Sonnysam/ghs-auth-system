// pages/api/profile/[userId].ts
import { NextApiRequest, NextApiResponse } from 'next';
import UserProfile from '@/pages/UserProfile';// Import your UserProfile class
import { NextResponse } from 'next/server';

const userProfile = new UserProfile(); // Initialize your UserProfile class instance

export async function GET(request: Request, context:any){
    const {params} = context;
    const userIdToFind = params.userId;

    const filteredUsers = userProfile.getAllUsers().filter(user => user.userId === userIdToFind)

    return NextResponse.json({
        filteredUsers,
    })

}

