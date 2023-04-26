import { deleteUser } from '../features/usersSlice'
import User from '../types/User'
import { useDispatch } from 'react-redux'


interface Props {
    user: User
}

function UserRow({user}: Props) {
    const dispatch = useDispatch()

    return (
        <tr>
            <td>{user.id}</td>
            <td onClick={()=>dispatch(deleteUser(user.id))}>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
    )
}

export default UserRow
