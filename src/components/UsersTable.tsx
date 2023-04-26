import User from "../types/User"
import UserRow from "./UserRow"

interface Props {
    users: User[]
}

function UsersTable({users}:Props) {
    return (
        <section className="container">
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
