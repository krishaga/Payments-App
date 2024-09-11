import { Heading } from "./Heading"
import { SearchBar } from "./SearchBar"


export function UsersComponent({label}){ 
    return <div>
        <div className="font-bold text-2xl pl-10 pb-4 text-black">
            Users
        </div>
        <SearchBar></SearchBar>
        <div className="grid grid-cols-2 items-center m-10  ">
            <div className="flex items-center justify-start">
                <div className="w-9 h-9 rounded-full bg-slate-200 text-center flex items-center justify-center">
                    U1
                </div>
                <div className="font-bold text-lg  pl-5  ">
                    User 1
                </div>
            </div>
            <div className="flex justify-end -mr-2">
                <button 
                    type="button" 
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-4 px-6 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={'/Dashboard'}>
                    Send Money
                </button>
                
            </div>
        </div>
    </div>
}