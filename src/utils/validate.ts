import User from '../types/User'

export default function validate({ name, username, email }: User): boolean[] {
    let a = true,
        b = true,
        c = true
    if (name.trim() == '') {
        a = false
    }
    if (username.trim() == '') {
        b = false
    }
    if (email.trim() == '') {
        c = false
    }
    return [a, b, c]
}
