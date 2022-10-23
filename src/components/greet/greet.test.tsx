
// et should render the text hello and if the name is passed to the component 
// It should render hello followed by the name. Gre

import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('Greet render correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})
