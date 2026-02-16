import React, { useState } from 'react'
import fullStack from '../assets/images/full-stack-3.jpg'
function Login() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState('');

    




  return (
    <div>
        <div className="bg-[#D3D7D8]  w-full h-screen flex justify-center gap-10">

            <div className="w-full">
                <div className="w-200">
                    <img className="w-full h-full"src={fullStack} alt="" />
                </div>
            </div>
            
            <div className="w-full flex justify-center items-center">
                <div className="rounded-xl shadow shadow-red-500 bg-white w-100 flex flex-col gap-6 p-4">
                    <h1 className="text-center text-4xl font-bold">Welcome</h1>
                    <div>
                        <input className="border border-gray-500 w-full p-2 " type="text" placeholder='Email or Phone number'/>     
                    </div>
                    <div>
                        <input className="border w-full p-2" type="text" placeholder='Password' />
                    </div>
                    <div>
                        <p className="text-red-500 text-center">Forgot password?</p>
                    </div>
                    <div className="flex justify-around gap-4 mb-4 ">
                        <a href="/home" className="w-full">
                            <button className="bg-green-500 hover:bg-green-400 transition-all duration-200 hover:cursor-pointer text-white w-full p-2" >Login</button>
                        </a>
                        <a href="" className="w-full">
                            <button className="bg-red-500 hover:bg-red-400 transition-all duration-200 text-white hover:cursor-pointer w-full p-2">Register</button>

                        </a>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Login