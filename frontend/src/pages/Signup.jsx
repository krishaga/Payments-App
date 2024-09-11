import { Heading } from "../components/Heading";
import {SubHeading} from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { BottomWarning } from "../components/BottomWarning";



export function Signup(){
    return <div className=" bg-slate-400 h-screen flex justify-center ">
        <div className=" flex flex-col justify-center ">
            <div className=" bg-white w-80 p-4 pt-6 h-max rounded-lg text-center ">
                <Heading label={"SignUp"} />
                <SubHeading label={"Enter your information to create an account"}></SubHeading>
                <InputBox label={"First Name"} placeholder={"Enter First Name"}></InputBox>
                <InputBox label={"Last Name"} placeholder={"Enter Last Name"}></InputBox>
                <InputBox label={"Email"} placeholder={"Enter Email-id"}></InputBox>
                <InputBox label={"Password"} isPassword={true} placeholder={"Enter Password"}></InputBox>
                <button 
                    type="button" 
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 my-4 w-full me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={'/Dashboard'}>
                    Sign up
                </button>
                <BottomWarning label={"Already have an account? "} buttonText={"Sign in"} to={"/Signin"}></BottomWarning>
            </div>
        </div>
    </div>
}