import { fireEvent, render, screen } from '@testing-library/react'

import App from './App'

describe('Group A', () => {
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
        expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument()
    })
    it('Table', () => {
        expect(screen.getByRole('table')).toBeInTheDocument()
        expect(screen.getByText('Default Name 2')).toBeInTheDocument()
    })
    it('Form', () => {
        expect(screen.getByText('Create a new user')).toBeInTheDocument()
        expect(screen.queryByText('Name required')).toBeNull()
    })
    it('Form validation', () => {
        const add = screen.getByRole('button', { name: 'Add' })
        fireEvent.click(add)
        expect(screen.getByText('Name required')).toBeInTheDocument()
    })
})
