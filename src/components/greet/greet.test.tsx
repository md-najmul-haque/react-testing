
// et should render the text hello and if the name is passed to the component 
// It should render hello followed by the name. Gre

import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

describe('Greet', () => {

    test('Greet render correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {

        test('Greet render correctly followed by name', () => {
            render(<Greet name='Najmul' />)
            const textElement = screen.getByText('Hello Najmul')
            expect(textElement).toBeInTheDocument()
        })
    })


})