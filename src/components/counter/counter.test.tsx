import { render, screen } from "@testing-library/react"
import { Counter } from "./counter"
import user from "@testing-library/user-event";

describe('counter', () => {
    test('render correctly', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInTheDocument()

        const buttonElement = screen.getByRole('button', {
            name: 'Increment'
        })
        expect(buttonElement).toBeInTheDocument()
    })

    test('test render counter of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('render the counter of 1 clicking the increment button', async () => {
        user.setup()
        render(<Counter />)

        const buttonElement = screen.getByRole('button', {
            name: 'Increment'
        })
        await user.click(buttonElement)

        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')



    })
})