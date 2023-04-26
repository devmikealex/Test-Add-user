import User from '../types/User'

interface Props {
    user: User
}

function UserRow({user}: Props) {
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
    )
}

export default UserRow
