import { useEffect } from 'react'
import { AppDispatch, RootState } from '../store/store'
import User from '../types/User'
import UserRow from './UserRow'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchUsers } from '../features/usersSlice'

function UsersTable() {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const users = useSelector((state: RootState) => state.users)

    return (
        <section className='container'>
            <h2>Users list ({users.length}):</h2>
            <button id='loadBtn' onClick={() => dispatch(fetchUsers())}>
                Load default users list
            </button>
            <div className='tablewrapper'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: User) => {
                            return <UserRow key={user.id} user={user} />
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default UsersTable
