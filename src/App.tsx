import { useEffect, useState } from 'react'
import './App.css'
import User from './types/User'
import UsersTable from './components/UsersTable'
import NewUserForm from './components/NewUserForm'

function App() {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://jsonplaceholder.typicode.com/users')
            const users: User[] = await res.json()
            setUsers(users)
        }
        fetchData().catch(console.error)
    }, [])

    return (
        <main>
            <h1>Test KRUG</h1>
            <NewUserForm />
            <UsersTable users={users} />
        </main>
    )
}

export default App
