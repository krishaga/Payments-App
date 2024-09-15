


export function SearchBar({onChange}){
    return <div className="mx-10">
        <input onChange={onChange}  placeholder="Search users...." className="pl-4 border border-gray-300 h-10 placeholder:text-gray-600 placeholder:font-medium rounded-md w-full" />
    </div>
}