import React from 'react'
import CaptchaGenerator from './CaptchaGenerator'

const AdvocateLogin = () => {
    return (
        <section className="bg-white-50 dark:bg-white-900 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                {/* <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Flowbite    
      </a> */}
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-100 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black text-center">
                            Sign in to your account
                        </h1>
                        <br />
                        <htmlForm className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Lawyer's Id</label>
                                <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <CaptchaGenerator />
                            <div>
                                <a href="/otp" className='font-semibold'>Click here for number verification</a></div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-black dark:text-black-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-green-300">Sign in</button>
                            <p className="text-sm font-light text-gray-700 dark:text-gray-700">
                                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                            </p>
                        </htmlForm>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default AdvocateLogin