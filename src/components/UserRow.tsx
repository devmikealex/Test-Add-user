import { deleteUser } from '../features/usersSlice'
import User from '../types/User'
import { useDispatch } from 'react-redux'
import xIcon from '/assets/x-icon.svg'


interface Props {
    user: User
}

function UserRow({ user }: Props) {
    const dispatch = useDispatch()

    return (
        <tr>
            <td><div className='id-cell'>{user.id}</div></td>
            <td className='clickable' onClick={() => dispatch(deleteUser(user.id))}>
                {user.name}
                <div className='warnIcon'><img src={xIcon} className="x-icon" alt="x icon" /></div>
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
    )
}

export default UserRow
