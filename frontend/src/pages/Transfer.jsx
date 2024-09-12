import { Heading } from "../components/Heading";





export function SendMoney(){
    return <div className="flex items-center justify-center h-screen bg-gray-100" >
        <div className=" shadow-lg flex flex-col items-center w-96 pt-10 bg-white rounded-md">
            <Heading label={"Send Money"} />
            <div className="pt-10 w-full flex flex-col justify-center">
                <div className="flex gap-3 pt-4 pl-10 items-center">
                    <div className="w-12 h-12 rounded-full flex items-center text-2xl  text-white justify-center bg-green-500 ">
                        A
                    </div>
                    <div className=" text-2xl font-bold">
                        Friend's Name
                    </div>
                </div>
                <div className="font-semibold pl-12 py-1">
                    Amount (in Rs)
                </div>
                <div className="px-10 pb-2">
                    <div className="text-sm py-2 text-left font-medium pt-1 "></div>
                    <input placeholder="Enter Amount"  className="border border-gray-200 rounded w-full px-2 py-1 "/>
                </div>
                <div className="mx-10 mt-2 mb-8" >
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Initiate Transfer</button>
                </div>
            </div>
        </div>
    </div>
}