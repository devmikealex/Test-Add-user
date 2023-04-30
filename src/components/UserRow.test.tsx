import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import { store } from '../store/store'

import UserRow from './UserRow'

const testUser = {
    id: 555,
    name: 'Default Name 555',
    username: 'Test555',
    email: '555@com.com',
}

it('Test row for users props', () => {
    // const table = document.createElement('table')

    const { baseElement, container } = render(
        <Provider store={store}>
            <UserRow user={testUser} />
        </Provider>,
        // { container: table }
        // { baseElement: null }
    )
    screen.debug()
    // expect(baseElement).toMatchSnapshot()
    expect(container).toMatchSnapshot()
    expect(screen.getByText('Default Name 555')).toBeInTheDocument()
    expect(screen.getByText('Test555')).toBeInTheDocument()
    expect(screen.getByText('555@com.com')).toBeInTheDocument()
})
