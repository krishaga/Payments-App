


export function InputBox({label, placeholder}){
    return <div className="">
        <div className="text-sm py-2 text-left font-medium pt-1 ">{label}</div>
        <input placeholder={placeholder} className="border border-black rounded w-full px-2 py-1  "/>
    </div>
}