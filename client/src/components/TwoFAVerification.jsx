import React, { useState } from 'react';
import { verify2FA, reset2FA } from "../service/authApi";

const TwoFAVerification = ({ onVerifySuccess, onResetSuccess }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleTokenVerification = async (e) => {
    e.preventDefault();
    try {
      const { data } = await verify2FA(otp);
      onVerifySuccess(data);
    } catch (err) {
      setOtp("");
      console.log("The err is : ", err.message);
      setError("Invalid OTP");
    }
  };

  const handleReset = async () => {
    try {
      const { data } = await reset2FA();
      onResetSuccess(data);
    } catch (err) {
      console.log("The err is : ", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form
        onSubmit={handleTokenVerification}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Validate TOTP
        </h2>
        <p className="text-center text-gray-600 text-lg">
          Enter 6-digit Time-based OTP to verify 2FA authentication
        </p>

        <div>
          <label className="block text-gray-700 font-medium mb-1">TOTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter Your TOTP"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Verify TOTP
        </button>
        <button
          type="button"
          className="w-full bg-gray-500 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition"
          onClick={handleReset}
        >
          Reset 2FA
        </button>
      </form>
    </div>
  );
};

export default TwoFAVerification;
