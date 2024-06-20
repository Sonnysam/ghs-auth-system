import React from 'react'
import './learn.css'
import Logo from "../../components/Logo";
import Link from "next/link";
import { Nunito } from "next/font/google";


const Learn = () => {
  return (
    <div className='bg-[#031525] min-h-screen  flex-column justify-center items-center'>
        <div className="absolute top-5 left-5">
                <Link href="/">
                    <Logo />
                </Link>
        </div>
        <div className='pt-28 w-5/6 flex mx-auto justify-center items-center'>
            <div className='flex '>
                <p className='text-justify text-md'>
                    The Ghana Health Service (GHS) is a pivotal institution established under the Ghana Health Service and Teaching Hospitals Act 1996, Act 525, in accordance with Chapter 14 of the 1992 Constitution of the Republic of Ghana. This autonomous Executive Agency is mandated with the implementation of national health policies, operating under the oversight of the Minister for Health through the Ghana Health Service Council. The creation of the GHS was a critical component of the health sector reforms initiated in the 1990s, aimed at creating a more equitable, efficient, and responsive health care system. These reforms, which began with the reorganization of the Ministry of Health (MOH) in 1993, emphasized decentralization, accountability, and the prudent management of resources. Today, the GHS continues to embody these principles, ensuring comprehensive and accessible health services, particularly at the primary health care level, across regional, district, and sub-district tiers. With a vision of providing timely, quality health care to all communities, the GHS upholds its core values of professionalism, teamwork, integrity, discipline, excellence, and a people-centered approach.
                </p>
            </div>
        </div>
       <div className='md:flex md:items-center justify-center md:justify-evenly py-28'>
       <div className="card md:w-1/4 ">
            <div className='text-center text-white text-xs p-6'>
                <p className='text-xl p-2'>Backgound</p>
                The 1992 Constitution of the Republic of Ghana (Chapter 14) provided for the establishment of the Ghana Health Service (GHS) as part of the Public Services of Ghana. In 1996, Parliament passed the Ghana Health Service and Teaching Hospitals Act 1996, Act 525, to pave way for the establishment of GHS.The GHS is therefore a Public Service body established under Act 525 of 1996 as required by the 1992 constitution. It is an autonomous Executive Agency responsible for implementation of national policies under the control of the Minister for Health through its governing Council – the Ghana Health Service Council.
            </div>
        </div>
        <div className="card md:w-1/4">
            <div className='text-center text-white text-xs p-6'>
                <p className='text-xl p-2'>Rationale</p>
                The establishment of the GHS was an essential part of the key strategies identified in the Health Sector Reform process in the 1990s, which was outlined in the Medium-Term Health Strategy and Five Year Programme of Work for the period 1997-2001. The strategies were necessary steps in establishing a more equitable, efficient, accessible and responsive health care system. The reforms built on the reorganization of the MOH that began in 1993, which was explicitly designed to set the scene for the establishment of the GHS. The reforms also provided a sound organizational framework for the growing degree of managerial responsibility that had already been delegated to districts and hospitals. Themes that were central to the reorganization of 1993 remain important today for GHS: careful stewardship of scare resources, clear lines of responsibility and control, decentralization, and accountability for performance rather than inputs.
            </div>
        </div>
        <div className="card md:w-1/4">
            <div className='text-center text-white text-xs p-6'>
                <p className='text-xl p-2'>Objectives</p>
                    Implement approved national policies for health delivery in the country.
                    Increase access to good quality health services, and
                    Manage prudently resources available for the provision of the health services.
            </div>
        </div>
       </div>
    </div>
  )
}

export default Learn