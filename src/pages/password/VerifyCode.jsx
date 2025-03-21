import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const enteredCode = code.join("");
    console.log("Entered Code:", enteredCode);
    // TODO: Verify the reset code API
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Enter Reset Code</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify}
          >
            <div className="flex justify-center gap-3">
              {[1, 2, 3, 4].map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-xl border-gray-400"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
            <Button
             type="submit" className="mt-4 w-full bg-black text-white hover:bg-black/80">
              Verify Code
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
