import { LoadingSpinner } from "@/components/loader/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ForgotPasswordHook } from "@/customHooks/user/forgotPassword";
import { AlertError } from "@/utils/AlertError";
import { useSelector } from "react-redux";
export const ForgotPassword = () => {
  const loader = useSelector((state) => state.loader.isLoader);
  const { handleSendCode, email, setEmail, response } = ForgotPasswordHook();
  return (
    <div className="flex items-center justify-center min-h-screen p-4 flex-col">
      {response && <div className="mb-4 w-full max-w-md"><AlertError response={response} /></div>}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Forgot Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSendCode}
          >
            <label className="block text-sm font-medium text-gray-700">
              Enter your email
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {loader ? <div className="mt-4"><LoadingSpinner/></div> : 
            <Button
              type="submit" className="mt-4 w-full bg-amber-400 text-black hover:bg-amber-300">
              Send Code
            </Button>
            }
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
