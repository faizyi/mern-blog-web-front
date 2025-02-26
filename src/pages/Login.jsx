import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { LoginHook } from '@/customHooks/user/login'
export const Login = () => {
  const { register, handleSubmit, errors, onSubmit} = LoginHook();
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className={"w-full max-w-md shadow-lg"}>
        <CardHeader>
          <CardTitle>
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type={"email"}
                placeholder="you@example.com"
                {...register("email", { required: true })}
              // required
              />
              {errors.email && <p className='text-red-500'>Email is required</p>}
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium text-gray-700">Password</label>
              <Input
                type={"password"}
                placeholder="••••••••"
                {...register("password", { required: true })}
              // required
              />
              {errors.password && <p className='text-red-500'>Password is required</p>}
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
