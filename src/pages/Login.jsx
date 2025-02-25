import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className={"w-full max-w-md shadow-lg"}>
        <CardHeader>
          <CardTitle>
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div>
              <label htmlFor="" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type={"email"}
                placeholder="you@example.com"
                name={"email"}
                required
              />
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium text-gray-700">Password</label>
              <Input
                type={"password"}
                placeholder="••••••••"
                name={"password"}
                required
              />
            </div>
            <Button type={"submit"} 
            className={"mt-4 w-full bg-black text-white cursor-pointer hover:bg-black/80"}>Login</Button>
          </form>
          <p>Don't have an account?</p>
          <Link to={"/signup"}>
          <button
            type="button"
            // onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline ml-1"
          >
            Sign up
          </button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
