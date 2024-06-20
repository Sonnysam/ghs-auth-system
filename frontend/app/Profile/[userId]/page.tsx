// Profile.tsx
"use client";
import { useEffect, useState } from 'react';

type ProfileData = {
    name: string;
    userId: string;
    department: string;
    nextPayDay: string;
};

// Correctly destructure params from the props
export default function Profile({ params }: { params: { userId: string } }) {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

    // Use params.userId directly since it's now correctly destructured
    const url = `http://localhost:3000/api/profile/${params.userId}`;

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch profile data');
                }
                const { filteredUsers } = await response.json();

                if (filteredUsers.length === 0) {
                    throw new Error('User not found');
                }

                setProfileData(filteredUsers[0]); 
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [params.userId]); // Dependency array correctly includes params.userId

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Username:</strong> {profileData.name}</p>
            <p><strong>User ID:</strong> {profileData.userId}</p>
            <p><strong>Department:</strong> {profileData.department}</p>
            <p><strong>Next Pay Day:</strong> {profileData.nextPayDay}</p>
        </div>
    );
}
