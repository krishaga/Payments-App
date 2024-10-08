


export function InputBox({label, placeholder, isPassword=false, onChange}){
    return <div className="p-1">
        <div className="text-sm py-2 text-left font-medium pt-1 ">{label}</div>
        
        <input placeholder={placeholder} onChange={onChange} type={isPassword ? "password" : "text"}  className="border border-gray-200 rounded w-full px-2 py-1 "/>
    </div>
}