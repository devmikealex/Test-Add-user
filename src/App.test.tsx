import { cleanup, fireEvent, render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

import App from './App'

describe('Main visibility test', () => {
    beforeAll(() => {
        render(<App />)
    })

    it('Headers', () => {
        expect(screen.getByText('Test Add user')).toBeInTheDocument()
        expect(screen.getByText('Users list (3):')).toBeInTheDocument()
    })
    it('Buttons', () => {
        expect(
            screen.getByRole('button', { name: 'Load default users list' })
        ).toBeInTheDocument()
    })
    it('Table', () => {
        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getByText('Default Name 1')).toBeInTheDocument()
        expect(screen.getByText('Default Name 2')).toBeInTheDocument()
        expect(screen.getByText('Default Name 3')).toBeInTheDocument()
    })
    it('Form', () => {
        expect(
            screen.getByText(
                (content, element) => element?.tagName.toLowerCase() === 'form'
            )
        ).toBeInTheDocument()
        expect(screen.getByText('Create a new user')).toBeInTheDocument()
        expect(screen.queryByText('Name required')).toBeNull()
        expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
    })
})

describe('Form validation test', () => {
    // beforeAll(() => {
    //     cleanup()
    //     render(<App />)
    // })

    let add: HTMLButtonElement

    it('Test for all empty inputs', () => {
        add = screen.getByRole('button', { name: 'Add' })
        fireEvent.click(add)
        expect(screen.queryByText('Name required')).toBeInTheDocument()
        expect(screen.queryByText('Namename required')).toBeInTheDocument()
        expect(screen.queryByText('Email required')).toBeInTheDocument()
    })

    it('Test for Name only', async () => {
        const a = screen.getByPlaceholderText('Enter name') as HTMLInputElement
        fireEvent.change(a, { target: { value: 'Aaaaa aaa' } })
        // console.log(a.value);
        // expect(a.value).toBeTruthy()
        // expect(b.value).toBe('AAA')
        fireEvent.click(add)
        expect(screen.queryByText('Name required')).toBeNull()
        expect(screen.queryByText('Namename required')).toBeInTheDocument()
        expect(screen.queryByText('Email required')).toBeInTheDocument()
    })

    it('Test for Name and Username', () => {
        const b = screen.getByPlaceholderText('Enter username') as HTMLInputElement
        fireEvent.change(b, { target: { value: 'Bbbb bbbb' } })
        fireEvent.click(add)
        expect(screen.queryByText('Name required')).toBeNull()
        expect(screen.queryByText('Namename required')).toBeNull()
        expect(screen.queryByText('Email required')).toBeInTheDocument()
    })

    it('Test for all inputs', () => {
        const c = screen.getByPlaceholderText('Enter email') as HTMLInputElement
        fireEvent.change(c, { target: { value: 'Cccc ccc cc' } })
        fireEvent.click(add)
        expect(screen.queryByText('Name required')).toBeNull()
        expect(screen.queryByText('Namename required')).toBeNull()
        expect(screen.queryByText('Email required')).toBeNull()
    })

    it('Check new user in table', () => {
        expect(screen.getByText('Aaaaa aaa')).toBeInTheDocument()
        expect(screen.getByText('Bbbb bbbb')).toBeInTheDocument()
        expect(screen.getByText('Cccc ccc cc')).toBeInTheDocument()
    })

    it('Delete new user in table', () => {
        fireEvent.click(screen.getByText('Aaaaa aaa'))
        expect(screen.queryByText('Cccc ccc cc')).toBeNull()
    })
})
