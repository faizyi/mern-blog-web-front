import React, { useState } from "react";
import { LoadingSpinner } from "../loader/Loader";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

export const DeleteUser = ({ handleDeleteAccount }) => {
  const loader = useSelector((state) => state.loader.isLoader);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="text-center">
      {showConfirm ? (
        <div className="bg-red-100 p-4 rounded-lg shadow-md">
          <p className="text-red-600 font-semibold mb-3">
            Are you sure you want to delete your account? This action cannot be
            undone.
          </p>
          <div className="flex space-x-4 justify-center">
            <Button
              onClick={handleDeleteAccount}
              className="bg-red-600 text-white hover:bg-red-700 transition-all"
            >
              {loader ? <LoadingSpinner /> : "Yes, Delete"}
            </Button>
            <Button
              onClick={() => setShowConfirm(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 transition-all"
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setShowConfirm(true)}
          className="w-full bg-red-500 text-white hover:bg-red-600 transition-all"
        >
          Delete Account
        </Button>
      )}
    </div>
  );
};
