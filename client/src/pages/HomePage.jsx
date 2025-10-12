import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSession } from "../context/SessionContext";
import { logoutUser } from "../service/authApi";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useSession();

  const handleLogout = async() => {
    try{
      const { data } = await logoutUser();
      logout(data);
      navigate("/login");
    } catch(error) {
      console.log("Error : ", error.message);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome, {user.username}!</h2>
        <p className="text-gray-600 mb-4">You have successfully logged in and verified your 2FA.</p>
        <button 
          onClick={handleLogout} 
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default HomePage;
