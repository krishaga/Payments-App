import { Link } from "react-router-dom"


export function BottomWarning({label, buttonText, to}){
    return <div className=" flex justify-center py-2 font-medium text-sm ">
        <div>
            {label}
        </div>
        <Link className="underline cursor-pointer px-2" to={to}>
            {buttonText}
        </Link>
    </div>
}