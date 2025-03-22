import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ResetPasswordHook } from "@/customHooks/user/resetPassword";
import { AlertError } from "@/utils/AlertError";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "@/components/loader/Loader";
export const ResetPassword = () => {
  const loader = useSelector((state) => state.loader.isLoader);
  const { handleResetPassword, password, setPassword, confirmPassword,
    setConfirmPassword, response } = ResetPasswordHook();
  return (
    <div className="flex items-center justify-center min-h-screen p-4 flex-col">
      {response && <div className="mb-4 w-full max-w-md"><AlertError response={response} /></div>}
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleResetPassword}
          >
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label className="block text-sm font-medium text-gray-700 mt-3">Confirm Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {loader ? <div className="mt-4"><LoadingSpinner/></div> : 
            <Button type="submit" className="mt-4 w-full bg-amber-300 text-black hover:bg-amber-400">
              Reset Password
            </Button>
            }
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
