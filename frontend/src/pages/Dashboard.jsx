import { Navbar } from "../components/NavBar"
import { Balance } from "../components/Balance"
import { UsersComponent } from "../components/UsersComponent"
import { useEffect, useState } from "react";
import axios from "axios";


export function Dashboard(){
    const [balance,setBalance] = useState(0);
    const [label, setUserName] = useState("");

    useEffect(() => {
        const getBalance = async () => {
            const data = await axios.get("http://localhost:3000/api/v1/account/balance",{
                headers : {
                    Authorization : "Bearer " + localStorage.getItem('token')
                }
            })
            setBalance(data.data.amount)
        }
        getBalance()
    },[])

    useEffect(() => {
        const gettingData = async() => {
        try{
            const data = await axios.get('http://localhost:3000/api/v1/user/userdetailbyid',{
                headers : {
                    Authorization : "Bearer " + localStorage.getItem('token')
                }
            })
            setUserName(data.data.userdetails[0].firstName)
        }catch(err){
            window.alert(data.data.message)
        }}
        gettingData()
    },[])


    return <div>
        <Navbar label={label}></Navbar>
        <div>
            <Balance label={balance}></Balance>
            <UsersComponent></UsersComponent>
        </div>

    </div>
}
