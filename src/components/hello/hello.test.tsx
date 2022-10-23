import { render, screen } from "@testing-library/react"
import { Hello } from "./hello"

test('Hello render correctly', () => {
    render(<Hello />)
    const textElement = screen.getByText('First Test')
    expect(textElement).toBeInTheDocument()
})