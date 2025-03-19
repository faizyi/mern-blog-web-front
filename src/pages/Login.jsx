import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LoginHook } from '@/customHooks/user/login';

export const Login = () => {
  const { register, handleSubmit, errors, onSubmit } = LoginHook();

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                {...register("email", { required: true })}
              />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </div>

            {/* Password Input */}
            <div className="mt-3">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                type="password"
                id="password"
                placeholder="••••••••"
                {...register("password", { required: true })}
              />
              {errors.password && <p className="text-red-500">Password is required</p>}

              {/* Forgot Password Link */}
              <div className="text-right mt-1">
                <Link to="/user/forgot-password" className="text-blue-500 hover:underline text-sm">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            <Button type="submit" className="mt-4 w-full bg-black text-white cursor-pointer hover:bg-black/80">
              Login
            </Button>
          </form>

          {/* Signup Link */}
          <p className="mt-3 text-center">
            Don't have an account?
            <Link to="/signup" className="text-blue-500 hover:underline ml-1">
              Sign up
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
