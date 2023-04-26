import { useRef } from "react"
import User from "../types/User"

function NewUserForm() {
    const nameRef = useRef<HTMLInputElement|null>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    function submit() {
        const user: User = {
            id: 999,
            name: nameRef.current ? nameRef.current.value : '',
            username: usernameRef.current ? usernameRef.current?.value : '',
            email: emailRef.current ? emailRef.current?.value : '',
        }
        console.log(user);

        //Send user

        // Reset Form
    }

    return (
        <section className="container">
            <form>
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
