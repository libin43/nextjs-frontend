'use client'

import { Button } from "@/components/Button/button"
import { CREATE_POST_MUTATION } from "@/lib/graphql/mutations/createPost";
import { useMutation } from "@apollo/client";
import { useRouter } from 'next/navigation';
import { Input } from "@/components/Input/Input";
import { useForm } from "react-hook-form"
import { TextArea } from "@/components/Input/TextArea";

export default function CreatePost() {

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

    const [createPostMutation, { loading, error, data }] = useMutation(CREATE_POST_MUTATION)


    const onSubmit = async (dataOnSubmit: any) => {
        console.log(dataOnSubmit, 'data on submit')

        try {
            const response = await createPostMutation({
                variables: {
                    input: {
                        content: 'sj',
                        title: ''
                    }
                },
            })

            console.log(response, 'respon')

            if (response.data) {
                router.push('/feed')
            }
        }
        catch (error) {
            console.log(error, 'got some error')
        }


    };

    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create New Post
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className='my-3'>
                                <Input
                                    id="title"
                                    name="title"
                                    label="Title"
                                    labelClassName="sr-only"
                                    type="text"
                                    // required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Title"
                                    // value={mobile}
                                    register={register("title", {
                                        required: "Title is requried.",
                                    })}
                                    error={errors.title}
                                />
                            </div>
                            <div>
                                <TextArea
                                    id="content"
                                    name="content"
                                    label="Content"
                                    labelClassName="sr-only"
                                    // required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Content"
                                    // value={mobile}
                                    register={register("content", {
                                        required: "Content is requried.",
                                    })}
                                    error={errors.content}
                                />
                            </div>
                        </div>


                        <div>
                            <Button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                name="Create Post"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}