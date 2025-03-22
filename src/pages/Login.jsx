import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LoginHook } from '@/customHooks/user/login';
import { AlertError } from '@/utils/AlertError';
import { useSelector } from 'react-redux';
import { LoadingSpinner } from '@/components/loader/Loader';
export const Login = () => {
  const loader = useSelector((state) => state.loader.isLoader);
  const { register, handleSubmit, errors, onSubmit, response, reset } = LoginHook();
  return (
    <div className="flex items-center justify-center min-h-screen p-4 flex-col">
      {response && <div className="mb-4 w-full max-w-md"><AlertError reset={reset} response={response} /></div>}
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
                <Link to="/forgot-password" className="text-blue-500 hover:underline text-sm">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Login Button */}
            {loader ? <LoadingSpinner /> : 
            <Button type="submit"
              className="mt-4 w-full bg-amber-300 text-black 
            cursor-pointer hover:bg-amber-400 transition duration-200">
              Login
            </Button>
            }
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
