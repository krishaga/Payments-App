import { Navbar } from "../components/NavBar"
import { Balance } from "../components/Balance"
import { UsersComponent } from "../components/UsersComponent"
import { useEffect, useState } from "react";
import axios from "axios";


export function Dashboard(){
    const [balance,setBalance] = useState(0);

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



    return <div>
        <Navbar label={"Krish"}></Navbar>
        <div>
            <Balance label={balance}></Balance>
            <UsersComponent></UsersComponent>
        </div>

    </div>
}
