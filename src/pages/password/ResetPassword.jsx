import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const ResetPassword = () => {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const handleResetPassword = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     console.log("New Password:", password);
//     // TODO: Implement API call to reset password
//   };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form 
        //   onSubmit={handleResetPassword}
          >
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <Input
              type="password"
              placeholder="••••••••"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-3">Confirm Password</label>
            <Input
              type="password"
              placeholder="••••••••"
            //   value={confirmPassword}
            //   onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <Button type="submit" className="mt-4 w-full bg-amber-300 text-black hover:bg-amber-400">
              Reset Password
            </Button>
          </form>

          <p className="mt-3 text-center">
            Remember your password?
            <Link to="/login" className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
