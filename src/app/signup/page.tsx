"use client"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react";

export default function SignupPage() {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: ""
    })
    
    const [disableSubmit, setDisableSubmit] = useState(true)

    useEffect(() => {
        if (user.userName.length > 0 && user.email.length > 0 && user.password.length > 0) {
            setDisableSubmit(false)
        }
    }, [user]
    )

    const router = useRouter();

    function handleSubmit(e: any) {

        e.preventDefault();

        try {
            if (disableSubmit === false) {
                router.push("/login")
            }
        } catch (error) {
            console.log("Signup Failed!" + error)
        }
    }

    return (
        <div className="bg-blue-300 text-black min-h-screen">
            <div className="flex content-center pt-4 mb-4">
                <h1 className="text-blue-700 w-auto text-4xl font-bold m-auto">Sign up</h1>
            </div>

            <div className="flex justify-center mt-8">
                <div className="w-full max-w-1/3 p-8 border-4 border-amber-200 rounded-2xl bg-white shadow-md">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Username */}
                        <div>
                            <label htmlFor="userName" className="block text-blue-600 text-2xl mb-2">
                                Username:
                            </label>
                            <input
                                type="text"
                                id="userName"
                                className="w-full rounded-3xl p-3 border-2 border-black text-xl"
                                onChange={(e) => {
                                    setUser((prevUser) => ({
                                        ...prevUser,
                                        userName: e.target.value
                                    }))
                                }}
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-blue-600 text-2xl mb-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-3xl p-3 border-2 border-black text-xl"
                                onChange={(e) => {
                                    setUser((prevUser) => ({
                                        ...prevUser,
                                        email: e.target.value
                                    }))
                                }}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-blue-600 text-2xl mb-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full rounded-3xl p-3 border-2 border-black text-xl"
                                onChange={(e) => {
                                    setUser((prevUser) => ({
                                        ...prevUser,
                                        password: e.target.value
                                    }))
                                }}
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 rounded-3xl text-xl font-semibold hover:bg-blue-600"
                        >
                            {disableSubmit ? "Fill the details" : "Submit"}
                        </button>
                    </form >
                </div>
            </div>

            <div className="link-sigin text-2xl  flex justify-center mt-6 gap-2">
                <span>Already have an account?</span>
                <a href="./login/"><span className="hover:text-blue-600 hover:underline">Log In</span></a>
            </div>
        </div>
    )
}