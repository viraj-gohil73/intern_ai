import { Briefcase, Users, TrendingUp, MailX  ,MailCheck  } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
       
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <p className="text-gray-600">Welcome to your Internship Management Dashboard.</p>
      <hr className="my-4 w-full h-2 b-4"/>


       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Total Internships */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-sm">Total Internships</h2>
              <p className="text-2xl font-bold">6</p>
              {/* <p className="text-green-600 text-xs mt-1">+12% from last month</p> */}
            </div>
            <Briefcase className="w-10 h-10 text-blue-600" />
          </div>
        </div>
    


    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-sm">Total Applications</h2>
              <p className="text-2xl font-bold">24</p>
              {/* <p className="text-green-600 text-xs mt-1">+8% from last month</p> */}
            </div>
            <Users className="w-10 h-10 text-purple-600" />
          </div>
        </div>
        
        

        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-sm">Active Positions</h2>
              <p className="text-2xl font-bold">14</p>
              {/* <p className="text-green-600 text-xs mt-1">+8% from last month</p> */}
            </div>
            <TrendingUp className="w-10 h-10 text-blue-600" />
          </div>
        </div>


<div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-sm">Total Accept Applications</h2>
              <p className="text-2xl font-bold">24</p>
              {/* <p className="text-green-600 text-xs mt-1">+8% from last month</p> */}
            </div>
            <MailCheck  className="w-10 h-10 text-green-600" />
          </div>
        </div>


        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-gray-600 text-sm">Total Reject Applications</h2>
              <p className="text-2xl font-bold">24</p>
              {/* <p className="text-green-600 text-xs mt-1">+8% from last month</p> */}
            </div>
            <MailX   className="w-10 h-10 text-red-600" />
          </div>
        </div>


        </div>
    </div>
  );
}
