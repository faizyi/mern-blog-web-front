import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { SignupHook } from '@/customHooks/user/signup'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  const { register, handleSubmit, errors, onSubmit } = SignupHook()
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className={"w-full max-w-md shadow-lg"}>
        <CardHeader>
          <CardTitle>
            Signup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="" className="block text-sm font-medium text-gray-700">UserName</label>
              <Input
              type={"text"}
              placeholder="John Doe"
              {...register("username", { required: true })}
              // required
              />
              {errors.username && <p className='text-red-500'>Username is required</p>}
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium text-gray-700">Your Email</label>
              <Input
              type={"email"}
              placeholder="you@example.com"
              {...register("email", { required: true })}
              // required
              />
              {errors.email && <p className='text-red-500'>Email is required</p>}
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium text-gray-700">Your Password</label>
              <Input
              type={"password"}
              placeholder="••••••••"
              {...register("password", { required: true })}
              // required
              minLength={6}
              />
              {errors.password && <p className='text-red-500'>Password is required</p>}
            </div>
            <Button type={"submit"} 
            className="mt-4 w-full bg-amber-300 text-black 
            cursor-pointer hover:bg-amber-400 transition duration-200">Signup</Button>
          </form>
          <p className="mt-3 text-center">Already have an account?
            <Link to="/login" className="text-blue-500 hover:underline ml-1">
              Login
            </Link>
            </p>
        </CardContent>
      </Card>
      </div>
  )
}
