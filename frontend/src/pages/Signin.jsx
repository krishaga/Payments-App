import { Heading } from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { BottomWarning } from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


export function Signin(){
    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    return  <div className=" bg-slate-400 h-screen flex justify-center ">
                <div className=" flex flex-col justify-center ">
                    <div className=" bg-white w-80 p-4 pt-6 h-max rounded-lg text-center ">
                        <Heading label={"SignIn"} />
                        <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
                        <InputBox label={"Email"} value={username} placeholder={"Enter Email-id"} onChange={(e) => {
                            setUserName(e.target.value);
                        }} ></InputBox>
                        <InputBox label={"Password"} isPassword={true} value={password} placeholder={"Enter Password"} onChange={(e) => {
                            setPassword(e.target.value)
                        }} ></InputBox>
                        <button 
                            type="button" 
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4 w-full me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                            onClick={ async () => {
                                try{  
                                const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                                    username,
                                    password
                                },)
                                window.alert(response.data.message)
                                localStorage.setItem("token", response.data.token)
                                navigate('/Dashboard')
                                }catch (error) {
                                    console.error('Error signing in:', error);
                                    // Handle errors appropriately
                                }
                            }} 
                            >
                            Sign in
                        </button>
                        <BottomWarning label={"Don't have an account? "} buttonText={"Sign up"} to={"/Signup"}></BottomWarning>
                    </div>
                </div>
            </div>
}