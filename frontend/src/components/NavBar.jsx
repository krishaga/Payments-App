


export function Navbar({label}){
    return <div className="flex justify-between items-center px-4 w-full bg-slate-200 h-12 shadow-sm">
        <div className="font-bold align-middle">
            Payments App
        </div>
        <div className="flex justify-between gap-4  ">
            <div className="font-medium">
                Hello, User
            </div>
            <div className=" rounded-full w-7 h-7 bg-slate-500  text-center">
                U
            </div>
        </div>
    </div>
}