import React from "react";
import {Link} from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <nav className="bg-indigo-500 h-20 flex justify-end py-5">
        <div className="w-20 rounded-md bg-indigo-800 hover:bg-blue-500 relative text-white">
         <Link to='/' className="flex justify-center p-2"> Logout</Link>
        </div>
      </nav>
    </>
  );
}

export default Dashboard;
