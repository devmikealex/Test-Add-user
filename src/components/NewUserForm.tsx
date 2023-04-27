import { MouseEvent, useRef } from "react"
import { useDispatch } from 'react-redux'
import { addUser } from "../features/usersSlice"
import User from "../types/User"

// TODO должно приходить с бека, но его нет
let fakeID = 10 
function getFakeID() {
    return ++fakeID
}

function NewUserForm() {
    const dispatch = useDispatch()

    const nameRef = useRef<HTMLInputElement|null>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    function submit(e: MouseEvent) {
        e.preventDefault()
        const user: User = {
            id: getFakeID(),
            name: nameRef.current ? nameRef.current.value : '',
            username: usernameRef.current ? usernameRef.current?.value : '',
            email: emailRef.current ? emailRef.current?.value : '',
        }
        // console.log(user);

        dispatch(addUser(user))

        //Send user

        // Reset Form
    }

    return (
        <section className="container">
            <form>
                <h4>Create a new user</h4>
                <label htmlFor="name">Name</label>
                <input id="name" type='text' placeholder="Enter name" ref={nameRef}/>

                <label htmlFor="username">User Name</label>
                <input id="username" type='text' placeholder="Enter username" ref={usernameRef}/>

                <label htmlFor="email">Email</label>
                <input id="email" type='email' placeholder="Enter email" ref={emailRef}/>

                <button onClick={submit}>Add</button>
            </form>
        </section>
    )
}

export default NewUserForm
