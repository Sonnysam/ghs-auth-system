"use client";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from 'react';
import Link from "next/link";

// Updated Asset interface
interface Asset {
  tagId: string;
  serialNumber: string;
  assetName: string;
  description: string;
  category: string;
  subcategory: string;
  procurementDate: string;
  vendorInformation: string;
  location: string;
  department: string;
  conditionAndStatus: string;
  maintenanceRecords: string;
  warrantyInformation: string;
  lifecycleTracking: string;
}

const assetsData: Asset[] = [
  {
    tagId: "001",
    serialNumber: "SN123456789",
    assetName: "Laptop",
    description: "Dell Latitude E7440",
    category: "Electronics",
    subcategory: "Computers",
    procurementDate: "2021-01-15",
    vendorInformation: "Dell Inc.",
    location: "Office 101",
    department: "IT",
    conditionAndStatus: "Good",
    maintenanceRecords: "Last serviced on 2023-04-01",
    warrantyInformation: "Valid until 2025-01-15",
    lifecycleTracking: "Purchased -> Used -> Disposed",
  },
  {
    tagId: "002",
    serialNumber: "SN987654321",
    assetName: "Monitor",
    description: "27 inch Dell Ultrasharp",
    category: "Electronics",
    subcategory: "Displays",
    procurementDate: "2021-02-20",
    vendorInformation: "Dell Inc.",
    location: "Conference Room A",
    department: "HR",
    conditionAndStatus: "Excellent",
    maintenanceRecords: "No service records",
    warrantyInformation: "Expired on 2023-03-20",
    lifecycleTracking: "Purchased -> Sold -> Purchased",
  },
  {
    tagId: "003",
    serialNumber: "SN112233445",
    assetName: "Printer",
    description: "HP LaserJet Pro M404dn",
    category: "Hardware",
    subcategory: "Printers",
    procurementDate: "2021-03-05",
    vendorInformation: "HP Inc.",
    location: "Reception Area",
    department: "General",
    conditionAndStatus: "Fair",
    maintenanceRecords: "Serviced regularly",
    warrantyInformation: "Expired on 2022-03-05",
    lifecycleTracking: "Purchased -> Serviced -> Retired",
  },
];

const Dashboard = () => { const[searchQuery, setSearchQuery] = useState("");
  const filteredAssets = assetsData.filter((asset) =>
    asset.assetName.toLowerCase().includes(searchQuery.toLowerCase())
  
  );
  
  const userIdArray = ["a14d", "aq2n"];


  const getRandomUserId = (list:any) => {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  };

  const [randomUserId, setRandomUserId] = useState('');

  useEffect(() => {
    setRandomUserId(getRandomUserId(userIdArray));
  }, [userIdArray]);
 
  return (
    <div className="mx-auto bg-[#031525] min-h-screen px-4 py-8">
      <Link href={`/Profile/${randomUserId}`}>
      <FaUserCircle className="mr-[600px] w-[60px] hover:bg-slate-300"/> 
      </Link>
      <h2 className="text-2xl font-bold mb-4">Assets Dashboard</h2>
      <input
        type="text"
        placeholder="Search Assets..."
        className="px-4 py-2 w-[20%] mb-4 rounded-md shadow-sm focus:outline-none text-black focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="overflow-x-scroll">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">Tag ID</th>
              <th className="border px-4 py-2">Serial Number</th>
              <th className="border px-4 py-2">Asset Name</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Subcategory</th>
              <th className="border px-4 py-2">Procurement Date</th>
              <th className="border px-4 py-2">Vendor Information</th>
              <th className="border px-4 py-2">Location</th>
              <th className="border px-4 py-2">Department</th>
              <th className="border px-4 py-2">Condition &amp; Status</th>
              <th className="border px-4 py-2">Maintenance Records</th>
              <th className="border px-4 py-2">Warranty Info.</th>
              <th className="border px-4 py-2">Lifecycle Tracking</th>
            </tr>
          </thead>
          <tbody>
            {filteredAssets.map((asset) => (
              <tr key={asset.tagId}>
                <td className="border px-4 py-2">{asset.tagId}</td>
                <td className="border px-4 py-2">{asset.serialNumber}</td>
                <td className="border px-4 py-2">{asset.assetName}</td>
                <td className="border px-4 py-2">{asset.description}</td>
                <td className="border px-4 py-2">{asset.category}</td>
                <td className="border px-4 py-2">{asset.subcategory}</td>
                <td className="border px-4 py-2">{asset.procurementDate}</td>
                <td className="border px-4 py-2">{asset.vendorInformation}</td>
                <td className="border px-4 py-2">{asset.location}</td>
                <td className="border px-4 py-2">{asset.department}</td>
                <td className="border px-4 py-2">{asset.conditionAndStatus}</td>
                <td className="border px-4 py-2">{asset.maintenanceRecords}</td>
                <td className="border px-4 py-2">{asset.warrantyInformation}</td>
                <td className="border px-4 py-2">{asset.lifecycleTracking}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
   )
}
 




export default Dashboard;
