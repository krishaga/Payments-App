import { Navbar } from "../components/NavBar"
import { Balance } from "../components/Balance"
import { UsersComponent } from "../components/UsersComponent"
export function Dashboard(){
    return <div>
        <Navbar></Navbar>
        <div>
            <Balance label={100000}></Balance>
            <UsersComponent></UsersComponent>
        </div>

    </div>
}