import { RootState } from "../store/store"
import User from "../types/User"
import UserRow from "./UserRow"
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { loadUsers } from '../features/usersSlice'

interface Props {
    users: User[]
}

//TODO delete props

function UsersTable({users: userss}:Props) {
    const dispatch = useDispatch()
    const users = useSelector((state: RootState) => state.users)

    return (
        <section className="container">
            <h2>Users list ({users.length}):</h2>
            <button id='loadBtn' onClick={()=>dispatch(loadUsers())}>Load</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>EMail</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: User) => {
                        return <UserRow key={user.id} user={user} />
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default UsersTable
