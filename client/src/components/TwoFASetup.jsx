import React, { useState, useEffect } from "react";
import { setup2FA } from "../service/authApi";

const TwoFASetup = ({ onSetupComplete }) => {
  const [response, setResponse] = useState({});
  const [message, setMessage] = useState("");

  const fetchQRCode = async () => {
    const { data } = await setup2FA();
    console.log(data);
    setResponse(data);
  };

  useEffect(() => {
    fetchQRCode();
  }, []);

  const copyClipBoard = async () => {
    await navigator.clipboard.writeText(response.secret);
    setMessage("Secret copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Turn on 2FA Verification
        </h2>
        <p className="text-center text-gray-600 text-lg">
          Scan the QR code below with your authenticator app
        </p>

        <div className="flex justify-center">
          {response.qrCode ? (
            <img
              src={response.qrCode}
              alt="2FA QR Code"
              className="mb-4 border-2 border-gray-200 rounded-lg shadow-sm"
            />
          ) : (
            <p className="text-gray-500">Loading QR Code...</p>
          )}
        </div>

        <div className="flex items-center mt-3 mb-3">
          <div className="border-t border-gray-200 flex-grow"></div>
          <div className="text-gray-600 text-sm font-light px-2">
            Or enter code manually
          </div>
          <div className="border-t border-gray-200 flex-grow"></div>
        </div>

        <div className="mb-6">
          {message && <p className="text-green-600 text-sm mb-3">{message}</p>}
          <input
            readOnly
            value={response.secret || ""}
            onClick={copyClipBoard}
            className="w-full border border-gray-300 rounded-lg p-3 text-sm text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
          <p className="text-gray-400 text-xs mt-1">Click to copy secret</p>
        </div>

        <button
          onClick={onSetupComplete}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Continue to Verification
        </button>
      </div>
    </div>
  );
};

export default TwoFASetup;
