// import './App.css'
import './sass/app.scss'
import UsersTable from './components/UsersTable'
import NewUserForm from './components/NewUserForm'
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <main>
                <h1>Test Add user</h1>
                <UsersTable />
                <NewUserForm />
            </main>
        </Provider>
    )
}

export default App
