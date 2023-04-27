import { useState } from 'react'
import { MouseEvent, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/usersSlice'
import User from '../types/User'
import validate from '../utils/validate'

// TODO должно приходить с бека, но его нет
let fakeID = 10
function getFakeID() {
    return ++fakeID
}

function NewUserForm() {
    const dispatch = useDispatch()

    const nameRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    const [valid, setValid] = useState([true, true, true])

    function submit(e: MouseEvent) {
        e.preventDefault()
        let user: User
        if (nameRef.current && usernameRef.current && emailRef.current) {
            user = {
                id: 9999, //fake
                name: nameRef.current.value,
                username: usernameRef.current.value,
                email: emailRef.current.value,
            }

            const valid = validate(user)
            setValid(valid)
            if (valid.join() == 'true,true,true') {
                //? TODO Send user?
                dispatch(addUser({ ...user, id: getFakeID() }))
                // Reset Form
                nameRef.current.value = ''
                usernameRef.current.value = ''
                emailRef.current.value = ''
            }
        }
    }

    return (
        <section className='container'>
            <form>
                <h4>Create a new user</h4>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    placeholder='Enter name'
                    required
                    ref={nameRef}
                />
                {valid[0] || <div className='error'>Name required</div>}

                <label htmlFor='username'>User Name</label>
                <input
                    id='username'
                    type='text'
                    placeholder='Enter username'
                    required
                    ref={usernameRef}
                />
                {valid[1] || <div className='error'>Namename required</div>}

                <label htmlFor='email'>Email</label>
                <input id='email' type='email' placeholder='Enter email' ref={emailRef} />
                {valid[2] || <div className='error'>Email required</div>}

                <button onClick={submit}>Add</button>
            </form>
        </section>
    )
}

export default NewUserForm
