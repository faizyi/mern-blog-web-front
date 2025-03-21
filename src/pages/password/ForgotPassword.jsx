import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ForgotPasswordHook } from "@/customHooks/user/forgotPassword";
export const ForgotPassword = () => {
  const {handleSendCode, email, setEmail} = ForgotPasswordHook();
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
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
            <Button
             type="submit" className="mt-4 w-full bg-amber-400 text-black hover:bg-amber-300">
              Send Code
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
