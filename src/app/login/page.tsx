'use client';

import { useState } from 'react';
import {useForm} from "react-hook-form"


import { Input } from "@/components/Input/Input";
import { Button } from '@/components/Button/button';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '@/lib/graphql/queries/login';
import { useRouter } from 'next/navigation';

export default function Login() {
    // const [mobile, setMobile] = useState('');
    // const [password, setPassword] = useState('');

    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        clearErrors,
        control,
    } = useForm()

    const [loginMutation, { loading, error, data }] = useMutation(LOGIN_MUTATION);



    const onSubmit = async (dataOnSubmit: any) => {
        console.log(dataOnSubmit, 'data on submit')
        // Add your login logic here (e.g., API call)

        try{
            const response   =await loginMutation({
                variables: {
                    input: {
                        mobile: dataOnSubmit.mobile,
                        password: dataOnSubmit.password
                    }
                }
            })

            console.log(response, 'respon')

            if(response.data){
                router.push('/feed')
            }
        }
        catch(error){
            console.log(error, 'got some error')
        }


    };
    return (
        <>
            {/* <h1>Login Page</h1>

        <Input type="text" name="mobile" /> */}

            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <a
                                href="/register"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                create a new account
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className='my-3'>
                                <Input
                                    id="mobile"
                                    name="mobile"
                                    label="Mobile"
                                    labelClassName="sr-only"
                                    type="text"
                                    // required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Mobile"
                                    // value={mobile}
                                    register={register("mobile", {
                                        required: "Mobile is requried.",
                                        onChange: (e) => {
                                            console.log(e.target.value, 'event target')
                                            e.target.value = e.target.value.replace(/[^0-9]/g, "")
                                            if (e.target.value.length > 10) {
                                                e.target.value = e.target.value.slice(0, 10)
                                            }
                                        },
                                    })}
                                    error={errors.mobile}
                                />
                            </div>
                            <div>
                                <Input
                                    id="password"
                                    name="password"
                                    label="Password"
                                    labelClassName="sr-only"
                                    type="password"
                                    // required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    register={register("password", {
                                        required: "Password is required."
                                    })}
                                    error={errors.password}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="/forgot-password"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                name="Sign In"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}