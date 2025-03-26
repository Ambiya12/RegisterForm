import {useState} from 'react';
import axios from 'axios'


const RegisterForm = () => {
    const [first_name, setFirst_Name] = useState('')
    const [last_name, setLast_Name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    console.log(first_name, last_name, email, password)

    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            const newUser = await axios.post('http://localhost:8000/api/register/', {first_name, last_name, email, password})
            if(newUser.status === 201){
                alert(newUser.data)
            }
        }
        catch(err){
            console.log(err.response.data)
            if(err){
                alert(err.response.data)
            }
        }
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign Up
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleRegistration} className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="first_name"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            First name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="first_name"
                                id="first_name"
                                autoComplete="given-name"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setFirst_Name(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="last_name"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Last name
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="last_name"
                                id="last_name"
                                autoComplete="family-name"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setLast_Name(e.target.value)}
                                />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm/6 font-medium text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setEmail(e.target.value)}
                                />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                onChange={e => setPassword(e.target.value)}
                                />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already a member?{' '}
                    <a href="/signin" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Sign in here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
